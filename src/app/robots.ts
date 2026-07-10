import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "Claude-Web", "anthropic-ai", "Omgilibot", "Omgili", "FacebookBot", "cohere-ai", "OAI-SearchBot", "Bytespider", "Amazonbot"],
        allow: ["/", "/llms.txt"],
      }
    ],
    sitemap: "https://lauls.in/sitemap.xml",
  };
}
