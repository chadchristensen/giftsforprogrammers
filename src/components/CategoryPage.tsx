import { fetchPublishedPostsByCategory } from "@/lib/data";
import PageHeading from "./PageHeading";
import PostCard from "./PostCard";

export default async function CategoryPage({ category }: { category: string }) {
    const posts = await fetchPublishedPostsByCategory(category);

    return (
        <>
            <PageHeading>{category}</PageHeading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {posts.map((post) => {
                    const {
                        title,
                        category,
                        slug,
                        image_src,
                        image_alt_text,
                        is_affiliate_link,
                        description,
                        cta_text,
                        cta_link
                    } = post;

                    return (
                        <PostCard
                            key={slug}
                            title={title}
                            category={category}
                            slug={slug}
                            imageSrc={image_src}
                            imageAltText={image_alt_text}
                            isAffiliateLink={is_affiliate_link}
                            description={description}
                            callToActionLink={cta_link}
                            callToActionText={cta_text}
                        />
                    )
                })}
            </div>
        </>
    )
}