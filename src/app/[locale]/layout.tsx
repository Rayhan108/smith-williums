// // src/app/[locale]/layout.tsx
// export const dynamic = "force-dynamic";

import type { ReactNode } from "react";
// import {NextIntlClientProvider, hasLocale} from 'next-intl';
// import {notFound} from 'next/navigation';
// import {routing} from '@/i18n/routing';

type RouteParams = { locale: string };

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: Promise<RouteParams>; // Next 15
// }) {
//   const { locale } = await params;

//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }
//   let messages;
//   try {
//     messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
//   } catch (err) {
//     console.error(`Missing translation for locale: ${locale}`);
//     notFound();
//   }

//   return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
// }

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LngLayout({ children, params }: {
  children: ReactNode;
  params: Promise<RouteParams>; // Next 15
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        return notFound()
    }
    return (
        <div lang={locale}>
            <NextIntlClientProvider>
                {children}
            </NextIntlClientProvider>
        </div>
    );
}