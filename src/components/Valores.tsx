import Secao from "./Secao";
import { citacoes, valores } from "@/content/site";

export default function Valores() {
  return (
    <Secao id="proposito" tom="escuro">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Propósito e valores
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-sand/70">
            Três compromissos sustentam o Fraternus. Nenhum funciona sozinho.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ilustracoes/homem.svg"
            alt="Ilustração de um homem em oração ao lado de uma cruz"
            className="mt-12 hidden w-full max-w-[19rem] lg:block"
          />
        </div>

        <dl className="lg:col-span-7">
          {valores.map((valor, indice) => (
            <div
              key={valor.chave}
              className={`grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[10rem_1fr] ${
                indice === 0 ? "pt-0" : "border-t border-sand/20"
              }`}
            >
              <dt className="text-2xl font-semibold tracking-tight text-sage">
                {valor.titulo}
              </dt>
              <dd className="max-w-[34rem] leading-relaxed text-sand/85">
                {valor.texto}
              </dd>
            </div>
          ))}

          {/* Em telas estreitas a ilustração entra depois da lista,
              onde tem largura para respirar. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ilustracoes/homem.svg"
            alt="Ilustração de um homem em oração ao lado de uma cruz"
            className="mx-auto mt-12 w-full max-w-[16rem] lg:hidden"
          />
        </dl>
      </div>

      <figure className="mt-16 border-t border-sand/20 pt-12">
        <blockquote>
          <p className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.08] tracking-tight">
            {citacoes.inspiracao.texto}
          </p>
        </blockquote>
        <figcaption className="mt-5 text-sm text-taupe">
          {citacoes.inspiracao.fonte} — nossa inspiração
        </figcaption>
      </figure>
    </Secao>
  );
}
