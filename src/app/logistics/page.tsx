import type { Metadata } from "next";
import LogisticsPage from "@/components/logistics/LogisticsPage";

import { generateDailySEO } from "@/lib/seo-robot";

export const revalidate = 86400; // The SEO Robot triggers a rebuild every 24 hours

export async function generateMetadata(): Promise<Metadata> {
  const base = generateDailySEO("logistics");
  return {
    ...base,
    alternates: { canonical: "https://lauls.in/logistics" }
  };
}

export default function Page() {
  return <LogisticsPage />;
}
