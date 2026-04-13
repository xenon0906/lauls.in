import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Lauls Ltd — TATA Steel Authorized Ferro Alloys Distributors Since 1933",
  description:
    "90+ years of excellence in Railway Manufacturing, Warehousing & Logistics, and Ferro Alloys Trading. Sole authorized TATA Steel distributor in Northern India.",
  openGraph: {
    title: "Lauls Ltd — TATA Steel Authorized Ferro Alloys Distributors Since 1933",
    description:
      "90+ years of excellence in Railway Manufacturing, Warehousing & Logistics, and Ferro Alloys Trading.",
    url: "https://lauls.in",
  },
  alternates: { canonical: "https://lauls.in" },
};

export default function Page() {
  return <HomePage />;
}
