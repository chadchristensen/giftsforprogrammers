import CategoryPage from "@/components/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crib'
}

export default function CribPage() {
    return (<CategoryPage category="Crib" />)
}