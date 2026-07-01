import type { Metadata } from "next";
import { Suspense } from "react";
import CSRDetailsPage from "@/components/csr/CSRDetailsPage";

export const metadata: Metadata = {
  title: "CSR Initiative Details — Lauls Ltd",
  description:
    "Detailed reports of Lauls Ltd's Corporate Social Responsibility programs, including SAVERA (Education & Skilling) and SEWA (Community Healthcare).",
  openGraph: {
    title: "CSR Initiative Details — Lauls Ltd",
    description:
      "Detailed reports of Lauls Ltd's Corporate Social Responsibility programs (SAVERA & SEWA).",
    url: "https://lauls.in/csr/details",
  },
  alternates: { canonical: "https://lauls.in/csr/details" },
};

// SEO-friendly fallback rendered during SSR before client hydration
function CSRFallback() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-8" />
          <div className="h-12 w-3/4 bg-gray-200 rounded mb-6" />
          <div className="h-6 w-1/2 bg-gray-200 rounded mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
            <div className="h-96 bg-gray-200 rounded-3xl" />
          </div>
          <div className="mt-8">
            <p className="text-gray-500 text-sm">
              Lauls Ltd&apos;s CSR framework is built on three pillars: Education &amp; Skilling (SAVERA) supporting 5,000+ students annually with STEM and vocational training, Environmental Sustainability with 25MW captive solar and 2M trees planted, and Community Healthcare (SEWA) operating 4 primary care centers. Annual CSR investment exceeds ₹5 Crore.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<CSRFallback />}>
      <CSRDetailsPage />
    </Suspense>
  );
}
