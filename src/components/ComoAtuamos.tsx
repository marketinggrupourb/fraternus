import Secao from "./Secao";
import Etapas from "./Etapas";

export default function ComoAtuamos() {
  return (
    <Secao id="como-atuamos" tom="areia">
      <div className="max-w-[46rem]">
        <h2 className="text-[length:var(--text-title)] font-semibold">
          Cada um faz a sua parte.
          <br />
          Juntos, multiplicamos o bem.
        </h2>
        <p className="mt-6 text-[length:var(--text-lead)] font-light leading-relaxed text-navy/80">
          A contribuição mensal não fica em caixa. Ela percorre um caminho curto
          e verificável até virar melhoria real para pessoas e comunidades.
        </p>
      </div>

      <div className="mt-14">
        <Etapas cartao="papel" />
      </div>
    </Secao>
  );
}
