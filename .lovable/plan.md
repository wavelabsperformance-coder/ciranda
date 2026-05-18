## Visão geral

O template atual usa **TanStack Start + Cloudflare Workers + SSR**. Você pediu explicitamente uma **SPA React/Vite tradicional com React Router DOM, pronta para deploy na Vercel**, sem TanStack Start, sem SSR, sem Workers. Isso exige uma migração completa da base antes de construir a landing.

Abaixo está o plano em duas fases.

---

## Fase 1 — Migração de stack (TanStack Start → Vite SPA)

Remover:
- `src/server.ts`, `src/start.ts`, `src/router.tsx` (versão TanStack), `src/routeTree.gen.ts`
- `src/routes/` (file-based routing)
- `wrangler.jsonc`
- `@tanstack/react-start`, `@tanstack/react-router`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config` do `package.json`
- Plugins TanStack do `vite.config.ts`

Adicionar:
- `index.html` na raiz com `<div id="root">` e meta tags base
- `src/main.tsx` (entry React 19 com `createRoot`)
- `src/App.tsx` com `<BrowserRouter>` e `<Routes>`
- `src/router.tsx` exportando a árvore de rotas
- `vite.config.ts` mínimo (`@vitejs/plugin-react`, alias `@` → `src`)
- `vercel.json` com SPA fallback (`rewrites` → `/index.html`)
- `react-router-dom`, `framer-motion`, `lucide-react` (já existe), `react-helmet-async`
- Scripts `dev` / `build` / `preview` apontando para Vite puro, gerando `/dist`

Manter:
- Tailwind v4 via `src/styles.css`
- Shadcn UI já instalado
- TypeScript strict

---

## Fase 2 — Landing Page Ciranda

### Estrutura de pastas

```txt
src/
  components/      # Header, Footer, WhatsAppFloat, VideoPlayer, CookieBanner, etc.
  sections/        # Hero, Experiencia, Condutora, Jornada, Vivencias, Espaco,
                   # Depoimentos, Investimento, FAQ, Formulario, CtaFinal
  pages/           # Home, PoliticaPrivacidade, TermosUso, Cookies, LGPD, NotFound
  data/contact.ts  # CNPJ, telefone, e-mail, endereço, WhatsApp
  hooks/           # useInView, useVideoHoverPreview
  utils/           # whatsappLink, validators

public/
  images/          # hero.webp, condutora.webp, jornada-1..4.webp, vivencias-*.webp
  videos/          # depoimento-1.mp4, depoimento-2.mp4, depoimento-3.mp4, espaco.mp4
