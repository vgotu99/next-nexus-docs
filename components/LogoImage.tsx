"use client";

import Image from "next/image";
import { useTheme } from "nextra-theme-docs";

const LogoImage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={
        resolvedTheme === "dark"
          ? "/docs-logo-dark.svg"
          : "/docs-logo-light.svg"
      }
      alt="NEXT-NEXUS"
      width={200}
      height={48}
      priority
    />
  );
};

export default LogoImage;
