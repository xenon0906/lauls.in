import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Lauls Ltd",
  description:
    "Review the Terms of Service governing your use of the Lauls Ltd website and industrial services — including steel distribution, logistics, and EV supply chain solutions.",
  alternates: { canonical: "https://lauls.in/terms" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1628] pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
            <span className="text-white font-display font-medium uppercase tracking-widest text-[10px]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            Terms of Service
          </h1>
          <p className="text-white/60 text-lg font-light">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website{" "}
                <a href="https://lauls.in" className="text-[#DCA54C] hover:underline">lauls.in</a>{" "}
                (&quot;Website&quot;) operated by Lauls Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the Website immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">2. Use of the Website</h2>
              <p className="mb-4">You agree to use this Website only for lawful purposes. You must not:</p>
              <ul className="space-y-3 list-disc list-outside ml-6">
                <li>Use the Website in any way that violates applicable Indian or international laws or regulations.</li>
                <li>Transmit unsolicited commercial communications or spam.</li>
                <li>Attempt to gain unauthorized access to any part of the Website or its systems.</li>
                <li>Reproduce, duplicate, or exploit any portion of the Website for commercial purposes without express written consent from Lauls Ltd.</li>
                <li>Submit false or misleading information through our contact or inquiry forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">3. Intellectual Property</h2>
              <p>
                All content on this Website — including text, graphics, logos, imagery, product descriptions, and code — is the exclusive property of Lauls Ltd or its content suppliers and is protected under Indian copyright law and applicable international treaties. You may not reproduce, distribute, or create derivative works from any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">4. Product &amp; Service Information</h2>
              <p>
                All product specifications, pricing, and availability information displayed on this Website are for informational purposes only. Lauls Ltd reserves the right to modify product offerings, specifications, and pricing at any time without prior notice. Actual commercial terms are governed by formal purchase orders and supply agreements executed separately between Lauls Ltd and its clients.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">5. Inquiries and Quotations</h2>
              <p>
                Submission of an inquiry through our contact form does not constitute a binding order or contract. All commercial transactions are subject to separate written agreements, purchase orders, and commercial terms negotiated between the parties. We reserve the right to decline any inquiry at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">6. Disclaimer of Warranties</h2>
              <p>
                This Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. Lauls Ltd makes no representation that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or timeliness of information displayed on the Website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Lauls Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use this Website or its content, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">8. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites. These links are provided solely for your convenience. Lauls Ltd has no control over the content or practices of those websites and accepts no responsibility or liability for them. Accessing third-party websites is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">10. Amendments</h2>
              <p>
                Lauls Ltd reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after any such changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">11. Contact</h2>
              <p>For questions regarding these Terms, please contact:</p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <p className="font-bold text-[#0A1628]">Lauls Ltd — Legal Department</p>
                <p>33-B, N.I.T, Faridabad, Haryana — 121001, India</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@lauls.in" className="text-[#DCA54C] hover:underline">
                    info@lauls.in
                  </a>
                </p>
                <p>Phone: +91-129-4098300</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
