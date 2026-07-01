import type { Metadata } from "next";
import { Suspense } from "react";
import LogisticsDetailsPage from "@/components/logistics/LogisticsDetailsPage";

export const metadata: Metadata = {
  title: "Logistics Operations Details — Lauls Ltd",
  description:
    "Detailed overview of Lauls Ltd's logistics capabilities including fleet management, warehousing operations, and supply chain solutions.",
  openGraph: {
    title: "Logistics Operations Details — Lauls Ltd",
    description:
      "Detailed overview of Lauls Ltd's logistics capabilities including fleet management and warehousing.",
    url: "https://lauls.in/logistics/details",
  },
  alternates: { canonical: "https://lauls.in/logistics/details" },
};

// SEO-friendly fallback rendered during SSR before client hydration
function LogisticsFallback() {
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
              Lauls Ltd operates an integrated web of road, rail, and warehousing infrastructure designed specifically for heavy industrial logistics. Services include pan-India dedicated fleet (400+ vehicles), zero-emission EV transport, and strategic warehousing across 12 hubs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LogisticsFallback />}>
      <LogisticsDetailsPage />
    </Suspense>
  );
}
