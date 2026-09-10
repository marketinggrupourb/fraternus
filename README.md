# Site Fraternus

Site institucional do movimento Fraternus. Next.js 15 (App Router), TypeScript e
Tailwind CSS v4. Todas as páginas são geradas estaticamente no build.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

Para conferir o resultado exato da produção antes de publicar:

```bash
npm run build
npm start
```

## Publicar no Vercel

1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com, clique em **Add New → Project** e importe o repositório.
3. Não mexa em nada: o Vercel detecta Next.js sozinho. Sem variável de ambiente.
4. **Deploy.**

Para usar o domínio próprio, vá em **Settings → Domains** no projeto e siga as
instruções de DNS. Depois, troque `url` em `src/content/site.ts` para o endereço
definitivo — é dele que saem o sitemap e as tags de compartilhamento.

## Onde editar o conteúdo

Nenhuma dessas mudanças exige mexer em componente ou em CSS.

| Arquivo | O que controla |
| --- | --- |
| `src/content/site.ts` | Nome, telefone, WhatsApp, e-mail, números (obras, doações, membros), manifesto, valores, etapas, requisitos e citações |
| `src/content/obras.ts` | As obras realizadas. Cada item vira um card e uma página própria |
| `src/content/encontros.ts` | Fotos, vídeos do YouTube e notícias |
| `public/imagens/` | As fotos. Veja `public/imagens/LEIA-ME.md` para os nomes esperados |
| `src/app/globals.css` | Cores da marca, tipografia e espaçamentos |

### Adicionar uma obra

Copie um item de `obras.ts` e ajuste. O `slug` é o endereço da página
(`/obras/o-slug`) — use letras minúsculas e hífens, sem acento. A `capa` é a
imagem principal, e `galeria` aceita fotos extras na página da obra. Marque
`destaque: true` em uma única obra para escolher qual abre a seção na home.

### Publicar uma notícia

Adicione um item no topo de `noticias`, em `encontros.ts`. O campo `corpo` é uma
lista de parágrafos. A data usa o formato `AAAA-MM-DD`.

### Colocar um vídeo

Em `videos`, preencha `youtubeId` com o código que aparece depois de `v=` na URL
do YouTube. Enquanto estiver vazio, o card mostra um bloco de reserva.

## Decisões de projeto

**Cores** — a paleta da marca está em `globals.css`, dentro de `@theme`. O navy
`#183459` é a base dominante, não um detalhe: as seções alternam entre navy,
areia e papel. O terracota `#D9753B` fica reservado para chamadas de ação, para
não perder força.

**Tipografia** — Funnel Sans, carregada do Google Fonts, em família única. A
personalidade vem do contraste de peso (300 nos títulos grandes, 600 nos
menores) e da entrelinha fechada, não de uma segunda fonte.

**A linha vertical** que atravessa as seções em telas largas é o traço contínuo
e dobrado do símbolo Fraternus, aplicado à página. Some abaixo de 1024 px.

**Os números da home** (obras, doações, membros) são animados quando a seção
entra na tela. Para alterá-los, edite `valores_numericos` em `site.ts` — as
frases das outras seções são derivadas dos mesmos valores.

**As ilustrações** em `public/ilustracoes/` foram recoloridas em areia para
funcionarem sobre os fundos navy — Jesus abre o hero em marca-d'água, o homem
acompanha "propósito e valores" e São Francisco fecha o rodapé ao lado da
citação. Os originais em preto estão preservados nos arquivos enviados.

**Acessibilidade** — foco visível em toda a navegação por teclado, link de pular
para o conteúdo, textos alternativos em todas as imagens e `prefers-reduced-motion`
respeitado.

## Estrutura

```
src/
├─ app/
│  ├─ page.tsx                              Home
│  ├─ obras/page.tsx                        Lista de obras
│  ├─ obras/[slug]/page.tsx                 Página de cada obra
│  ├─ encontros/page.tsx                    Fotos, vídeos e notícias
│  ├─ encontros/noticias/[slug]/page.tsx    Página de cada notícia
│  ├─ seja-membro/page.tsx                  Requisitos e contato
│  ├─ not-found.tsx, sitemap.ts, robots.ts
│  ├─ layout.tsx                            Cabeçalho, rodapé, fontes, metadados
│  └─ globals.css                           Cores, tipografia, espaçamentos
├─ components/                              Seções e peças reutilizáveis
└─ content/                                 Textos, obras, encontros
```

## Pendências antes de ir ao ar

- [ ] Subir as fotos em `public/imagens/` (lista em `LEIA-ME.md`)
- [ ] Escolher qual obra leva `destaque: true` em `obras.ts`
- [ ] Confirmar o e-mail de contato em `site.ts` (está com um endereço de exemplo)
- [ ] Preencher os `youtubeId` dos vídeos
- [ ] Revisar as três notícias de exemplo em `encontros.ts` — os textos foram
      escritos a partir da apresentação e precisam da sua confirmação
- [ ] Trocar `url` em `site.ts` pelo domínio definitivo
- [ ] Criar uma imagem de compartilhamento (1200×630) e apontá-la em
      `openGraph.images`, no `layout.tsx`
