import type { Metadata } from "next";
import WireRodsPage from "@/components/products/WireRodsPage";

export const metadata: Metadata = {
  title: "Wire Rods — Lauls Ltd",
  description:
    "Premium alloy steel, mild steel, and stainless steel wire rods. Trusted wire rod supplier for industrial applications across India.",
  openGraph: {
    title: "Wire Rods — Lauls Ltd",
    description:
      "Premium alloy steel, mild steel, and stainless steel wire rods. Trusted wire rod supplier for industrial applications across India.",
    url: "https://lauls.in/products/wire-rods",
  },
  alternates: { canonical: "https://lauls.in/products/wire-rods" },
};

export default function Page() {
  return <WireRodsPage />;
}
