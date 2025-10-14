// src/app/[locale]/(MainLayout)/layout.tsx
import type { ReactNode } from "react";
import MainShell from "@/Component/MainShell/MainShell";

type RouteParams = { locale: string };

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<RouteParams>;
}) {
  const { locale } = await params;
  return <MainShell locale={locale}>{children}</MainShell>;
}
