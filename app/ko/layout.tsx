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
    images: [
      "https://raw.githubusercontent.com/vgotu99/next-nexus-docs/refs/heads/main/public/og.png",
    ],
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
