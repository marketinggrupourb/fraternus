"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navegacao, site } from "@/content/site";

export default function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const caminho = usePathname();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    setAberto(false);
  }, [caminho]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou || aberto
          ? "bg-navy shadow-[0_1px_0_rgba(242,218,189,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label={`${site.nome} — página inicial`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/Fraternus-hor-negativa.svg"
            alt={site.nome}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-sand/85 transition-colors hover:text-sand"
            >
              {item.rotulo}
            </Link>
          ))}
          <Link
            href="/seja-membro"
            className="bg-clay px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-clay/90"
          >
            Seja um membro
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          className="flex h-11 w-11 items-center justify-center text-sand lg:hidden"
        >
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {aberto ? (
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 7h18M3 12h18M3 17h18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <div
          id="menu-movel"
          className="border-t border-sand/15 bg-navy px-5 pb-8 pt-4 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Principal (móvel)">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-sand/10 py-4 text-lg font-medium text-sand"
              >
                {item.rotulo}
              </Link>
            ))}
            <Link
              href="/seja-membro"
              className="mt-6 bg-clay px-5 py-4 text-center text-base font-semibold text-white"
            >
              Seja um membro
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
