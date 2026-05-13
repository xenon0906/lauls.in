import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Lauls Ltd",
  description:
    "Learn how Lauls Ltd collects, uses, and protects your personal information. Our privacy policy covers data handling for our industrial steel, logistics, and EV solutions services.",
  alternates: { canonical: "https://lauls.in/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg font-light">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <div className="space-y-12 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">1. Introduction</h2>
              <p>
                Lauls Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;the Company&quot;), established in 1933 and headquartered at 33-B, NIT, Faridabad, Haryana, India, is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                <a href="https://lauls.in" className="text-[#DCA54C] hover:underline">lauls.in</a> or engage with our industrial, logistics, or EV supply chain services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 list-disc list-outside ml-6">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company/organisation name when submitted via our inquiry forms.</li>
                <li><strong>Inquiry Details:</strong> Product interests, message content, and industrial requirements you choose to share.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, and browser/device information collected automatically through standard server logs and analytics tools.</li>
                <li><strong>Cookies:</strong> Essential cookies required for site functionality and optional analytics cookies to understand user behavior.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">The information we collect is used to:</p>
              <ul className="space-y-3 list-disc list-outside ml-6">
                <li>Respond to your business inquiries and provide requested product information or quotations.</li>
                <li>Process and fulfill commercial orders and contractual agreements.</li>
                <li>Send relevant updates about our products, services, and industrial solutions (with your consent).</li>
                <li>Improve our website experience and better understand B2B customer needs.</li>
                <li>Comply with applicable legal obligations and industry regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">4. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting business (e.g., cloud hosting, CRM tools), subject to strict confidentiality agreements. We may also disclose information if required by Indian law or regulatory authorities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard technical and organisational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. All data transmissions are secured via HTTPS/TLS encryption. However, no method of internet transmission is 100% secure and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, maintain business records, or comply with applicable legal requirements. Contact form submissions are retained for a period not exceeding 3 years unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">7. Your Rights</h2>
              <p className="mb-4">Subject to applicable law, you have the right to:</p>
              <ul className="space-y-3 list-disc list-outside ml-6">
                <li>Access personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your personal data.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@lauls.in" className="text-[#DCA54C] hover:underline">info@lauls.in</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites and encourage you to review their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">9. Updates to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date. Continued use of our website after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#0A1628] mb-4">10. Contact Us</h2>
              <p>For any privacy-related queries, please contact:</p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <p className="font-bold text-[#0A1628]">Lauls Ltd</p>
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
