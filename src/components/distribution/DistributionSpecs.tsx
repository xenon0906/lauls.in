"use client";

import { motion } from "framer-motion";

const specs = [
  { product: "Ferro Chrome", grades: ["HC", "MC"], size: "10-150 mm lumps", app: "Stainless steel making", finish: "As-cast" },
  { product: "Ferro Manganese", grades: ["HC", "MC", "LC"], size: "25-150 mm lumps", app: "Deoxidizing and alloying", finish: "As-cast" },
  { product: "Alloy Steel Rounds", grades: ["SAE 4140", "4340"], size: "20 mm — 250 mm dia", app: "Automotive & machinery", finish: "Black / Bright" },
  { product: "Mild Steel Rounds", grades: ["IS 2062"], size: "16 mm — 150 mm dia", app: "Construction & fabrication", finish: "Hot rolled" },
  { product: "Alloy Wire Rods", grades: ["SAE 1010", "1018"], size: "5.5 mm — 14 mm dia", app: "Fasteners & springs", finish: "Cold drawn" },
  { product: "ERW / Precision Tubes", grades: ["IS 3601", "ASTM A500"], size: "OD 12 mm — 114 mm", app: "Hydraulic & structural", finish: "Bright annealed" },
  { product: "Silico Manganese", grades: ["Mn60", "Mn65"], size: "10-150 mm lumps", app: "Steel deoxidizer", finish: "As-cast" },
];

export default function DistributionSpecs() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-16">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Technical Data
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Product specifications
          </h2>
          <p className="text-gray-500">
            Tailored grades and specifications to match your exact requirements.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="w-full overflow-x-auto shadow-xl rounded-xl border border-gray-100">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="py-5 px-6 font-display font-bold tracking-wide text-sm whitespace-nowrap">Product</th>
                <th className="py-5 px-6 font-display font-bold tracking-wide text-sm whitespace-nowrap">Grade / Standard</th>
                <th className="py-5 px-6 font-display font-bold tracking-wide text-sm whitespace-nowrap">Size range</th>
                <th className="py-5 px-6 font-display font-bold tracking-wide text-sm whitespace-nowrap">Application</th>
                <th className="py-5 px-6 font-display font-bold tracking-wide text-sm whitespace-nowrap">Finish</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-[#0A1628] text-sm">
                    {row.product}
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex flex-wrap gap-2">
                       {row.grades.map(g => (
                         <span key={g} className="px-2 py-1 bg-[#DCA54C]/10 text-[#DCA54C] border border-[#DCA54C]/20 text-[10px] font-bold tracking-widest uppercase rounded flex items-center justify-center whitespace-nowrap">
                            {g}
                         </span>
                       ))}
                    </div>
                  </td>
                  <td className="py-6 px-6 text-sm text-gray-500 font-medium">
                    {row.size}
                  </td>
                  <td className="py-6 px-6 text-sm text-gray-500 font-medium">
                    {row.app}
                  </td>
                  <td className="py-6 px-6 text-sm text-[#0A1628] font-bold">
                    {row.finish}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
