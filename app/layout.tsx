import { Metadata } from "next";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";

export const metadata: Metadata = {
  title: {
    default: "next-nexus",
    template: "%s | next-nexus",
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    images: [
      "https://raw.githubusercontent.com/vgotu99/next-nexus-docs/refs/heads/main/public/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>{children}</body>
    </html>
  );
}
