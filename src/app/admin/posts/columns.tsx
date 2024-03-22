"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PostQueryResult } from "@/lib/definitions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/actions";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const today = new Date();

export const columns: ColumnDef<PostQueryResult>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
            const value: string | undefined = row.getValue("category");

            if (!value) return <span>&mdash;</span>

            return value;
        }
    },
    {
        id: "status",
        accessorKey: "publish_date",
        header: "Status",
        cell: ({ row }) => {
            const value: Date | undefined = row.getValue("publish_date");
            const status = !value ? 'Draft' : value > today ? 'Scheduled' : 'Published';

            return status;
        }
    },
    {
        accessorKey: "publish_date",
        header: "Publish Date",
        cell: ({ row }) => {
            const value: Date | undefined = row.getValue("publish_date");

            if (!value) return <span>&mdash;</span>

            const date = new Date(value).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return date;

        }
    },
    {
        accessorKey: "is_affiliate_link",
        header: "Affiliate?",
        cell: ({ row }) => {
            return row.getValue("is_affiliate_link") ? "Yes" : "No";
        }
    },
    {
        id: "edit",
        accessorKey: "slug",
        header: "Edit",
        cell: ({ row }) => {
            const post = row.original;
            return <Link aria-label={`Edit post ${post.title}`} className={cn(buttonVariants({ variant: 'outline' }))} href={`/admin/posts/${post.slug}/edit`}>Edit</Link>
        }
    },
    {
        id: "delete",
        accessorKey: "slug",
        header: "Delete",
        cell: ({ row }) => {
            const post = row.original;
            const deletePostWithSlug = deletePost.bind(null, post.slug);

            return <form action={deletePostWithSlug}><Button type="submit" variant="destructive" aria-label={`Delete post ${post.title}`}>Delete</Button></form>
        }
    }
]
