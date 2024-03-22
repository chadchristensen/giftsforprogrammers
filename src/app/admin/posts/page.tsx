import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { fetchPosts } from "@/lib/data";

export default async function AdminPostsPage() {
    const posts = await fetchPosts();

    return (
        <>
            <PageHeading>Admin Dashboard</PageHeading>
            <Link className={cn(buttonVariants(), 'mb-6')} href={`/admin/posts/create`}>Create a Post</Link >
            <DataTable columns={columns} data={posts} />
        </>
    )
}

