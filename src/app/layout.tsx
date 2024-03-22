import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from "next-auth/react";
import { auth } from '@/lib/auth';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hip-Hop Shop",
    template: "%s | Hip-Hop Shop"
  },
  keywords: ['Hip-Hop products', 'Rap merchandise'],
  description: "A curated collection of all the newest hip-hop related products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          className="transition left-0 bg-slate-50 text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
          href="#main-content"
        >Skip Navigation
        </a>
        <SessionProvider session={session}>
          <Header />
          <div className="border-b"></div>
          <main id="main-content" className="container mx-auto p-8 md:px-40">{children}</main>
        </SessionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
