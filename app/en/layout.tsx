import NextraLayout from "@/components/NextraLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "next-nexus",
    template: "%s | next-nexus",
  },
  description: "The intelligent data layer for Next.js",
};

const EnglishLayout = ({ children }: { children: React.ReactNode }) => {
  return <NextraLayout locale="/en">{children}</NextraLayout>;
};

export default EnglishLayout;
