import { CONTENT } from "@/lib/constants";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" data-test="logo"><Code2 /><span className="sr-only">{CONTENT.SITE_NAME}</span></Link>
    )
}