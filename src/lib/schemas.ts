import { z } from "zod";

export const postFormSchema = z.object({
    title: z.string().trim().min(3),
    slug: z.string().toLowerCase().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    categoryId: z.union([z.enum([
        '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        '2cd9aec6-76d6-4307-90c8-cce1f74a2eda',
        'ecce5674-ce1a-4508-bba0-79c3747ffa73'
    ]).optional(), z.literal("")]), // TODO: Update this to pull from the constants values instead
    description: z.union([z.string().trim().min(3), z.literal("")]),
    imageSrc: z.union([z.string().trim().url(), z.literal("")]),
    imageAltText: z.union([z.string().trim().min(3), z.literal("")]),
    publishDate: z.union([z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/).optional(), z.literal("")]),
    isAffiliateLink: z.coerce.boolean(),
    callToActionText: z.union([z.string().trim().min(3), z.literal("")]),
    callToActionLink: z.union([z.string().trim().url(), z.literal("")]),
})