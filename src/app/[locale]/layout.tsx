export const dynamic = "force-dynamic";

import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import MainShell from "@/Component/MainShell/MainShell";


type RouteParams = { locale: string };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<RouteParams>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Missing translation for locale: ${locale}`);
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <MainShell locale={locale}>{children}</MainShell>
    </NextIntlClientProvider>
  );
}
