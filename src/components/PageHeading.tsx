export default function PageHeading({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <h1
            className="mb-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
        >
            {children}
        </h1>
    )
}