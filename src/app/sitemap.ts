import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { obras } from "@/content/obras";
import { noticias } from "@/content/encontros";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  return [
    { url: base, priority: 1 },
    { url: `${base}/obras`, priority: 0.8 },
    { url: `${base}/encontros`, priority: 0.8 },
    { url: `${base}/seja-membro`, priority: 0.9 },
    ...obras.map((obra) => ({ url: `${base}/obras/${obra.slug}`, priority: 0.6 })),
    ...noticias.map((noticia) => ({
      url: `${base}/encontros/noticias/${noticia.slug}`,
      lastModified: new Date(noticia.data),
      priority: 0.5,
    })),
  ];
}
