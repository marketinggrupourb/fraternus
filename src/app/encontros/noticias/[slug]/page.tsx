import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Figura from "@/components/Figura";
import {
  formatarData,
  noticias,
  noticiaPorSlug,
} from "@/content/encontros";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return noticias.map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = noticiaPorSlug(slug);
  if (!noticia) return { title: "Notícia não encontrada" };
  return { title: noticia.titulo, description: noticia.resumo };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = noticiaPorSlug(slug);
  if (!noticia) notFound();

  const outras = noticias.filter((item) => item.slug !== noticia.slug).slice(0, 2);

  return (
    <>
      <div className="bg-navy text-sand">
        <div className="mx-auto max-w-[52rem] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <nav aria-label="Trilha" className="mb-6 text-sm text-taupe">
            <Link href="/encontros#noticias" className="hover:text-sand">
              Nossos encontros
            </Link>
            <span aria-hidden="true" className="px-2 text-sand/30">
              /
            </span>
            <span className="text-sand/70">Notícias</span>
          </nav>
          <time dateTime={noticia.data} className="text-sm text-taupe">
            {formatarData(noticia.data)}
          </time>
          <h1 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold">
            {noticia.titulo}
          </h1>
          <p className="mt-6 text-[length:var(--text-lead)] font-light leading-relaxed text-sand/80">
            {noticia.resumo}
          </p>
        </div>
      </div>

      <article className="bg-paper">
        <div className="mx-auto max-w-[52rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <Figura src={noticia.capa} alt={noticia.titulo} proporcao="16 / 9" />

          <div className="mt-12 space-y-6">
            {noticia.corpo.map((paragrafo, i) => (
              <p
                key={i}
                className="text-[1.075rem] leading-[1.75] text-navy/85"
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {outras.length > 0 && (
            <div className="mt-16 border-t border-navy/15 pt-8">
              <h2 className="text-sm font-semibold">Continue lendo</h2>
              <ul className="mt-4 space-y-3">
                {outras.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/encontros/noticias/${item.slug}`}
                      className="font-medium text-clay underline decoration-clay/30 underline-offset-4 transition-colors hover:decoration-clay"
                    >
                      {item.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
