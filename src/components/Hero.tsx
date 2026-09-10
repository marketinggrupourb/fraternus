import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-sand">
      {/* Ilustração de Jesus em marca-d'água. Traço contínuo, como o símbolo
          do logo — abre a página sem competir com o manifesto. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ilustracoes/jesus.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 hidden h-[78%] max-w-[42%] -translate-y-1/2 object-contain opacity-35 md:block lg:right-8"
      />

      <div className="relative mx-auto max-w-[84rem] px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44 lg:pt-52">
        <div className="max-w-[58rem]">
          <h1 className="text-[length:var(--text-display)] font-light leading-[0.98] tracking-[-0.03em]">
            {site.manifesto.map((linha) => (
              <span key={linha} className="block">
                {linha}
              </span>
            ))}
          </h1>

          <p className="mt-9 max-w-[34rem] text-[length:var(--text-lead)] font-light leading-relaxed text-sand/80">
            Somos homens católicos — empresários e profissionais de áreas
            diferentes — que se reúnem para rezar, se formar, criar amizades
            verdadeiras e transformar contribuição mensal em obra entregue.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/seja-membro"
              className="bg-clay px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-clay/90"
            >
              Quero fazer parte
            </Link>
            <Link
              href="/obras"
              className="border border-sand/35 px-7 py-4 text-center font-medium text-sand transition-colors hover:border-sand hover:bg-sand/10"
            >
              Ver as obras realizadas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
