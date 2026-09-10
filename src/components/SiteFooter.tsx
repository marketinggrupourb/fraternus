import Link from "next/link";
import { citacoes, navegacao, site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-sand">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid items-center gap-10 border-b border-sand/15 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <blockquote className="lg:col-span-8">
            <p className="text-[clamp(1.4rem,3vw,2.25rem)] font-light leading-[1.2] tracking-tight">
              {citacoes.fechamento.texto}
            </p>
            <cite className="mt-5 block text-sm not-italic text-taupe">
              {citacoes.fechamento.fonte}
            </cite>
          </blockquote>

          <div className="lg:col-span-4 lg:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ilustracoes/sao-francisco.svg"
              alt="Ilustração de São Francisco de Assis com uma pomba na mão"
              className="mx-auto w-full max-w-[13rem] lg:mx-0 lg:max-w-[15rem]"
            />
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/Fraternus-hor-negativa.svg"
              alt={site.nome}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
              {site.descricao}
            </p>
            <p className="mt-4 text-sm text-taupe">{site.cidade}</p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold text-sand">Navegue</h2>
            <ul className="mt-4 space-y-2.5">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-sand/70 transition-colors hover:text-sand"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/seja-membro"
                  className="text-sm text-sand/70 transition-colors hover:text-sand"
                >
                  Seja um membro
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-sand">Fale com a gente</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-sand/70">
              <li>{site.contato.responsavel}</li>
              <li>
                <a
                  href={site.contato.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sand"
                >
                  {site.contato.telefoneExibicao}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contato.email}`}
                  className="transition-colors hover:text-sand"
                >
                  {site.contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/15 py-7 text-xs text-sand/50">
          <p>
            © {new Date().getFullYear()} {site.nome}. Movimento católico de leigos.
          </p>
        </div>
      </div>
    </footer>
  );
}
