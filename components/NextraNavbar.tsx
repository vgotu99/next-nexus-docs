import { Navbar } from "nextra-theme-docs";

const NextraNavbar = ({ locale }: { locale: "/en" | "/ko" }) => {
  return (
    <Navbar
      logo={
        <span style={{ fontSize: "1.6rem" }}>
          <b>NEXT-NEXUS</b>
        </span>
      }
      logoLink={locale}
      projectLink="https://github.com/vgotu99/next-nexus"
    />
  );
};

export default NextraNavbar;
