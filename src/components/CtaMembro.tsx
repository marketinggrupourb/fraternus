import Secao from "./Secao";
import ListaRequisitos from "./ListaRequisitos";
import { numerosTexto, site } from "@/content/site";

export default function CtaMembro() {
  return (
    <Secao id="seja-membro" tom="areia">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Seja um membro Fraternus
          </h2>
          <p className="mt-6 max-w-[36rem] text-[length:var(--text-lead)] font-light leading-relaxed text-navy/80">
            Hoje somos mais de {numerosTexto.membros} homens — amigos e
            empresários de áreas diversas — sustentando este movimento com
            presença e contribuição mensal.
          </p>
          <p className="mt-5 max-w-[36rem] leading-relaxed text-navy/70">
            Nossa caminhada está apenas começando. Cada novo integrante
            fortalece essa corrente e amplia o alcance do que conseguimos fazer.
          </p>

          <a
            href={site.contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-navy px-7 py-4 font-semibold text-sand transition-colors hover:bg-navy-deep"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.81.83-3.03-.2-.31a8.16 8.16 0 0 1-1.26-4.34c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.2-8.25 8.2Zm4.52-6.15c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.55-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.66 4.21 3.73.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
            </svg>
            Falar com {site.contato.responsavel.split(" ")[0]} no WhatsApp
          </a>
          <p className="mt-3 text-sm text-navy/60">
            {site.contato.responsavel} · {site.contato.telefoneExibicao}
          </p>
        </div>

        <div className="lg:col-span-6 lg:pt-3">
          <h3 className="text-sm font-semibold text-navy">
            O que se espera de um Fraternus
          </h3>
          <div className="mt-5">
            <ListaRequisitos />
          </div>
        </div>
      </div>
    </Secao>
  );
}
