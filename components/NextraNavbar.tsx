import LogoImage from "@/components/LogoImage";
import { Navbar } from "nextra-theme-docs";

const NextraNavbar = ({ locale }: { locale: "/en" | "/ko" }) => {
  return (
    <Navbar
      logo={<LogoImage />}
      logoLink={locale}
      projectLink="https://github.com/vgotu99/next-nexus"
    />
  );
};

export default NextraNavbar;
