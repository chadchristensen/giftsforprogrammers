import NavLink from "@/components/NavLink";

import { cn } from "@/lib/utils"

// TODO: Move routes to CONSTANT file
export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                "flex justify-center py-2",
                className
            )}
            {...props}
        >
            <NavLink href="/categories/clothing">
                Clothing
            </NavLink>
            <NavLink href="/categories/tech">
                Tech
            </NavLink>
            <NavLink href="/categories/household">
                Household
            </NavLink>
        </nav>
    )
}