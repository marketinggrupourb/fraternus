import type { Metadata } from "next";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Secao from "@/components/Secao";
import Etapas from "@/components/Etapas";
import ListaRequisitos from "@/components/ListaRequisitos";
import { citacoes, numerosTexto, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Seja um membro",
  description:
    "Requisitos, compromissos e como entrar em contato para fazer parte do Fraternus.",
};

export default function SejaMembroPage() {
  return (
    <>
      <CabecalhoPagina
        titulo="Seja um membro Fraternus"
        descricao={`Somos mais de ${numerosTexto.membros} homens sustentando este movimento com presença e contribuição mensal. Nossa caminhada está apenas começando.`}
        trilha={[{ rotulo: "Início", href: "/" }]}
      >
        <a
          href={site.contato.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-clay px-7 py-4 font-semibold text-white transition-colors hover:bg-clay/90"
        >
          Conversar no WhatsApp
        </a>
      </CabecalhoPagina>

      <Secao tom="areia">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[length:var(--text-title)] font-semibold">
              O que se espera
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-navy/70">
              Quatro compromissos simples. Todos valem o mesmo.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ListaRequisitos tamanho="grande" />
          </div>
        </div>
      </Secao>

      <Secao tom="claro">
        <div className="max-w-[46rem]">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Para onde vai a sua contribuição
          </h2>
          <p className="mt-6 text-[length:var(--text-lead)] font-light leading-relaxed text-navy/80">
            Nada fica em caixa. O grupo decide em conjunto e presta contas do
            que foi executado.
          </p>
        </div>

        <div className="mt-14">
          <Etapas cartao="areia" />
        </div>
      </Secao>

      <Secao tom="areia" espinha={false}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-[length:var(--text-title)] font-semibold">
              Vamos conversar
            </h2>
            <p className="mt-6 max-w-[36rem] text-[length:var(--text-lead)] font-light leading-relaxed text-navy/80">
              O primeiro passo é uma conversa. Fale com{" "}
              {site.contato.responsavel} e conheça o próximo encontro.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy px-7 py-4 text-center font-semibold text-sand transition-colors hover:bg-navy-deep"
              >
                WhatsApp {site.contato.telefoneExibicao}
              </a>
              <a
                href={`mailto:${site.contato.email}`}
                className="border border-navy/30 px-7 py-4 text-center font-medium transition-colors hover:bg-navy hover:text-sand"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5 lg:self-end">
            <blockquote>
              <p className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-light leading-[1.2] tracking-tight">
                {citacoes.encerramento.texto}
              </p>
            </blockquote>
            <figcaption className="mt-4 text-sm text-navy/55">
              {citacoes.encerramento.fonte}
            </figcaption>
          </figure>
        </div>
      </Secao>
    </>
  );
}
