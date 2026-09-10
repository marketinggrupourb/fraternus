export type Obra = {
  slug: string;
  nome: string;
  subtitulo?: string;
  local: string;
  intervencao: string;
  descricao: string;
  situacao: "concluida" | "execucao";
  capa: string;
  /** Marque uma única obra para ela abrir a seção na home. */
  destaque?: boolean;
  galeria?: string[];
};

/**
 * Coloque as fotos em /public/imagens/obras/ usando exatamente os nomes abaixo.
 * Enquanto o arquivo não existir, o site mostra um bloco de reserva com a legenda.
 */
export const obras: Obra[] = [
  {
    slug: "biblioteca-comunitaria-sabia",
    nome: "Biblioteca Comunitária Sabiá",
    local: "Fortaleza, CE",
    intervencao: "Doação de materiais",
    descricao:
      "Doação de materiais estruturais e de apoio às atividades da biblioteca, que atende crianças e jovens da comunidade com leitura, reforço escolar e oficinas.",
    situacao: "concluida",
    capa: "/imagens/obras/sabia-capa.jpg",
    galeria: ["/imagens/obras/sabia-01.jpg", "/imagens/obras/sabia-02.jpg"],
  },
  {
    slug: "mosteiro-de-baturite",
    nome: "Mosteiro de Baturité",
    local: "Baturité, CE",
    intervencao: "Apoio estrutural",
    descricao:
      "Apoio às necessidades estruturais do mosteiro, casa de oração e acolhida para retiros e para a vida religiosa da região do Maciço.",
    situacao: "concluida",
    capa: "/imagens/obras/baturite-capa.jpg",
    galeria: ["/imagens/obras/baturite-01.jpg"],
  },
  {
    slug: "shalom-obra-mauriti",
    nome: "Comunidade Shalom — Obra Mauriti",
    local: "Mauriti, CE",
    intervencao: "Conclusão da Casa de Retiros",
    descricao:
      "Doação destinada à conclusão da Casa de Retiros, que passa a receber grupos de formação e retiros espirituais ao longo de todo o ano.",
    situacao: "concluida",
    capa: "/imagens/obras/mauriti-capa.jpg",
    galeria: ["/imagens/obras/mauriti-01.jpg"],
  },
  {
    slug: "paroquia-do-perpetuo-socorro",
    nome: "Paróquia do Perpétuo Socorro",
    local: "Fortaleza, CE",
    intervencao: "Reforma dos banheiros",
    descricao:
      "Reforma completa dos banheiros da paróquia, usados diariamente pela comunidade e pelos grupos de pastoral.",
    situacao: "concluida",
    capa: "/imagens/obras/perpetuo-socorro-capa.jpg",
    galeria: ["/imagens/obras/perpetuo-socorro-01.jpg"],
  },
  {
    slug: "creche-madre-elisa-baldo",
    nome: "Creche Escola Madre Elisa Baldo",
    subtitulo: "Associação das Humildes Servas do Senhor",
    local: "Fortaleza, CE",
    intervencao: "Coberta sobre a rampa de acesso",
    descricao:
      "Execução da coberta sobre a rampa de acesso, garantindo entrada segura e protegida para as crianças em dias de chuva e sol forte.",
    situacao: "execucao",
    capa: "/imagens/obras/madre-elisa-capa.jpg",
    galeria: ["/imagens/obras/madre-elisa-01.jpg"],
  },
  {
    slug: "paroquia-nossa-senhora-do-bonfim",
    nome: "Paróquia Nossa Senhora do Bonfim",
    local: "Crateús, CE",
    intervencao: "Reforma",
    descricao:
      "Reforma do espaço paroquial em Crateús, devolvendo à comunidade um lugar digno para as celebrações e para o trabalho pastoral.",
    situacao: "concluida",
    capa: "/imagens/obras/bonfim.jpg",
    destaque: true,
  },
  {
    slug: "irmao-sol-irma-lua-sao-paulo",
    nome: "Irmão Sol e Irmã Lua",
    subtitulo: "Casa de acolhimento feminina — Rua São Paulo",
    local: "Fortaleza, CE",
    intervencao: "Reforma da casa de acolhimento",
    descricao:
      "Reforma da casa que acolhe mulheres em situação de rua. Um espaço que voltou a ter as condições mínimas de dignidade para quem chega.",
    situacao: "concluida",
    capa: "/imagens/obras/irmao-sol-sp.jpg",
  },
  {
    slug: "irmao-sol-irma-lua-tristao-goncalves",
    nome: "Irmão Sol e Irmã Lua",
    subtitulo: "Sede — Av. Tristão Gonçalves",
    local: "Fortaleza, CE",
    intervencao: "Reforma da sede",
    descricao:
      "Reforma da sede da obra, ponto de referência para o atendimento e o encaminhamento de pessoas em situação de vulnerabilidade no centro da cidade.",
    situacao: "concluida",
    capa: "/imagens/obras/irmao-sol-tg.jpg",
  },
];

export function obraPorSlug(slug: string) {
  return obras.find((obra) => obra.slug === slug);
}
