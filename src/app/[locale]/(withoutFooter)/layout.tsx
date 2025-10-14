// app/[locale]/(withoutFooter)/layout.tsx

import type { ReactNode } from "react";
import { Navbar } from "@/Component/Shared/Navbar";

type RouteParams = { locale: string };

export default async function WithoutFooterLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<RouteParams>; // Next 15: params is a Promise
}) {
  const { locale } = await params; // read locale from params

  return (
    <>
      <div>
        <Navbar locale={locale} />
        <div className="min-h-screen">{children}</div>
      </div>
    </>
  );
}
