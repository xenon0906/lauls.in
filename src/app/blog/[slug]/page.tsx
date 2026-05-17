import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs, getBlogBySlug } from "@/lib/blog-data";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return { title: "Post Not Found | Lauls Ltd" };
  }

  return {
    title: `${blog.title} | LAULS PRIVATE LIMITED Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      url: `https://lauls.in/blog/${blog.slug}`,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featuredImage],
    },
    alternates: { canonical: `https://lauls.in/blog/${blog.slug}` },
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: [`https://lauls.in${blog.featuredImage}`],
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Lauls Ltd",
      logo: {
        "@type": "ImageObject",
        url: "https://lauls.in/images/logo.png",
      },
    },
    description: blog.excerpt,
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#DCA54C] transition-colors mb-8">
            <ChevronLeft size={16} /> Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#0A1628]/5 text-[#0A1628] text-[10px] font-black uppercase tracking-widest rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0A1628] leading-[1.15] tracking-tight mb-8">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#DCA54C]" />
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#DCA54C]" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </header>

          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div 
            className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[#0A1628] prose-a:text-[#DCA54C] hover:prose-a:text-[#c5923b] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="font-bold text-[#0A1628]">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    <Tag size={12} className="text-[#DCA54C]" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
