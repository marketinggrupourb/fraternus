import Secao from "./Secao";

export default function QuemSomos() {
  return (
    <Secao id="quem-somos" tom="claro">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-[length:var(--text-title)] font-semibold">
            Quem somos
          </h2>
        </div>

        <div className="lg:col-span-7">
          <p className="max-w-[38rem] text-[length:var(--text-lead)] font-light leading-relaxed">
            Movimento católico criado por amigos homens, empresários e
            profissionais de diferentes áreas, que partilham o desejo de viver a
            fé de forma autêntica e concreta.
          </p>
          <p className="mt-6 max-w-[38rem] leading-relaxed text-navy/75">
            Nos reunimos periodicamente para encontros de oração, formação,
            networking com propósito e serviço, fortalecendo a espiritualidade e
            os laços fraternos. O que decidimos juntos vira obra: cada
            contribuição mensal é destinada a projetos que o próprio grupo
            visita, avalia e acompanha até a entrega.
          </p>
        </div>
      </div>
    </Secao>
  );
}
