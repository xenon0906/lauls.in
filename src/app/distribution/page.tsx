import type { Metadata } from "next";
import DistributionPage from "@/components/distribution/DistributionPage";

export const metadata: Metadata = {
  title: "Steel Distribution — Lauls Ltd",
  description:
    "Authorized TATA Steel ferro alloys and minerals distributor. Comprehensive steel distribution network across Northern India since 1933.",
  openGraph: {
    title: "Steel Distribution — Lauls Ltd",
    description:
      "Authorized TATA Steel ferro alloys and minerals distributor across Northern India.",
    url: "https://lauls.in/distribution",
  },
  alternates: { canonical: "https://lauls.in/distribution" },
};

export default function Page() {
  return <DistributionPage />;
}
