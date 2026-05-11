import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = (requested && routing.locales.includes(requested as any))
    ? requested
    : routing.defaultLocale;

  // Load only university-square message files
  const messages = {
    ...(await import(`../messages/university-square/${locale}.json`)).default,
  };

  return {
    locale,
    messages,
  };
});