import NextraNavbar from "@/components/NextraNavbar";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

const NextraLayout = async ({
  locale,
  children,
}: {
  locale: "/en" | "/ko";
  children: React.ReactNode;
}) => {
  const pageMap = await getPageMap(locale);

  return (
    <Layout
      pageMap={pageMap}
      navbar={<NextraNavbar key={locale} locale={locale} />}
      docsRepositoryBase="https://github.com/vgotu99/next-nexus"
      i18n={[
        { locale: "en", name: "English" },
        { locale: "ko", name: "한국어" },
      ]}
      editLink={null}
      feedback={{ content: null }}
    >
      {children}
    </Layout>
  );
};

export default NextraLayout;
