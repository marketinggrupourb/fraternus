import Link from "next/link";

type Props = {
  titulo: string;
  descricao?: string;
  /** Migalhas de pão. A página atual não precisa entrar na lista. */
  trilha?: { rotulo: string; href: string }[];
  children?: React.ReactNode;
};

export default function CabecalhoPagina({
  titulo,
  descricao,
  trilha = [],
  children,
}: Props) {
  return (
    <div className="bg-navy text-sand">
      <div className="mx-auto max-w-[84rem] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
        {trilha.length > 0 && (
          <nav aria-label="Trilha" className="mb-6 text-sm text-taupe">
            <ol className="flex flex-wrap items-center gap-2">
              {trilha.map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-sand"
                  >
                    {item.rotulo}
                  </Link>
                  <span aria-hidden="true" className="text-sand/30">
                    /
                  </span>
                </li>
              ))}
              <li className="text-sand/70">{titulo}</li>
            </ol>
          </nav>
        )}

        <h1 className="max-w-[24ch] text-[length:var(--text-title)] font-semibold">
          {titulo}
        </h1>

        {descricao && (
          <p className="mt-6 max-w-[42rem] text-[length:var(--text-lead)] font-light leading-relaxed text-sand/80">
            {descricao}
          </p>
        )}

        {children}
      </div>
    </div>
  );
}
