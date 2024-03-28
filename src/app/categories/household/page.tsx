import CategoryPage from "@/components/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Household'
}

export default function HouseholdPage() {
    return (<CategoryPage category="Household" />)
}