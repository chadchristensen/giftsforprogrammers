"use client"

import { useFormState } from "react-dom"
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectTrigger, SelectGroup, SelectItem, SelectValue, SelectContent, SelectLabel } from "@/components/ui/select"
import { PostFormState } from "@/actions"
import { CATEGORIES } from "@/lib/constants";
import { PostQueryResult } from "@/lib/definitions"
import { formatDateToYYYYMMDD } from "@/lib/utils"
import { postFormSchema } from '@/lib/schemas';


type PostFormProps = {
    post?: PostQueryResult;
    onFormSubmit: (prevState: PostFormState, data: FormData) => Promise<PostFormState>;
}

export function PostForm({ post, onFormSubmit }: PostFormProps) {
    // * This is using react-hook-form for client side form state in combination with zod for form validation
    // * We are setting the default values of the form here and since we are using the form for both create and edit
    // *    We first check if there is a value from the 'post' prop passed in
    const form = useForm<z.infer<typeof postFormSchema>>({
        resolver: zodResolver(postFormSchema),
        defaultValues: {
            id: post?.id ?? '',
            title: post?.title ?? '',
            slug: post?.slug ?? '',
            categoryId: (post?.category && CATEGORIES[post?.category]) ?? '',
            description: post?.description ?? '',
            imageSrc: post?.image_src ?? '',
            imageAltText: post?.image_alt_text ?? '',
            publishDate: (post?.publish_date && formatDateToYYYYMMDD(post.publish_date)) ?? '',
            isAffiliateLink: post?.is_affiliate_link ?? false,
            callToActionText: post?.cta_text ?? '',
            callToActionLink: post?.cta_link ?? '',
        }
    });

    const onSubmit = async (data: z.infer<typeof postFormSchema>) => {
        const formData = new FormData();
        Object.entries(data).forEach((formInput) => {
            formData.append(formInput[0], formInput[1] as string)
        });

        await formAction(formData);
    }

    const [formState, formAction] = useFormState(onFormSubmit, { message: "" });

    return (
        <Form {...form}>
            <form
                noValidate
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="hidden" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Post Title</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Post Slug</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Slug" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="imageSrc"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Link to the image</FormLabel>
                            <FormControl>
                                <Input type="url" placeholder="https://image.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="imageAltText"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Alt text for the image</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="A pair of socks with the Notorious B.I.G's face on them" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} name="categoryId">
                                <FormControl>
                                    <SelectTrigger id="categoryId" className="w-[180px]">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {Object.entries(CATEGORIES).map((category) => {
                                            return (
                                                <SelectItem key={category[1]} value={category[1]}>{category[0]}</SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="A pair of socks with the Notorious B.I.G's face on them" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="callToActionText"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Call to Action Text</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="ex. Buy from Allpins" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="callToActionLink"
                    render={({ field }) => (
                        <FormItem className="max-w-lg">
                            <FormLabel>Call to Action Link</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="ex. https://allpins.com?ref=hiphopshop" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="isAffiliateLink"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} name="isAffiliateLink" />
                            </FormControl>
                            <FormLabel>
                                Does this post include an affiliate link?
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="publishDate"
                    render={({ field }) => (
                        <FormItem className="max-w-sm">
                            <FormLabel>Publish date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="space-x-4">
                    <Link className={buttonVariants({ variant: "outline" })} href="/admin/posts">Cancel</Link>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </Form>
    )
}