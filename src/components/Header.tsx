import { MainNav } from "@/components/MainNav";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import Logo from "@/components/Logo";

export default function Header() {
    return (
        <header className="flex items-center justify-between container mx-auto md:px-40">
            <Logo />
            <MainNav />
            <AuthenticatedNav />
        </header>
    )
}