import type { Metadata } from "next";
import Link from "next/link";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Figura from "@/components/Figura";
import { obras } from "@/content/obras";
import { numerosTexto } from "@/content/site";

export const metadata: Metadata = {
  title: "Obras realizadas",
  description:
    "As instituições e comunidades apoiadas pelo Fraternus, com o antes e o depois de cada intervenção.",
};

export default function ObrasPage() {
  return (
    <>
      <CabecalhoPagina
        titulo="Obras realizadas"
        descricao={`${numerosTexto.obras} obras apoiadas e mais de R$ ${numerosTexto.doacoes} destinados a instituições da Igreja e a projetos sociais no Ceará. Cada uma foi visitada, avaliada e votada pelo grupo.`}
        trilha={[{ rotulo: "Início", href: "/" }]}
      />

      <div className="bg-paper">
        <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {obras.map((obra) => (
              <li key={obra.slug} className="h-full">
                <Link
                  href={`/obras/${obra.slug}`}
                  className="group flex h-full flex-col"
                >
                  <div className="relative">
                    <Figura src={obra.capa} alt={obra.nome} proporcao="4 / 3" />
                    {obra.situacao === "execucao" && (
                      <span className="absolute left-3 top-3 bg-clay px-2.5 py-1 text-xs font-semibold text-white">
                        Em execução
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-navy/55">{obra.local}</p>
                  <h2 className="mt-1 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-clay">
                    {obra.nome}
                  </h2>
                  {obra.subtitulo && (
                    <p className="mt-1 text-sm text-navy/60">{obra.subtitulo}</p>
                  )}
                  {/* mt-auto mantém a intervenção alinhada entre os cartões da linha */}
                  <p className="mt-auto pt-3 text-[0.95rem] leading-relaxed text-navy/75">
                    {obra.intervencao}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
