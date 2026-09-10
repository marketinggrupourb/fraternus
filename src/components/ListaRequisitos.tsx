import { requisitos } from "@/content/site";

type Props = {
  tamanho?: "normal" | "grande";
};

export default function ListaRequisitos({ tamanho = "normal" }: Props) {
  const texto = tamanho === "grande" ? "text-xl" : "text-lg";

  return (
    <ul className="border-t border-navy/20">
      {requisitos.map((requisito) => (
        <li
          key={requisito}
          className="grid grid-cols-[0.375rem_1fr] items-baseline gap-x-5 border-b border-navy/20 py-5"
        >
          {/* O marcador acompanha a linha de base do texto */}
          <span aria-hidden="true" className="h-1.5 w-1.5 self-center bg-clay" />
          <span className={texto}>{requisito}</span>
        </li>
      ))}
    </ul>
  );
}
