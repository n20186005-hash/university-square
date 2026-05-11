import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  // Redirect to the university-square page
  redirect(locale === 'zh' ? '/zh/university-square' : '/en/university-square');
}
