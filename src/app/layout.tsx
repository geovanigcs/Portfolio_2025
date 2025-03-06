import type { Metadata } from "next";
import { Calistoga, Inter } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"] })

export const metadata: Metadata = {
  title: "Portfólio Geovani",
  description: "Mostruário de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-[#030712] text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
