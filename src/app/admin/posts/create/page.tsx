import { PostForm } from "@/components/PostForm";
import PageHeading from "@/components/PageHeading";
import { createPost } from "@/actions";

export default function CreatePostPage() {
    return (
        <>
            <PageHeading>Create a Post</PageHeading>
            <PostForm onFormSubmit={createPost} />
        </>
    )
}