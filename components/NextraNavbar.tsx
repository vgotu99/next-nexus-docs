"use client";

import { Navbar, useTheme } from "nextra-theme-docs";
import { Image } from "nextra/components";

const NextraNavbar = ({ locale }: { locale: "/en" | "/ko" }) => {
  const { resolvedTheme } = useTheme();

  return (
    <Navbar
      logo={
        <Image
          src={
            resolvedTheme === "dark"
              ? "/docs-logo-dark.svg"
              : "/docs-logo-light.svg"
          }
          alt="NEXT-NEXUS"
          width={200}
          height={48}
        />
      }
      logoLink={locale}
      projectLink="https://github.com/vgotu99/next-nexus"
    />
  );
};

export default NextraNavbar;
