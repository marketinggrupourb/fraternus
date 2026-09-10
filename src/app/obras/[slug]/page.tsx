import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Figura from "@/components/Figura";
import { obras, obraPorSlug } from "@/content/obras";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return obras.map((obra) => ({ slug: obra.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const obra = obraPorSlug(slug);
  if (!obra) return { title: "Obra não encontrada" };
  return { title: obra.nome, description: obra.descricao };
}

export default async function ObraPage({ params }: Props) {
  const { slug } = await params;
  const obra = obraPorSlug(slug);
  if (!obra) notFound();

  const indice = obras.findIndex((item) => item.slug === obra.slug);
  const proxima = obras[(indice + 1) % obras.length];

  return (
    <>
      <CabecalhoPagina
        titulo={obra.nome}
        descricao={obra.subtitulo}
        trilha={[
          { rotulo: "Início", href: "/" },
          { rotulo: "Obras realizadas", href: "/obras" },
        ]}
      >
        <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 border-t border-sand/20 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-taupe">Local</dt>
            <dd className="mt-1 font-medium">{obra.local}</dd>
          </div>
          <div>
            <dt className="text-sm text-taupe">Intervenção</dt>
            <dd className="mt-1 font-medium">{obra.intervencao}</dd>
          </div>
          <div>
            <dt className="text-sm text-taupe">Situação</dt>
            <dd className="mt-1 font-medium">
              {obra.situacao === "execucao" ? "Em execução" : "Concluída"}
            </dd>
          </div>
        </dl>
      </CabecalhoPagina>

      <article className="bg-paper">
        <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <p className="max-w-[42rem] text-[length:var(--text-lead)] font-light leading-relaxed">
            {obra.descricao}
          </p>

          <div className="mt-14">
            <Figura
              src={obra.capa}
              alt={obra.nome}
              proporcao="3 / 2"
              priority
            />
          </div>

          {obra.galeria && obra.galeria.length > 0 && (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {obra.galeria.map((foto, i) => (
                <li key={foto}>
                  <Figura
                    src={foto}
                    alt={`${obra.nome} — foto ${i + 1}`}
                    proporcao="3 / 2"
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-navy/15 pt-8 sm:flex-row sm:items-center">
            <Link
              href="/obras"
              className="font-medium text-navy/70 transition-colors hover:text-navy"
            >
              Voltar para todas as obras
            </Link>
            <Link
              href={`/obras/${proxima.slug}`}
              className="font-semibold text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:decoration-clay"
            >
              Próxima obra: {proxima.nome}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
