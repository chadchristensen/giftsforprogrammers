import { Speaker } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" data-test="logo"><Speaker /><span className="sr-only">Hip Hop Shop</span></Link>
    )
}