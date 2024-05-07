"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/constants";
import { cn, generateCategoryNavLink } from "@/lib/utils";
import NavLink from "@/components/NavLink";
import { useState } from "react";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    function renderNavLinks(categories: string[]) {
        return categories.map((category) => {
            return (
                <NavLink
                    href={generateCategoryNavLink(category)}
                    key={category}
                    onLinkClick={() => setOpen(false)}
                >
                    {category}
                </NavLink>
            )
        })
    }

    return (<span className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost"><span className="inline-block mr-1">Menu</span> <Menu /></Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav
                    className={cn(
                        "flex flex-col justify-center py-2"
                    )}
                >
                    {renderNavLinks(Object.keys(CATEGORIES))}
                </nav>
            </SheetContent>
        </Sheet>
    </span >)
}