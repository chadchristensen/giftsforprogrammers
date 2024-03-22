'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink({
    href,
    children
}: NavLinkProps) {
    const pathname = usePathname();

    return (<Link
        href={href}
        className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
            "justify-start text-lg uppercase"
        )}
    >
        {children}
    </Link>)
}