import type { Metadata } from "next";
import FerroAlloysPage from "@/components/products/FerroAlloysPage";

export const metadata: Metadata = {
  title: "Ferro Alloys — Lauls Ltd",
  description:
    "Authorized TATA Steel ferro alloys distributor. Ferro Manganese, Ferro Chrome, Ferro Silicon, and Silico Manganese supply across Northern India.",
  openGraph: {
    title: "Ferro Alloys — Lauls Ltd",
    description:
      "Authorized TATA Steel ferro alloys distributor. Ferro Manganese, Ferro Chrome, Ferro Silicon, and Silico Manganese supply across Northern India.",
    url: "https://lauls.in/products/ferro-alloys",
  },
  alternates: { canonical: "https://lauls.in/products/ferro-alloys" },
};

export default function Page() {
  return <FerroAlloysPage />;
}
