// src/Component/MainShell/MainShell.tsx
"use client";

import type { ReactNode } from "react";
import Footer from "@/Component/Shared/Footer";
import { Navbar } from "@/Component/Shared/Navbar";

export default function MainShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <div>
      <Navbar locale={locale} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
