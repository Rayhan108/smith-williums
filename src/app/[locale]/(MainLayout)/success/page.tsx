// app/[locale]/(MainLayout)/success/page.tsx  (Server Component)

import SuccessClient from "@/Component/Success/SuccessClient";

type SearchParams = Record<string, string | string[] | undefined>;
type RouteParams = { locale: string }; // add other dynamic segments if you have them

type Props = {
  // In Next 15, these are Promises in the generated PageProps
  params: Promise<RouteParams>;
  searchParams?: Promise<SearchParams>;
};

export default async function SuccessPage({ params, searchParams }: Props) {
  // You can await them independently
  const { locale } = await params; // if you need it
  const sp = (await searchParams) ?? {};

  const sessionId =
    typeof sp.session_id === "string" ? sp.session_id : "";

  return <SuccessClient sessionId={sessionId} />;
}
