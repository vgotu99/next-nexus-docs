import NextraLayout from "@/components/NextraLayout";
import { Metadata } from "next";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: {
    default: "next-nexus",
    template: "%s | next-nexus",
  },
  description: "The intelligent data layer for Next.js",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "next-nexus",
    description: "The intelligent data layer for Next.js",
    url: "https://next-nexus.vercel.app/en",
    siteName: "Next-Nexus Docs",
    images: [
      {
        url: "https://next-nexus.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Next-Nexus Docs Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const EnglishLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextraLayout locale="en" data-pagefind-filter="locale:en">
      {children}
    </NextraLayout>
  );
};

export default EnglishLayout;
