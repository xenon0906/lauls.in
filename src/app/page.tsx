import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Industrial Steel & EV Solutions",
  description:
    "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
  openGraph: {
    title: "Industrial Steel & EV Solutions",
    description:
      "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
    url: "https://lauls.in",
  },
  alternates: { canonical: "https://lauls.in" },
};

export default function Page() {
  return <HomePage />;
}
