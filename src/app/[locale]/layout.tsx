// src/app/[locale]/layout.tsx
export const dynamic = "force-dynamic";

import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type RouteParams = { locale: string };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<RouteParams>; // Next 15
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
  } catch (err) {
    console.error(`Missing translation for locale: ${locale}`);
    notFound();
  }

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
