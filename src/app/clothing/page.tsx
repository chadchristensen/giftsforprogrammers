import CategoryPage from "@/components/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Clothing'
}

export default function ClothingPage() {
    return (<CategoryPage category="Clothing" />)
}