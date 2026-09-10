import { etapas } from "@/content/site";

type Props = {
  /** Fundo dos cartões. Escolha o oposto do fundo da seção para dar definição. */
  cartao?: "papel" | "areia";
};

/**
 * As três etapas do caminho de uma contribuição até virar obra.
 * É uma sequência real de trabalho — por isso a numeração.
 */
export default function Etapas({ cartao = "papel" }: Props) {
  const fundo = cartao === "papel" ? "bg-paper" : "bg-sand";

  return (
    <ol className="grid gap-px bg-navy/15 sm:grid-cols-3">
      {etapas.map((etapa, indice) => (
        <li key={etapa.titulo} className={`${fundo} p-7 sm:p-8`}>
          <span className="block text-sm font-semibold text-clay">
            Etapa {indice + 1}
          </span>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">
            {etapa.titulo}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-navy/75">
            {etapa.texto}
          </p>
        </li>
      ))}
    </ol>
  );
}
