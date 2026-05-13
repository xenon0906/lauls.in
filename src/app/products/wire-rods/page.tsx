import type { Metadata } from "next";
import WireRodsPage from "@/components/products/WireRodsPage";

export const metadata: Metadata = {
  title: "EV Wire Solutions & Alloy Steel Wire Rods | Lauls Ltd",
  description:
    "Leading supplier of EV wire solutions and alloy steel wire rods. Premium round wire manufacturers serving industrial steel and EV supply chain applications across India.",
  openGraph: {
    title: "EV Wire Solutions & Alloy Steel Wire Rods | Lauls Ltd",
    description:
      "Leading supplier of EV wire solutions and alloy steel wire rods. Premium round wire manufacturers serving industrial steel and EV supply chain applications across India.",
    url: "https://lauls.in/products/wire-rods",
  },
  alternates: { canonical: "https://lauls.in/products/wire-rods" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Alloy Steel Wire Rods & EV Wire Solutions",
  image: "https://lauls.in/images/products/alloy_wire_rods_1778571554783.png",
  description: "Precision-rolled alloy steel wire rods and EV wire solutions for demanding industrial applications including suspension springs, EV components, and cold-headed bolts.",
  brand: {
    "@type": "Brand",
    name: "Lauls Ltd"
  },
  category: "Industrial Wire Rods",
  url: "https://lauls.in/products/wire-rods",
};

const jsonLdString = JSON.stringify(jsonLd);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <WireRodsPage />
    </>
  );
}
