import PageHeading from "@/components/PageHeading";
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image'
import Link from "next/link";
import { notFound } from 'next/navigation';
import { cn } from "@/lib/utils";
import { fetchPublishedPostBySlug } from "@/lib/data";
import CategoryLabel from "@/components/CategoryLabel";
import { Metadata } from "next";
import { Info } from 'lucide-react';
import { CONTENT } from "@/lib/constants";

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;
    // TODO: Need to cache this call so I don't need to call it again in the actual page
    const post = await fetchPublishedPostBySlug(slug);
    if (post) {
        return {
            title: post.title,
        }
    } else {
        return {
            title: '404 Not Found'
        }
    }
}

export default async function SinglePostPage({ params }: Props) {
    const post = await fetchPublishedPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const {
        title,
        category,
        image_src,
        image_alt_text,
        is_affiliate_link,
        description,
        cta_text,
        cta_link
    } = post;

    return (
        <>
            <PageHeading className="text-left">{title}</PageHeading>
            <Image
                className="mb-4"
                src={image_src}
                width={482}
                height={362}
                alt={image_alt_text}
                priority
            />
            <CategoryLabel category={category} />
            <p className="leading-7 [&:not(:first-child)]:mt-6" data-test="post-description">{description}</p>
            {
                is_affiliate_link ?
                    <div className="flex gap-1 items-center text-slate-700 my-2 text-sm">
                        <Info size={16} />
                        <p>{CONTENT.AFFILIATE_LINK}</p>
                    </div>
                    : null
            }
            <Link className={cn(buttonVariants(), "mt-4 w-full sm:w-fit")} href={cta_link} data-test="call-to-action">{cta_text}</Link>
        </>
    )
}