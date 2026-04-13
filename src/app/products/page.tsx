import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";

export const metadata: Metadata = {
  title: "Products — Ferro Alloys, Wire Rods, Steel Rounds & Precision Tubes",
  description:
    "Explore Lauls Ltd's complete product range: ferro alloys, alloy & mild steel wire rods, steel rounds, ERW precision tubes, and custom forged ingots.",
  openGraph: {
    title: "Products — Ferro Alloys, Wire Rods, Steel Rounds & Precision Tubes",
    description:
      "Explore Lauls Ltd's complete product range: ferro alloys, alloy & mild steel wire rods, steel rounds, ERW precision tubes, and custom forged ingots.",
    url: "https://lauls.in/products",
  },
  alternates: { canonical: "https://lauls.in/products" },
};

export default function Page() {
  return <ProductsPage />;
}
