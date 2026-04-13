import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Lauls Ltd",
  description:
    "Get in touch with Lauls Ltd. Visit us at 33-B, NIT, Faridabad or call +91-129-4098300. Steel distribution, logistics, and manufacturing inquiries.",
  openGraph: {
    title: "Contact Us — Lauls Ltd",
    description:
      "Get in touch with Lauls Ltd. Visit us at 33-B, NIT, Faridabad or call +91-129-4098300. Steel distribution, logistics, and manufacturing inquiries.",
    url: "https://lauls.in/contact",
  },
  alternates: { canonical: "https://lauls.in/contact" },
};

export default function Page() {
  return <ContactPage />;
}
