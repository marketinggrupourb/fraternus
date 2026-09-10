import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import QuemSomos from "@/components/QuemSomos";
import Valores from "@/components/Valores";
import ComoAtuamos from "@/components/ComoAtuamos";
import ObrasResumo from "@/components/ObrasResumo";
import EncontrosResumo from "@/components/EncontrosResumo";
import CtaMembro from "@/components/CtaMembro";

export default function Home() {
  return (
    <>
      <Hero />
      <Numeros />
      <QuemSomos />
      <Valores />
      <ComoAtuamos />
      <ObrasResumo />
      <EncontrosResumo />
      <CtaMembro />
    </>
  );
}
