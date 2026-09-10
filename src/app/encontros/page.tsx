import type { Metadata } from "next";
import Link from "next/link";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Figura from "@/components/Figura";
import { fotos, formatarData, noticias, videos } from "@/content/encontros";

export const metadata: Metadata = {
  title: "Nossos encontros",
  description:
    "Fotos, vídeos e notícias dos encontros de oração, formação e serviço do Fraternus.",
};

export default function EncontrosPage() {
  return (
    <>
      <CabecalhoPagina
        titulo="Nossos encontros"
        descricao="Oração, formação e mesa posta. É nos encontros que os projetos nascem, as decisões são tomadas e as amizades se firmam."
        trilha={[{ rotulo: "Início", href: "/" }]}
      >
        <nav aria-label="Seções desta página" className="mt-10 flex flex-wrap gap-3">
          <a
            href="#fotos"
            className="border border-sand/35 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-sand hover:text-navy"
          >
            Fotos
          </a>
          <a
            href="#videos"
            className="border border-sand/35 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-sand hover:text-navy"
          >
            Vídeos
          </a>
          <a
            href="#noticias"
            className="border border-sand/35 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-sand hover:text-navy"
          >
            Notícias
          </a>
        </nav>
      </CabecalhoPagina>

      {/* Fotos */}
      <section id="fotos" className="bg-paper">
        <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Fotos</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fotos.map((foto) => (
              <li key={foto.src}>
                <figure>
                  <Figura src={foto.src} alt={foto.legenda} proporcao="3 / 2" />
                  <figcaption className="mt-3 text-sm">
                    <span className="block text-navy/80">{foto.legenda}</span>
                    <time
                      dateTime={foto.data}
                      className="mt-0.5 block text-navy/45"
                    >
                      {formatarData(foto.data)}
                    </time>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vídeos */}
      <section id="videos" className="bg-navy text-sand">
        <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Vídeos</h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {videos.map((video) => (
              <li key={video.titulo}>
                <div className="relative aspect-video overflow-hidden bg-navy-deep">
                  {video.youtubeId ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      title={video.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="text-sand/45"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
                      </svg>
                      <p className="text-sm text-sand/55">
                        Informe o ID do YouTube em{" "}
                        <code className="text-sand/75">
                          src/content/encontros.ts
                        </code>
                      </p>
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  {video.titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sand/65">
                  {video.descricao}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Notícias */}
      <section id="noticias" className="bg-paper">
        <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Notícias</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia) => (
              <li key={noticia.slug}>
                <Link
                  href={`/encontros/noticias/${noticia.slug}`}
                  className="group block"
                >
                  <Figura
                    src={noticia.capa}
                    alt={noticia.titulo}
                    proporcao="3 / 2"
                  />
                  <time
                    dateTime={noticia.data}
                    className="mt-4 block text-sm text-navy/50"
                  >
                    {formatarData(noticia.data)}
                  </time>
                  <h3 className="mt-1.5 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-clay">
                    {noticia.titulo}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy/70">
                    {noticia.resumo}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
