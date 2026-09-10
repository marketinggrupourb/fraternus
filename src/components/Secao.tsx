type Props = {
  id?: string;
  /** "claro" usa fundo areia; "escuro" usa navy. */
  tom?: "claro" | "escuro" | "areia";
  /** Desenha a espinha vertical com o nó da seção (só em telas largas). */
  espinha?: boolean;
  className?: string;
  children: React.ReactNode;
};

const tons = {
  claro: "bg-paper text-navy",
  areia: "bg-sand text-navy",
  escuro: "bg-navy text-sand",
} as const;

export default function Secao({
  id,
  tom = "claro",
  espinha = true,
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`${tons[tom]} ${espinha ? "espinha espinha-no" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[84rem] px-5 py-[var(--spacing-band)] sm:px-8 lg:pl-24">
        {children}
      </div>
    </section>
  );
}
