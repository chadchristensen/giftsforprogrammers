import sql from '@/lib/db';
import { PostQueryResult } from '@/lib/definitions';

// * This is where you will call SQL commands directly to the database to fetch data
// TODO: Fix the types mess

export const fetchPublishedPostBySlug = async (slug: string) => {
    try {
        const data = await sql<PostQueryResult[]>`
            SELECT 
                posts.title,
                posts.slug,
                posts.description,
                posts.image_src,
                posts.image_alt_text,
                posts.publish_date,
                posts.is_affiliate_link,
                posts.cta_link,
                posts.cta_text,
                categories.name as category
            FROM posts
            JOIN categories ON posts.category_id = categories.id
            WHERE posts.slug = ${slug} AND posts.publish_date <= CURRENT_DATE
            LIMIT 1;
        `;

        return data[0];
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error(`Failed to fetch post with the slug ${slug}.`);
    }
}

export const fetchPostBySlug = async (slug: string) => {
    try {
        const data = await sql<PostQueryResult[]>`
            SELECT 
                posts.id,
                posts.title,
                posts.slug,
                posts.description,
                posts.image_src,
                posts.image_alt_text,
                posts.publish_date,
                posts.is_affiliate_link,
                posts.cta_link,
                posts.cta_text,
                categories.name as category
            FROM posts
            LEFT JOIN categories ON posts.category_id = categories.id
            WHERE posts.slug = ${slug}
            LIMIT 1;
        `;

        return data[0];
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error(`Failed to fetch post with the slug ${slug}.`);
    }
}

export const fetchPublishedPostsByCategory = async (category: string) => {
    try {
        const categoryName = category.toLowerCase();
        // TODO: Might be more performant to switch the WHERE clause cases around
        const data = await sql<PostQueryResult[]>`
            SELECT 
                posts.title,
                posts.slug,
                posts.description,
                posts.image_src,
                posts.image_alt_text,
                posts.publish_date,
                posts.is_affiliate_link,
                posts.cta_link,
                posts.cta_text,
                categories.name as category
            FROM posts
            JOIN categories ON posts.category_id = categories.id
            WHERE posts.publish_date <= CURRENT_DATE AND Lower(categories.name) = ${categoryName}
            ORDER BY posts.publish_date DESC;
        `;

        return data;
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error(`Failed to fetch posts for category ${category}.`);
    }
}

export const fetchPublishedPosts = async () => {
    try {
        const data = await sql<PostQueryResult[]>`
            SELECT 
                posts.title,
                posts.slug,
                posts.description,
                posts.image_src,
                posts.image_alt_text,
                posts.publish_date,
                posts.is_affiliate_link,
                posts.cta_link,
                posts.cta_text,
                categories.name as category
            FROM posts
            JOIN categories ON posts.category_id = categories.id
            WHERE posts.publish_date <= CURRENT_DATE
            ORDER BY posts.publish_date DESC;
        `;

        return data;
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch published posts.');
    }
}

export const fetchPosts = async () => {
    try {
        const data = await sql<PostQueryResult[]>`
            SELECT 
                posts.title,
                posts.slug,
                posts.description,
                posts.image_src,
                posts.image_alt_text,
                posts.publish_date,
                posts.is_affiliate_link,
                posts.cta_link,
                posts.cta_text,
                categories.name as category
            FROM posts
            LEFT JOIN categories ON posts.category_id = categories.id
            ORDER BY posts.publish_date DESC;
        `;

        return data;
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch posts.');
    }
}