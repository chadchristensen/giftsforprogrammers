import Link from "next/link";

export default function CategoryLabel({ category }: { category: string }) {
    return (
        <Link
            href={`/${category.toLowerCase()}`}
            className="w-fit px-3 py-1 bg-red-600 shadow-sm font-semibold text-white font-display uppercase text-sm hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
            data-test="category-label"
        >
            {category}
        </Link>

    )
}