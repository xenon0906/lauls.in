import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

import { generateDailySEO } from "@/lib/seo-robot";

export const revalidate = 86400; // The SEO Robot triggers a rebuild every 24 hours

export async function generateMetadata(): Promise<Metadata> {
  return generateDailySEO("home");
}

export default function Page() {
  return <HomePage />;
}
