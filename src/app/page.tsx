import PageHeading from "@/components/PageHeading";
import PostCard from "@/components/PostCard";
import { fetchPublishedPosts } from "@/lib/data";

export default async function Home() {
    const publishedPosts = await fetchPublishedPosts();
    return (
        <>
            <PageHeading>Home page</PageHeading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {publishedPosts.map((post) => {
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
                    );
                })}
            </div>

        </>
    )
}