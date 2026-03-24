# Landing Genoma

Landing page em React + TypeScript + Vite para apresentar o acompanhamento da DNA Imóveis na etapa de certidões da venda.

## Stack

- React 19
- TypeScript
- Vite
- Sass (`.scss`)
- ESLint

## Como rodar

### Instalar dependências

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Estrutura do projeto

```text
src/
  assets/         imagens e ícones da landing
  components/     seções e blocos visuais
  constants/      constantes compartilhadas
  hooks/          hooks utilitários, como scroll reveal
  App.tsx         entrada principal da aplicação
  App.scss        estilos principais da landing
```

## Estrutura da landing

A página atual é montada pelo componente `MobileVs4`, que organiza as seções na ordem abaixo:

1. `Hero`
2. `Problem`
3. `CommonIssues`
4. `Dashboard`
5. `Benefits`
6. `Testimonials`
7. `Footer`

## Padrão adotado no código

- Os componentes foram organizados com classes semânticas por seção, no formato `.secao { .secao__elemento { ... } }`.
- Estilos visuais ficam centralizados em `src/App.scss`.
- A estrutura JSX evita `style={...}` inline copiado do Figma.
- Conteúdos repetidos, como listas, cards e timelines, são preferencialmente montados com arrays.

## Observações de manutenção

- A landing usa imagens locais em `src/assets` e algumas referências centralizadas em `src/constants/figmaAssets.ts`.
- A animação de entrada das seções usa o hook `useScrollReveal`.
- O carrossel de depoimentos está implementado em `src/components/Testimonials.tsx`.
- O layout principal atualmente é mobile-first.

## Arquivos principais

- `src/components/MobileVs4.tsx`: composição da landing
- `src/App.scss`: estilos globais e de seções
- `src/components/Testimonials.tsx`: carrossel de depoimentos
- `src/components/Dashboard.tsx`: timeline e painel do Genoma

## Objetivo deste projeto

Apresentar de forma clara e persuasiva a proposta de valor da DNA Imóveis para reduzir atrasos, riscos e burocracia na etapa de certidões durante o processo de venda.
