/**
 * Conteúdo central do site.
 * Editar aqui muda o texto em todas as páginas — não é preciso mexer nos componentes.
 */

export const site = {
  nome: "Fraternus",
  descricao:
    "Movimento católico de homens, empresários e profissionais que se reúnem para oração, formação, fraternidade e serviço.",
  url: "https://fraternus.org.br",
  cidade: "Fortaleza, Ceará",
  manifesto: [
    "Fé que nos une.",
    "Amizade que nos fortalece.",
    "Amor que se transforma em ação.",
  ],
  contato: {
    responsavel: "Rodrigo Cabral",
    telefone: "+55 85 98181-5353",
    telefoneExibicao: "(85) 98181-5353",
    whatsapp:
      "https://wa.me/5585981815353?text=Ol%C3%A1%2C%20quero%20saber%20como%20me%20tornar%20um%20membro%20Fraternus.",
    email: "contato@fraternus.org.br",
  },
} as const;

/**
 * Os números do movimento. Altere apenas aqui — a seção animada da home,
 * os textos das outras seções e o sitemap saem todos daqui.
 */
const valores_numericos = {
  obras: 8,
  doacoes: 205,
  membros: 70,
};

export const numeros = [
  {
    chave: "obras",
    valor: valores_numericos.obras,
    prefixo: "",
    sufixo: "",
    rotulo: "Obras apoiadas",
  },
  {
    chave: "doacoes",
    valor: valores_numericos.doacoes,
    prefixo: "R$ ",
    sufixo: " mil",
    rotulo: "Destinados às obras",
  },
  {
    chave: "membros",
    valor: valores_numericos.membros,
    prefixo: "+",
    sufixo: "",
    rotulo: "Membros contribuintes",
  },
] as const;

/** As mesmas quantidades em texto, para usar no meio das frases. */
export const numerosTexto = {
  obras: String(valores_numericos.obras),
  doacoes: `${valores_numericos.doacoes} mil`,
  membros: String(valores_numericos.membros),
} as const;

export const navegacao = [
  { rotulo: "Quem somos", href: "/#quem-somos" },
  { rotulo: "Propósito e valores", href: "/#proposito" },
  { rotulo: "Como atuamos", href: "/#como-atuamos" },
  { rotulo: "Obras realizadas", href: "/obras" },
  { rotulo: "Nossos encontros", href: "/encontros" },
] as const;

export const valores = [
  {
    chave: "fe",
    titulo: "Fé",
    texto:
      "Fortalecer nossa formação e nossa vivência como homens católicos.",
  },
  {
    chave: "fraternidade",
    titulo: "Fraternidade",
    texto:
      "Construir amizades verdadeiras, compartilhar experiências e fortalecer uma rede de empresários e amigos que caminham juntos.",
  },
  {
    chave: "servico",
    titulo: "Serviço",
    texto:
      "Unir nossas forças e recursos para apoiar obras da Igreja, movimentos e instituições que atuam em favor dos mais necessitados.",
  },
] as const;

export const etapas = [
  {
    titulo: "Conhecemos as necessidades",
    texto:
      "Visitamos instituições, ouvimos quem está na ponta e entendemos o que falta de verdade antes de prometer qualquer coisa.",
  },
  {
    titulo: "Avaliamos os projetos",
    texto:
      "Cada demanda vira um projeto com escopo, orçamento e responsável. O grupo analisa custo, urgência e alcance.",
  },
  {
    titulo: "Decidimos quais iniciativas apoiar",
    texto:
      "A decisão é do grupo. A contribuição mensal se transforma em obra executada, com prestação de contas aos membros.",
  },
] as const;

export const requisitos = [
  "Ser cristão e católico",
  "Contribuir mensalmente",
  "Participar dos encontros",
  "Ter disponibilidade para servir",
] as const;

export const citacoes = {
  inspiracao: {
    texto: "A fé sem obras é morta.",
    fonte: "Tiago 2,17",
  },
  fechamento: {
    texto:
      "Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.",
    fonte: "São Francisco de Assis",
  },
  encerramento: {
    texto: "É melhor dar do que receber.",
    fonte: "Atos 20,35",
  },
} as const;
