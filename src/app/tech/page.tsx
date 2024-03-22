import CategoryPage from "@/components/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Tech'
}

export default function TechPage() {
    return (<CategoryPage category="Tech" />)
}