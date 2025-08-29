import NextraLayout from "@/components/NextraLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "next-nexus",
    template: "%s | next-nexus",
  },
  description: "Next.js를 위한 지능형 데이터 레이어",
};

const KoreanLayout = ({ children }: { children: React.ReactNode }) => {
  return <NextraLayout locale="/ko">{children}</NextraLayout>;
};

export default KoreanLayout;
