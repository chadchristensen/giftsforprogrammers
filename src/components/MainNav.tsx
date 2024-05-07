import NavLink from "@/components/NavLink";
import { cn, generateCategoryNavLink } from "@/lib/utils"
import { CATEGORIES } from "@/lib/constants";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                "hidden md:flex justify-center py-2",
                className
            )}
            {...props}
        >
            {Object.keys(CATEGORIES).map((category) => {
                return (
                    <NavLink href={generateCategoryNavLink(category)} key={category}>
                        {category}
                    </NavLink>
                )
            })}
        </nav>
    )
}