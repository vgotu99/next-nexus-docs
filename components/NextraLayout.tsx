import NextraNavbar from "@/components/NextraNavbar";
import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const NextraLayout = async ({
  locale,
  children,
}: {
  locale: "en" | "ko";
  children: React.ReactNode;
}) => {
  const path = `/${locale}` as const;
  const pageMap = await getPageMap(path);

  return (
    <html lang={locale}>
      <Head />
      <body>
        <Layout
          pageMap={pageMap}
          navbar={<NextraNavbar key={path} locale={path} />}
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
      </body>
    </html>
  );
};

export default NextraLayout;
