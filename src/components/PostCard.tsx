import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import Image from 'next/image'
import CategoryLabel from "@/components/CategoryLabel";
import { CONTENT } from "@/lib/constants";

export type PostCardProps = {
    title: string;
    category: string;
    imageSrc: string;
    imageAltText: string;
    isAffiliateLink: boolean;
    slug: string;
    description: string;
    callToActionText: string;
    callToActionLink: string;
}

export default function PostCard({
    title,
    category,
    imageSrc,
    imageAltText,
    isAffiliateLink,
    slug,
    description,
    callToActionText,
    callToActionLink
}: PostCardProps) {
    return (
        <Card className="flex flex-col" data-test="post-card">
            <CardHeader className="gap-2">
                <Image
                    src={imageSrc}
                    width={482}
                    height={362}
                    alt={imageAltText}
                />
                <CardTitle><Link className="hover:underline" href={`/posts/${slug}`}>{title}</Link></CardTitle>
                <CategoryLabel category={category} />
                {isAffiliateLink ? <CardDescription>{CONTENT.AFFILIATE_LINK}</CardDescription> : null}
            </CardHeader>
            <CardContent data-test="post-card-description">
                {description}
            </CardContent>
            <CardFooter className="flex flex-1 items-end">
                <Button asChild>
                    <Link className="w-full" href={callToActionLink} data-test="post-card-call-to-action">{callToActionText}</Link>
                </Button>
            </CardFooter>
        </Card >
    )
};