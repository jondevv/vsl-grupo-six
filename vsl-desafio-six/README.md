## Como rodar localmente

```bash
git clone https://github.com/jondevv/vsl-grupo-six.git
cd vsl-grupo-six/vsl-desafio-six
npm install
npm run dev
```

Acesse `http://localhost:5173`

Para testar os UTMs, acesse com parâmetros na URL:

```
http://localhost:5173/?utm_source=facebook&utm_medium=cpc&utm_campaign=teste
```

---

## Decisões técnicas

### Por que Vite e não CRA

CRA está descontinuado e o Vite é absurdamente mais rápido pra iniciar o dev server. Como o projeto é uma SPA simples com 3 páginas, não vi necessidade de usar Next.js — seria matar formiga com bazuca.

### Por que Tailwind

Eu já tinha familiaridade e pra um projeto desse porte não faz sentido criar um sistema de design do zero. O Tailwind me permitiu iterar rápido no layout sem ficar alternando entre arquivos CSS e JSX. Usei a v4 com o plugin do Vite direto, sem precisar do PostCSS.

### Sistema de UTMs

Essa foi a parte que eu mais pensei antes de codar. O fluxo é:

1. Usuário chega vindo de um anúncio (URL com UTMs)
2. O hook `useUTM` captura os parâmetros e salva no `sessionStorage`
3. Ao clicar no CTA, a função `buildLink` cola os UTMs na URL de destino
4. Esse processo se repete no checkout e na página de obrigado

Separei a lógica em duas camadas:
- `src/utils/utm.js` — funções puras de JavaScript, sem dependência do React
- `src/hooks/useUTM.js` — hook que conecta essas funções ao ciclo de vida do React

Escolhi `sessionStorage` ao invés de `localStorage` de propósito. O sessionStorage morre quando fecha a aba, o que evita que UTMs de uma campanha velha contaminem uma visita nova dias depois. Pra rastreamento de campanha faz mais sentido.

## Otimizações de performance

### Imagens
- Todas as imagens do projeto estão em JPEG otimizado
- Toda `<img>` tem `loading="lazy"`, `width` e `height` definidos (evita layout shift)

### Vídeo
- O iframe do YouTube tem `loading="lazy"` pra não bloquear o carregamento inicial
- Uso `aspect-video` do Tailwind pra manter a proporção 16:9 sem calcular padding hack

### Fontes
- Não importei nenhuma fonte externa. Uso a stack de fontes do sistema (`font-sans` do Tailwind) que carrega instantaneamente

### Bundle
- O projeto usa poucas dependências: React, React Router e Tailwind. Nada de biblioteca de UI pesada
- O Vite já faz tree-shaking e minificação no build de produção

## Ligthouse
- Pode achar meus resultados do Lighthouse mobile aqui: `vsl-desafio-six/Lighthouse.png`