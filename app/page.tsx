import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const LOCALES = ["en", "ko"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

const getLocaleFromCookie = (cookieValue?: string): Locale | undefined => {
  if (cookieValue && LOCALES.includes(cookieValue as Locale))
    return cookieValue as Locale;

  return undefined;
};

const getLocaleFromHeaders = (
  acceptLanguage: string | null,
  country: string | null
): Locale | undefined => {
  if (acceptLanguage) {
    const preferredLanguages = acceptLanguage
      .toLowerCase()
      .split(",")
      .map((lang) => lang.split(";")[0].trim());

    if (preferredLanguages.some((lang) => lang.startsWith("ko"))) return "ko";
  }

  if (country === "KR") return "ko";

  return undefined;
};

const Page = async () => {
  const requestCookies = await cookies();
  const cookieValue = requestCookies.get("NEXT_LOCALE")?.value;

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const country = headersList.get("x-vercel-ip-country");

  const locale =
    getLocaleFromCookie(cookieValue) ??
    getLocaleFromHeaders(acceptLanguage, country) ??
    DEFAULT_LOCALE;

  redirect(`/${locale}`);
};

export default Page;
