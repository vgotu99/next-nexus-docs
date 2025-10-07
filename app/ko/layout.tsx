import NextraLayout from "@/components/NextraLayout";
import { Metadata } from "next";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: {
    default: "next-nexus",
    template: "%s | next-nexus",
  },
  description: "Next.js를 위한 지능형 데이터 레이어",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "next-nexus",
    description: "Next.js를 위한 지능형 데이터 레이어",
    url: "https://next-nexus.vercel.app/ko",
    siteName: "Next-Nexus Docs",
    images: [
      {
        url: "https://next-nexus.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Next-Nexus Docs Open Graph Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

const KoreanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextraLayout locale="ko" data-pagefind-filter="locale:ko">
      {children}
    </NextraLayout>
  );
};

export default KoreanLayout;
