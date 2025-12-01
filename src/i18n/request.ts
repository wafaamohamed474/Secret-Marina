import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async (context) => {
  const locale = context.locale || "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
