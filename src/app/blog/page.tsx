import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Insights & News | Lauls Ltd Blog",
  description:
    "Read the latest insights on steel manufacturing, industrial infrastructure, logistics, and electric trucking from the experts at Lauls Ltd.",
  openGraph: {
    title: "Industrial Insights & News | Lauls Ltd Blog",
    description:
      "Read the latest insights on steel manufacturing, industrial infrastructure, logistics, and electric trucking from the experts at Lauls Ltd.",
    url: "https://lauls.in/blog",
  },
  alternates: { canonical: "https://lauls.in/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#0A1628] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#DCA54C]/20 border border-[#DCA54C]/30 rounded-full">
            <span className="text-[#DCA54C] text-[10px] font-black uppercase tracking-widest">Industry Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            Our <span className="text-[#DCA54C]">Blog</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Expert perspectives on modern manufacturing, sustainable supply chains, and the materials building tomorrow's infrastructure.
          </p>
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.slug} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#0A1628]/5 transition-all duration-300">
                <Link href={`/blog/${blog.slug}`} className="block relative aspect-video overflow-hidden">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[9px] font-bold uppercase tracking-widest rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${blog.slug}`} className="block mb-4">
                    <h2 className="text-xl font-display font-bold text-[#0A1628] leading-snug group-hover:text-[#DCA54C] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${blog.slug}`} className="w-8 h-8 rounded-full bg-[#0A1628]/5 flex items-center justify-center text-[#0A1628] group-hover:bg-[#DCA54C] group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
