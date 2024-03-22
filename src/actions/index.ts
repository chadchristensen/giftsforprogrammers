"use server"

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signOut as logOut } from '@/lib/auth';
import { z } from "zod";
import { postFormSchema } from '@/lib/schemas';
import { getIsUserAdmin } from '@/lib/utils';

export interface PostFormState {
    message: string;
    post?: z.infer<typeof postFormSchema>;
    issues?: string[]
}

export async function createPost(
    formState: PostFormState,
    formData: FormData
): Promise<PostFormState> {
    const session = await auth()
    const isUserAdmin = getIsUserAdmin(session?.user?.email);

    if (!isUserAdmin) {
        throw new Error('Unauthorized access: User does not have admin privileges.');
    }

    // * isAffiliateLink comes in as a string of 'true' or 'false' so we need to convert it to a boolean
    const data = {
        ...Object.fromEntries(formData.entries()),
        isAffiliateLink: formData.get('isAffiliateLink') === 'true' ? true : false,
    };

    // * Here we are parsing the data against the zod schema to have server side validation
    const parsed = postFormSchema.safeParse(data);

    if (parsed.success) {
        // * We once again have to transform the data because the db expects null if category_id or publish_date don't have values
        const transformedParsedData = {
            ...parsed.data,
            categoryId: parsed.data.categoryId || null,
            publishDate: parsed.data.publishDate || null
        }
        const {
            title,
            slug,
            description,
            categoryId: category_id,
            imageSrc: image_src,
            imageAltText: image_alt_text,
            publishDate: publish_date,
            isAffiliateLink: is_affiliate_link,
            callToActionText: cta_text,
            callToActionLink: cta_link
        } = transformedParsedData;

        try {
            // TODO: Add created_at and updated_at fields
            await sql`
                INSERT INTO posts (title, slug, category_id, description, image_src, image_alt_text, publish_date, is_affiliate_link, cta_text, cta_link)
                VALUES (${title}, ${slug}, ${category_id}, ${description}, ${image_src}, ${image_alt_text}, ${publish_date}, ${is_affiliate_link}, ${cta_text}, ${cta_link})
            `;
        } catch (error) {
            return { message: 'Database Error: Failed to create Post.' };
        }

        // revalidatePath('/admin/posts');
        redirect('/admin/posts');
    } else {
        console.log(parsed.error);
        return { message: "Invalid data", issues: parsed.error.issues.map((issue) => issue.message) }
    }
}

export async function editPost(
    formState: PostFormState,
    formData: FormData
): Promise<PostFormState> {
    const session = await auth()
    const isUserAdmin = getIsUserAdmin(session?.user?.email);

    if (!isUserAdmin) {
        throw new Error('Unauthorized access: User does not have admin privileges.');
    }

    // * isAffiliateLink comes in as a string of 'true' or 'false' so we need to convert it to a boolean
    const data = {
        ...Object.fromEntries(formData.entries()),
        isAffiliateLink: formData.get('isAffiliateLink') === 'true' ? true : false,
    };

    // * Here we are parsing the data against the zod schema to have server side validation
    const parsed = postFormSchema.safeParse(data);

    if (parsed.success) {
        // * We once again have to transform the data because the db expects null if category_id or publish_date don't have values
        const transformedParsedData = {
            ...parsed.data,
            categoryId: parsed.data.categoryId || null,
            publishDate: parsed.data.publishDate || null
        }
        const {
            id,
            title,
            slug,
            description,
            categoryId: category_id,
            imageSrc: image_src,
            imageAltText: image_alt_text,
            publishDate: publish_date,
            isAffiliateLink: is_affiliate_link,
            callToActionText: cta_text,
            callToActionLink: cta_link
        } = transformedParsedData;

        try {
            await sql`
                UPDATE posts
                SET title = ${title}, slug = ${slug}, category_id = ${category_id}, description = ${description}, image_src = ${image_src}, image_alt_text = ${image_alt_text}, publish_date = ${publish_date}, is_affiliate_link = ${is_affiliate_link}, cta_text = ${cta_text}, cta_link = ${cta_link}, updated_at = NOW()
                WHERE id = ${id}
            `;
        } catch {
            return { message: 'Database Error: Failed to edit Post.' };
        }

        revalidatePath('/admin/posts');
        // ?: Do I need to revalidate EVERY path?
        revalidatePath(`/admin/posts/${slug}/edit`);
        redirect('/admin/posts');
    } else {
        console.log(parsed.error);
        return { message: "Invalid data", issues: parsed.error.issues.map((issue) => issue.message) }
    }
}

export async function deletePost(slug: string) {
    const session = await auth()
    const isUserAdmin = getIsUserAdmin(session?.user?.email);

    if (!isUserAdmin) {
        throw new Error('Unauthorized access: User does not have admin privileges.');
    }

    try {
        await sql`
            DELETE FROM posts 
            WHERE posts.slug = ${slug};
        `;

    } catch (error) {
        throw new Error('Failed to delete post');
    }

    console.log(`Deleted post with slug ${slug} successfully`);
    // ? Do I need to revalidate path here
    // ? Do I need to revalidate home path as well
    revalidatePath('/admin/posts');
}

export async function signOut() {
    try {
        return logOut();
    } catch (error) {
        console.error('Error signing out');
        throw new Error('Failed to sign out');
    }
}