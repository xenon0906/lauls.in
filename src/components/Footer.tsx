import Link from "next/link";
import { Globe, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
             <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Lauls Ltd" width={144} height={22} className="h-8 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Engineering the backbone of Indian Railways for over 90 years. A legacy of precision, trust, and industrial excellence since 1933.
            </p>
            <div className="flex gap-4">
              <a href="https://lauls.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Globe size={18} />
              </a>
              <a href="mailto:info@lauls.in" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Mail size={18} />
              </a>
              <a href="tel:+911294098300" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Logistics", href: "/logistics" },
                { name: "Products", href: "/products" },
                { name: "Electric Truck", href: "/electric-truck" },
                { name: "Distribution", href: "/distribution" },
                { name: "CSR", href: "/csr" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 hover:text-highlight text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Railway Components", href: "/products" },
                { name: "Steel Warehousing", href: "/logistics" },
                { name: "Rail Handling", href: "/logistics" },
                { name: "Ferro Alloys", href: "/products/ferro-alloys" },
                { name: "Logistics", href: "/logistics" },
                { name: "Distribution", href: "/distribution" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 hover:text-accent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">33-B, NIT, Faridabad, Haryana, India</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">+91-129-4098300</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">info@lauls.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Lauls Ltd. All Rights Reserved. | Est. 1933
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/20 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/20 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
