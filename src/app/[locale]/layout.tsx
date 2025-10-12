export const dynamic = "force-dynamic";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import MainLayout from "./(MainLayout)/layout";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  let messages;
  try {

    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;

  } catch (error) {
    console.error(` Missing translation for locale: ${locale}`);
    notFound();
  }

  return (
    //  No <html> or <body> tags here
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MainLayout locale={locale}>{children}</MainLayout>
    </NextIntlClientProvider>
  );
}
