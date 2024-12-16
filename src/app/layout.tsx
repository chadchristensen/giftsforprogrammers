import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from "next-auth/react";
import { auth } from '@/lib/auth';
import { CONTENT } from "@/lib/constants";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: CONTENT.SITE_NAME,
    template: `%s | ${CONTENT.SITE_NAME}`
  },
  keywords: ['Web developer products', 'Programmer merchandise'],
  description: "A curated collection of products for the programmer in your life",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <Script id='dark-mode'>
        {
          `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

          // Whenever the user explicitly chooses light mode
          localStorage.theme = 'light'

          // Whenever the user explicitly chooses dark mode
          localStorage.theme = 'dark'

          // Whenever the user explicitly chooses to respect the OS preference
          localStorage.removeItem('theme')`
        }
      </Script>
      <html lang="en">
        <body className={inter.className + " flex flex-col h-lvh bg-background"}>
          <a
            className="transition left-0 bg-slate-50 text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
            href="#main-content"
          >Skip Navigation
          </a>
          <SessionProvider session={session}>
            <Header />
            <div className="border-b"></div>
            <main id="main-content" className="container mx-auto px-4 py-8 md:px-40 flex-1">{children}</main>
            <Footer />
          </SessionProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
