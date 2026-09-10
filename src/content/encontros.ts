export type Foto = {
  src: string;
  legenda: string;
  data: string;
};

export type Video = {
  titulo: string;
  descricao: string;
  /** ID do YouTube. Deixe vazio para exibir o bloco de reserva. */
  youtubeId: string;
  data: string;
};

export type Noticia = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  capa: string;
  /** Parágrafos do corpo do texto. */
  corpo: string[];
};

export const fotos: Foto[] = [
  {
    src: "/imagens/encontros/encontro-01.jpg",
    legenda: "Encontro mensal de formação",
    data: "2025-08-14",
  },
  {
    src: "/imagens/encontros/encontro-02.jpg",
    legenda: "Momento de oração antes da reunião",
    data: "2025-08-14",
  },
  {
    src: "/imagens/encontros/encontro-03.jpg",
    legenda: "Visita à Casa de Acolhimento Irmão Sol e Irmã Lua",
    data: "2025-07-19",
  },
  {
    src: "/imagens/encontros/encontro-04.jpg",
    legenda: "Entrega da reforma em Crateús",
    data: "2025-06-21",
  },
  {
    src: "/imagens/encontros/encontro-05.jpg",
    legenda: "Confraternização dos membros",
    data: "2025-05-17",
  },
  {
    src: "/imagens/encontros/encontro-06.jpg",
    legenda: "Retiro na Casa de Retiros de Mauriti",
    data: "2025-04-12",
  },
];

export const videos: Video[] = [
  {
    titulo: "O que fica quando a gente ajuda",
    descricao:
      "Histórias das pessoas alcançadas pelas obras apoiadas pelo Fraternus.",
    youtubeId: "",
    data: "2025-08-01",
  },
  {
    titulo: "Casa de Acolhimento Irmão Sol e Irmã Lua",
    descricao: "O antes e o depois da reforma, contado por quem vive na casa.",
    youtubeId: "",
    data: "2025-06-10",
  },
  {
    titulo: "Como escolhemos uma obra",
    descricao:
      "Da primeira visita à entrega das chaves: o caminho de um projeto dentro do grupo.",
    youtubeId: "",
    data: "2025-04-02",
  },
];

export const noticias: Noticia[] = [
  {
    slug: "creche-madre-elisa-baldo-em-execucao",
    titulo: "Coberta da Creche Madre Elisa Baldo entra em execução",
    resumo:
      "A rampa de acesso usada todos os dias pelas crianças vai ganhar proteção contra chuva e sol.",
    data: "2025-08-20",
    capa: "/imagens/encontros/noticia-madre-elisa.jpg",
    corpo: [
      "A obra de execução da coberta sobre a rampa de acesso da Creche Escola Madre Elisa Baldo, mantida pela Associação das Humildes Servas do Senhor, começou neste mês.",
      "A rampa é o caminho diário de entrada e saída das crianças. Sem cobertura, dias de chuva significavam atraso, roupa molhada e risco de queda. O projeto foi levantado em visita à creche e aprovado pelo grupo na reunião seguinte.",
      "A previsão de entrega é para o próximo trimestre. Acompanhe as fotos da execução na página de obras.",
    ],
  },
  {
    slug: "205-mil-em-doacoes",
    titulo: "Fraternus alcança R$ 205 mil destinados a obras",
    resumo:
      "Oito obras apoiadas desde o início do movimento, sustentadas pela contribuição mensal de mais de 70 membros.",
    data: "2025-07-05",
    capa: "/imagens/encontros/noticia-205mil.jpg",
    corpo: [
      "O movimento chegou à marca de R$ 205 mil destinados integralmente a obras da Igreja e a instituições que atendem pessoas em situação de vulnerabilidade.",
      "São oito obras em cidades diferentes do Ceará: bibliotecas, casas de acolhimento, paróquias, creche e casa de retiros. Cada uma foi visitada, avaliada e votada pelo grupo antes de receber recurso.",
      "O número não é um ponto de chegada. Cada novo integrante fortalece essa corrente e amplia o alcance do que conseguimos fazer juntos.",
    ],
  },
  {
    slug: "reforma-em-crateus-entregue",
    titulo: "Reforma da Paróquia Nossa Senhora do Bonfim é entregue",
    resumo:
      "Em Crateús, a comunidade recebeu de volta um espaço digno para as celebrações.",
    data: "2025-06-21",
    capa: "/imagens/encontros/noticia-crateus.jpg",
    corpo: [
      "A reforma da Paróquia Nossa Senhora do Bonfim, em Crateús, foi concluída e entregue à comunidade em celebração no último sábado.",
      "O trabalho recuperou áreas comprometidas por infiltração e desgaste, devolvendo condições adequadas para as missas, os encontros de pastoral e a catequese.",
      "A comparação entre o antes e o depois está disponível na página da obra.",
    ],
  },
];

export function noticiaPorSlug(slug: string) {
  return noticias.find((noticia) => noticia.slug === slug);
}

export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
