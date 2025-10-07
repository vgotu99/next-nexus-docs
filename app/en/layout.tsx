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
    images: [
      "https://raw.githubusercontent.com/vgotu99/next-nexus-docs/refs/heads/main/public/og.png",
    ],
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
