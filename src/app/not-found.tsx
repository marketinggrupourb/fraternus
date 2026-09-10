import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-navy text-sand">
      <div className="mx-auto flex min-h-[70vh] max-w-[84rem] flex-col justify-center px-5 py-32 sm:px-8">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold">
          Esta página não existe
        </h1>
        <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-sand/75">
          O endereço pode ter mudado. Volte ao início ou veja as obras que já
          realizamos.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-clay px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-clay/90"
          >
            Ir para o início
          </Link>
          <Link
            href="/obras"
            className="border border-sand/35 px-7 py-4 text-center font-medium transition-colors hover:bg-sand hover:text-navy"
          >
            Ver as obras
          </Link>
        </div>
      </div>
    </div>
  );
}
