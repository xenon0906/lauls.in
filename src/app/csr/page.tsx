import type { Metadata } from "next";
import CSRPage from "@/components/csr/CSRPage";

export const metadata: Metadata = {
  title: "CSR Initiatives — Lauls Ltd",
  description:
    "Lauls Ltd's corporate social responsibility initiatives in education (SAVERA), healthcare (SEWA), and environmental sustainability.",
  openGraph: {
    title: "CSR Initiatives — Lauls Ltd",
    description:
      "Lauls Ltd's corporate social responsibility initiatives in education, healthcare, and sustainability.",
    url: "https://lauls.in/csr",
  },
  alternates: { canonical: "https://lauls.in/csr" },
};

export default function Page() {
  return <CSRPage />;
}
