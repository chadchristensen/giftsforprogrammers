export type Category = {
    'Crib': '1d0d118b-db6c-42a5-bf67-3f1696f1e290';
    'Tech': '2cd9aec6-76d6-4307-90c8-cce1f74a2eda';
    'Threads': 'ecce5674-ce1a-4508-bba0-79c3747ffa73';
}

export type Post = {
    id?: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    imageSrc: string;
    imageAltText: string;
    publishDate: string;
    isAffiliateLink: boolean;
    callToActionText: string;
    callToActionLink: string;
}

// TODO: I should not need to duplicate these, there is really only a difference in the category / categoryId

export type PostFormData = {
    id?: string;
    title: string;
    slug: string;
    categoryId: string | null;
    description: string;
    imageSrc: string;
    imageAltText: string;
    publishDate: string | null;
    isAffiliateLink: boolean;
    callToActionText: string;
    callToActionLink: string;
}

export type PostQueryResult = {
    id?: string;
    title: string;
    slug: string;
    category: keyof Category;
    description: string;
    image_src: string;
    image_alt_text: string;
    publish_date: string;
    is_affiliate_link: boolean;
    cta_text: string;
    cta_link: string;
}