```

Mídias trocáveis por substituição direta de arquivo — código usa `/images/...` e `/videos/...` (sem imports ES6).

### Rotas

- `/` — landing completa (todas as seções one-page)
- `/politica-de-privacidade`, `/termos-de-uso`, `/politica-de-cookies`, `/lgpd`
- `*` — 404

### Seções (na ordem)

1. **Header** — logo Ciranda + nav (Experiência, Condutora, Jornada, Espaço, Investimento) + CTA "Garantir minha vaga"

2. **Hero** — split editorial: título serif "Ciranda." + subtítulo itálico "uma travessia feminina sob a Lua Azul", chip "Edição Dona de Mim", chip data/local, dois CTAs, imagem cinematográfica com badge "Vagas Limitadas" e card flutuante "Fenômeno Lua Azul"

3. **Experiência** — "Existe uma vida muito maior esperando por você." + 3 cards numerados (Presa em dores / Silêncios / Um portal te espera) com offsets verticais orgânicos

4. **Vivências** — 4 cards de imagem com numeração discreta e legenda abaixo

5. **Condutora** — Juliana Prado: retrato com moldura orgânica, tags de especialidades, badge "+10 anos"

6. **Jornada** — imagem grande à esquerda + 4 etapas numeradas à direita (Chegada, Vivências, Travessia, Despertar) com divisores finos

7. **Espaço — Fazenda Saint Germain** — vídeo horizontal premium (hover preview, click-to-play com som) + 4 cards de atributo com ícones Lucide

8. **Depoimentos** — 3 vídeos verticais premium (mesma lógica de player) + linha de stats (+500, +10, 4.9, 98%)

9. **Investimento** — coluna esquerda copy + card direito (preço R$ 585, banner "Traga uma amiga", formas de pagamento, CTA)

10. **FAQ** — accordion sofisticado

11. **Formulário** — Nome / E-mail / WhatsApp / Mensagem + checkbox LGPD → abre WhatsApp pré-preenchido

12. **CTA Final** — full-bleed cinematográfico "Ela está lá. Esperando pela sua permissão." com overlay escuro, conectando visualmente ao footer

13. **Footer institucional** — Spaço Integrativo: logo, descrição, navegação, contato, CNPJ, redes, copyright, "Desenvolvido por Wave Labs Performance"

### Componentes premium

- **VideoPlayer**: thumbnail = primeiro frame do próprio vídeo, hover/touch → preview mute, click → play com som + controles nativos revelados
- **WhatsAppFloat**: botão fixo bottom-right, ícone oficial, glow verde sutil, microinteração no hover
- **CookieBanner**: consentimento LGPD persistido em localStorage
- **Accordion FAQ**, **InvestmentCard**, **TestimonialCard**

### Design system (`src/styles.css`)

Paleta cream/terracotta extraída das referências, em `oklch`:

- `--background` cream quente (#faf5ec aprox.)
- `--primary` terracotta queimado (botões CTA)
- `--foreground` marrom profundo
- `--muted-foreground` marrom acinzentado
- Tokens próprios: `--accent-rose`, `--surface-card`, `--border-soft`

Fontes:
- **Cormorant Garamond** (serif editorial)
- **Inter** (sans)

Carregadas via Google Fonts no `index.html`.

Sombras orgânicas, radius generosos (12–24px), micro-rotações nas imagens.

### Animações (Framer Motion, com moderação)

- Fade + slide-up no scroll (`whileInView`)
- Hover sutil em cards e CTAs
- Sem parallax exagerado, sem efeitos chamativos

### SEO

- `react-helmet-async` por página (title, description, OG, canonical)
- JSON-LD `LocalBusiness` no Home com dados Spaço Integrativo
- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`, H1 único)
- `loading="lazy"` em todas as imagens não-hero
- Placeholders para Meta Pixel e GA no `index.html` (comentados, prontos para ID)

### Dados de contato (`src/data/contact.ts`)

```ts
export const contact = {
  phone: "(79) 9645-4440",
  whatsapp: "5579996454440",
  email: "julianaprado.psicologa@gmail.com",
  instagram: "https://www.instagram.com/julianapradopsi/",
  address: "R. Dr. José Roberto Ribeiro, 95",
  cnpj: "62.143.476/0001-39",
  company: "Spaço Integrativo",
  agency: {
    name: "Wave Labs Performance",
    url: "https://wavelabs.com.br",
  },
};
```

### Mídias

Vou gerar imagens cinematográficas com `imagegen` para `/public/images/`:
- hero
- condutora
- jornada×4
- vivências×4
- espaço
- CTA final

Vídeos serão arquivos placeholder vazios com nome correto — você substitui pelos reais sem tocar no código.

Documentarei isso num `public/MEDIA.md`.

---

## Detalhes técnicos relevantes

### Vercel SPA fallback (`vercel.json`)

```json
{
  "rewrites": [
    {
      "source": "/((?!robots.txt|sitemap.xml).*)",
      "destination": "/index.html"
    }
  ]
}
```

- Tailwind v4 continua via `@import "tailwindcss"` em `src/styles.css`
- `VideoPlayer` detecta touch via `pointer: coarse`
- Formulário WhatsApp monta `https://wa.me/5579996454440?text=...`
- Build output: `dist/`

---

## O que NÃO entra nesta entrega

- Integração com CRM / e-mail marketing
- CMS
- Vídeos reais
- IDs reais de Meta Pixel / GA

---

Posso seguir com essa migração completa + construção da landing?

É um trabalho extenso (≈25–30 arquivos novos, geração de ~10 imagens), então confirmo antes de começar.