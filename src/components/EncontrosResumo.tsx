import Link from "next/link";
import Secao from "./Secao";
import Figura from "./Figura";
import { fotos, formatarData, noticias } from "@/content/encontros";

export default function EncontrosResumo() {
  const ultimas = noticias.slice(0, 3);

  return (
    <Secao id="encontros" tom="escuro">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Nossos encontros
          </h2>
          <p className="mt-6 max-w-[38rem] text-[length:var(--text-lead)] font-light leading-relaxed text-sand/80">
            Oração, formação e mesa posta. É nos encontros que os projetos
            nascem, as decisões são tomadas e as amizades se firmam.
          </p>
        </div>
        <div className="lg:col-span-5 lg:text-right">
          <Link
            href="/encontros"
            className="inline-block border border-sand/35 px-6 py-3.5 font-medium transition-colors hover:bg-sand hover:text-navy"
          >
            Fotos, vídeos e notícias
          </Link>
        </div>
      </div>

      <div className="trilho -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
        {fotos.slice(0, 6).map((foto) => (
          <figure
            key={foto.src}
            className="w-[78%] shrink-0 snap-start sm:w-[42%] lg:w-[30%]"
          >
            <Figura src={foto.src} alt={foto.legenda} proporcao="3 / 2" />
            <figcaption className="mt-3 text-sm text-sand/70">
              {foto.legenda}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16 border-t border-sand/20 pt-12">
        <h3 className="text-xl font-semibold tracking-tight">Últimas notícias</h3>
        <ul className="mt-6 divide-y divide-sand/15">
          {ultimas.map((noticia) => (
            <li key={noticia.slug}>
              <Link
                href={`/encontros/noticias/${noticia.slug}`}
                className="group grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
              >
                <time
                  dateTime={noticia.data}
                  className="text-sm text-taupe"
                >
                  {formatarData(noticia.data)}
                </time>
                <div>
                  <h4 className="text-lg font-medium leading-snug transition-colors group-hover:text-sage">
                    {noticia.titulo}
                  </h4>
                  <p className="mt-1.5 max-w-[42rem] text-sm leading-relaxed text-sand/65">
                    {noticia.resumo}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  );
}
