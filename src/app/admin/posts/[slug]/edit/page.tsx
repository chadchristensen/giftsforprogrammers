import PageHeading from "@/components/PageHeading";
import { notFound } from 'next/navigation';
import { fetchPostBySlug } from "@/lib/data";
import { PostForm } from "@/components/PostForm";
import { editPost } from "@/actions";

export default async function EditPostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <PageHeading>Edit Post</PageHeading>
            <PostForm post={post} onFormSubmit={editPost} />
        </>
    )
}