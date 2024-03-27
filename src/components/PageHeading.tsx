import { cn } from "@/lib/utils";

export default function PageHeading({ children, className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <h1
            className={
                cn(
                    "mb-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center",
                    className
                )
            }
        >
            {children}
        </h1>
    )
}