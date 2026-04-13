import type { Metadata } from "next";
import EVPage from "@/components/electric-truck/EVPage";

export const metadata: Metadata = {
  title: "Electric Truck Fleet — Lauls Ltd",
  description:
    "Pioneering sustainable logistics with electric truck fleet operations. Lauls Ltd's commitment to green transportation in heavy industrial logistics.",
  openGraph: {
    title: "Electric Truck Fleet — Lauls Ltd",
    description:
      "Pioneering sustainable logistics with electric truck fleet operations.",
    url: "https://lauls.in/electric-truck",
  },
  alternates: { canonical: "https://lauls.in/electric-truck" },
};

export default function Page() {
  return <EVPage />;
}
