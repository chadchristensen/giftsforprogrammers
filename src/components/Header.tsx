import { MainNav } from "@/components/MainNav";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function Header() {
    return (
        <header className="flex items-center justify-between container mx-auto md:px-40 py-2 md:py-0">
            <Logo />
            <MainNav />
            <MobileNav />
            <AuthenticatedNav className="hidden md:flex" />
        </header>
    )
}