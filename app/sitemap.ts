import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = "https://next-nexus.vercel.app";

  const pages = [
    "/en",
    "/en/api",
    "/en/api/definitions",
    "/en/api/errors",
    "/en/api/hooks/use-nexus-action",
    "/en/api/hooks/use-nexus-form-action",
    "/en/api/hooks/use-nexus-infinite-query",
    "/en/api/hooks/use-nexus-mutation",
    "/en/api/hooks/use-nexus-query",
    "/en/api/interceptors",
    "/en/api/nexus",
    "/en/api/nexus-cache",
    "/en/api/nexus-hydration-boundary",
    "/en/api/nexus-renderer",
    "/en/api/nexus-runtime",
    "/en/api/revalidation",
    "/en/core-concepts/caching-revalidation",
    "/en/core-concepts/common-features",
    "/en/core-concepts/lifecycle",
    "/en/core-concepts/reading-data",
    "/en/core-concepts/writing-data",
    "/en/debugging",
    "/en/getting-started",
    "/ko",
    "/ko/api",
    "/ko/api/definitions",
    "/ko/api/errors",
    "/ko/api/hooks/use-nexus-action",
    "/ko/api/hooks/use-nexus-form-action",
    "/ko/api/hooks/use-nexus-infinite-query",
    "/ko/api/hooks/use-nexus-mutation",
    "/ko/api/hooks/use-nexus-query",
    "/ko/api/interceptors",
    "/ko/api/nexus",
    "/ko/api/nexus-cache",
    "/ko/api/nexus-hydration-boundary",
    "/ko/api/nexus-renderer",
    "/ko/api/nexus-runtime",
    "/ko/api/revalidation",
    "/ko/core-concepts/caching-revalidation",
    "/ko/core-concepts/common-features",
    "/ko/core-concepts/lifecycle",
    "/ko/core-concepts/reading-data",
    "/ko/core-concepts/writing-data",
    "/ko/debugging",
    "/ko/getting-started",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "/en" || page === "/ko" ? 1.0 : 0.8,
  }));
};

export default sitemap;
