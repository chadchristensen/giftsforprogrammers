import CategoryPage from "@/components/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Threads'
}

export default function ThreadsPage() {
    return (<CategoryPage category="Threads" />)
}