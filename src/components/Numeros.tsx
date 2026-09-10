"use client";

import { useEffect, useRef, useState } from "react";
import { numeros } from "@/content/site";

const DURACAO = 1600;

/** Desaceleração no fim, para a contagem "assentar" em vez de parar seco. */
function suavizar(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Contador({ valor, ativo }: { valor: number; ativo: boolean }) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!ativo) return;

    // Quem pediu menos movimento recebe o número final direto.
    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (semMovimento) {
      setAtual(valor);
      return;
    }

    let quadro = 0;
    const inicio = performance.now();

    const passo = (agora: number) => {
      const progresso = Math.min(1, (agora - inicio) / DURACAO);
      setAtual(Math.round(suavizar(progresso) * valor));
      if (progresso < 1) quadro = requestAnimationFrame(passo);
    };

    quadro = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro);
  }, [ativo, valor]);

  return <>{atual}</>;
}

export default function Numeros() {
  const secaoRef = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvo = secaoRef.current;
    if (!alvo) return;

    // Sem IntersectionObserver, mostra os números sem animar.
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  return (
    <section ref={secaoRef} className="bg-sage text-navy-deep">
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 sm:py-20">
        <dl className="grid grid-cols-1 divide-y divide-navy/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {numeros.map((item, indice) => (
            <div
              key={item.chave}
              className={`py-8 sm:py-0 ${
                indice === 0 ? "sm:pr-10" : indice === 1 ? "sm:px-10" : "sm:pl-10"
              }`}
            >
              <dd className="flex flex-wrap items-baseline gap-x-2 text-[clamp(2.75rem,6vw,4.25rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                {item.prefixo && (
                  <span className="text-[0.45em] font-medium tracking-normal">
                    {item.prefixo.trim()}
                  </span>
                )}
                <span>
                  <Contador valor={item.valor} ativo={visivel} />
                </span>
                {item.sufixo && (
                  <span className="text-[0.45em] font-medium tracking-normal">
                    {item.sufixo.trim()}
                  </span>
                )}
              </dd>
              <dt className="mt-3 text-[0.95rem] font-medium text-navy-deep/70">
                {item.rotulo}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
