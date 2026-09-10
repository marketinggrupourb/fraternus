"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Proporção CSS, ex.: "4 / 3". Padrão: 3 / 2. */
  proporcao?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Exibe a foto quando o arquivo existe em /public.
 * Enquanto ele não existe, mostra um bloco de reserva com o nome esperado —
 * assim dá para navegar o site inteiro antes de subir as imagens.
 *
 * A imagem só aparece depois de carregada, então um arquivo ausente nunca
 * pisca o ícone de imagem quebrada do navegador.
 */
export default function Figura({
  src,
  alt,
  proporcao = "3 / 2",
  className = "",
  priority = false,
}: Props) {
  const [carregada, setCarregada] = useState(false);
  const arquivo = src.split("/").pop();

  return (
    <div
      className={`relative overflow-hidden bg-taupe/25 ${className}`}
      style={{ aspectRatio: proporcao }}
    >
      <div
        aria-hidden={carregada}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center transition-opacity ${
          carregada ? "opacity-0" : "opacity-100"
        }`}
      >
        <span aria-hidden="true" className="h-px w-10 bg-navy/30" />
        <span className="text-sm font-medium text-navy/70">{alt}</span>
        <code className="text-[0.68rem] tracking-tight text-navy/45">
          {arquivo}
        </code>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setCarregada(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          carregada ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
