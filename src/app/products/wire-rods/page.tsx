import type { Metadata } from "next";
import WireRodsPage from "@/components/products/WireRodsPage";
import { cloudinary } from "@/utils/cloudinary";

export const metadata: Metadata = {
  title: "Alloy Steel Wire Solutions & Alloy Steel Wire Rods | Lauls Ltd",
  description:
    "Leading supplier of alloy steel wire solutions and alloy steel wire rods. Premium round wire manufacturers serving industrial steel and EV supply chain applications across India.",
  openGraph: {
    title: "Alloy Steel Wire Solutions & Alloy Steel Wire Rods | Lauls Ltd",
    description:
      "Leading supplier of alloy steel wire solutions and alloy steel wire rods. Premium round wire manufacturers serving industrial steel and EV supply chain applications across India.",
    url: "https://lauls.in/products/wire-rods",
  },
  alternates: { canonical: "https://lauls.in/products/wire-rods" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Alloy Steel Wire Rods & Alloy Steel Wire Solutions",
  image: cloudinary("images/products/alloy_wire_rods_1778571554783.png"),
  description: "Precision-rolled alloy steel wire rods and alloy steel wire solutions for demanding industrial applications including suspension springs, EV components, and cold-headed bolts.",
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
