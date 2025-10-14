import MainShell from "@/Component/MainShell/MainShell";
import type { ReactNode } from "react";


type RouteParams = { locale: string };

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<RouteParams>; // Next 15 expects a Promise
}) {
  const { locale } = await params;
  return <MainShell locale={locale}>{children}</MainShell>;
}
