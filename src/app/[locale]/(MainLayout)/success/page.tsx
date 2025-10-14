import SuccessClient from "@/Component/Success/SuccessClient";

// ✅ Explanation:
// Next.js 15 has a bug in PageProps typing, so we define our own safe type.
interface SuccessPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

// ✅ Use a normal (non-async) function to avoid Next.js Promise type mismatch
export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId =
    typeof searchParams?.session_id === "string"
      ? searchParams.session_id
      : "";

  return <SuccessClient sessionId={sessionId} />;
}
