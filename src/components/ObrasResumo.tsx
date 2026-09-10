import Link from "next/link";
import Secao from "./Secao";
import Figura from "./Figura";
import { obras } from "@/content/obras";
import { numerosTexto } from "@/content/site";

export default function ObrasResumo() {
  const destaque = obras.find((obra) => obra.destaque) ?? obras[0];
  const outras = obras.filter((obra) => obra.slug !== destaque.slug).slice(0, 4);

  return (
    <Secao id="obras" tom="claro">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Obras realizadas
          </h2>
          <p className="mt-6 max-w-[38rem] text-[length:var(--text-lead)] font-light leading-relaxed text-navy/80">
            {numerosTexto.obras} obras apoiadas e mais de R${" "}
            {numerosTexto.doacoes} destinados a instituições que cuidam de quem
            mais precisa. Aqui está o que mudou.
          </p>
        </div>
        <div className="lg:col-span-5 lg:text-right">
          <Link
            href="/obras"
            className="inline-block border border-navy/25 px-6 py-3.5 font-medium transition-colors hover:border-navy hover:bg-navy hover:text-sand"
          >
            Ver todas as obras
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Figura
            src={destaque.capa}
            alt={destaque.nome}
            proporcao="3 / 2"
          />
        </div>
        <div className="lg:col-span-5 lg:pt-6">
          <p className="text-sm text-navy/55">{destaque.local}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">
            {destaque.nome}
          </h3>
          {destaque.subtitulo && (
            <p className="mt-1 text-navy/60">{destaque.subtitulo}</p>
          )}
          <p className="mt-5 leading-relaxed text-navy/75">
            {destaque.descricao}
          </p>
          <Link
            href={`/obras/${destaque.slug}`}
            className="mt-6 inline-block font-semibold text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:decoration-clay"
          >
            Conhecer esta obra
          </Link>
        </div>
      </div>

      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {outras.map((obra) => (
          <li key={obra.slug}>
            <Link href={`/obras/${obra.slug}`} className="group block">
              <Figura src={obra.capa} alt={obra.nome} proporcao="4 / 3" />
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight group-hover:text-clay">
                {obra.nome}
              </h3>
              <p className="mt-1 text-sm text-navy/60">{obra.intervencao}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
