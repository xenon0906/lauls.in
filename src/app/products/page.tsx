import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";

import { generateDailySEO } from "@/lib/seo-robot";

export const revalidate = 86400; // The SEO Robot triggers a rebuild every 24 hours

export async function generateMetadata(): Promise<Metadata> {
  const base = generateDailySEO("products");
  return {
    ...base,
    alternates: { canonical: "https://lauls.in/products" }
  };
}

export default function Page() {
  return <ProductsPage />;
}
