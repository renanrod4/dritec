# Dritec | Landing Page Profissional para Caça Vazamentos

Dritec é uma landing page institucional e de alta conversão desenvolvida com Next.js 16, React 19 e Tailwind CSS 4 para uma empresa especializada em caça-vazamentos. Focada na captação rápida de leads via WhatsApp e otimização avançada para motores de busca (SEO Local e Schema.org), a aplicação apresenta uma arquitetura front-end componentizada com App Router, garantindo navegação fluida, performance excepcional em dispositivos móveis e uma infraestrutura pronta para testes A/B em campanhas regionais.

## Visão Geral

Este projeto apresenta uma página única (one-page) para divulgação dos serviços da Dritec em São Paulo e região. O objetivo principal é transformar visitas em contatos qualificados, reforçando credibilidade da marca e reduzindo fricção no primeiro atendimento.

## Objetivos de Negócio da Página

- Gerar contatos imediatos por WhatsApp.
- Comunicar autoridade técnica em detecção e reparo de vazamentos.
- Explicar serviços de forma simples para público residencial e comercial.
- Reforçar urgência de atendimento com mensagem de prioridade.
- Sustentar confiança com benefícios claros e prova de estrutura operacional.

## Principais Diferenciais

- CTA de WhatsApp em pontos estratégicos da página (header, hero, sobre e contato).
- Mensagens orientadas para urgência e redução de custo por ação antecipada.
- Estrutura por seções com narrativa comercial progressiva.
- Header responsivo com menu mobile e comportamento adaptativo no scroll.
- Elementos visuais de movimento (partículas e indicador animado) para aumentar percepção de modernidade.
- Conteúdo focado em técnicas não destrutivas e atendimento especializado.

## Seções da Landing Page

1. Hero inicial com proposta de valor e botões de ação.
2. Bloco de destaques da empresa.
3. Lista de serviços com cards explicativos.
4. Seção Sobre com benefícios, abrangência e argumento de confiança.
5. Seção de contato com informações essenciais e chamada de ação imediata.
6. Rodapé institucional com identidade da marca.

## Stack Técnica

### Base

- Next.js 16
- React 19
- TypeScript 5

### UI e Estilização

- Tailwind CSS 4
- Lightswind (partículas animadas)
- React Icons
- Lottie React (animações JSON)
- clsx + tailwind-merge (composição de classes utilitárias)

### Qualidade e Build

- ESLint 9
- eslint-config-next
- React Compiler (habilitado no Next)

## Arquitetura de Front-end

O projeto usa App Router do Next.js com composição por componentes reutilizáveis. A página principal agrega seções desacopladas, facilitando manutenção e iterações de marketing sem impacto em todo o layout.

Pontos de arquitetura:

- Estrutura de componentes organizada por domínio de seção.
- Separação entre conteúdo institucional e elementos de interface.
- Utilitários centralizados para classes e funções comuns.
- IDs de seção para navegação âncora e fluxo one-page.

## Responsividade e UX

- Layout otimizado para mobile, tablet e desktop.
- Menu mobile com abertura/fechamento simplificado.
- Botões grandes e claros para ação rápida em telas menores.
- Contraste e hierarquia visual pensados para leitura rápida.

## SEO e Metadados

- Metadata global completo configurado no App Router, com title em formato comercial e description orientada a conversão local.
- Open Graph implementado com título, descrição, locale pt_BR e imagem dedicada em 1200x630 gerada pela rota `app/opengraph-image.tsx`.
- Twitter Card implementado no formato summary_large_image para melhor preview em redes sociais e mensageria.
- Diretivas de indexação (robots e googleBot) configuradas para rastreamento e exibição ampliada de snippets.
- Canonical e metadataBase definidos para reduzir ambiguidade de URL em indexação.
- Sinais geográficos aplicados para reforço de presença em São Paulo (geo.region, geo.placename, geo.position e ICBM).
- Dados estruturados com Schema.org (`LocalBusiness`) aplicados no layout global, com telefone, cobertura regional, horário de atendimento e coordenadas geográficas.
- Variações de copy por palavra-chave local implementadas para SEO e testes A/B em campanhas regionais.
- Estrutura semântica por seções mantida para facilitar leitura de conteúdo pelos mecanismos de busca.

Parâmetros de copy local para campanhas (query string):

- `?local=sao-paulo`
- `?local=zona-sul`
- `?local=zona-leste`
- `?local=abc`

## Como Rodar o Projeto

### Pré-requisitos

- Node.js 20+
- npm 10+

### Instalação

1. Instale as dependências:

npm install

2. Rode em ambiente de desenvolvimento:

npm run dev

3. Acesse no navegador:

http://localhost:3000

## Scripts Disponíveis

- npm run dev: inicia servidor de desenvolvimento.
- npm run build: gera build de produção.
- npm run start: inicia aplicação em modo produção.
- npm run lint: executa análise de padrão e qualidade de código.

## Estrutura de Pastas

- app: entrada da aplicação, layout global e página principal.
- components: seções da landing page e componentes reutilizáveis.
- lib: utilitários compartilhados.
- public: assets estáticos (imagens e animações).

## Personalização Rápida

Para adaptar esta landing page para outras unidades, franquias ou campanhas:

- Atualize telefone e mensagem padrão do WhatsApp.
- Ajuste textos institucionais das seções de serviço e sobre.
- Substitua imagens e logotipo em public/images.
- Ajuste paleta de cores no tema do Tailwind.

## Recomendações para Produção

- Configurar analytics para medir cliques nos CTAs de WhatsApp.
- Integrar eventos de conversão com plataforma de anúncios.
- Implementar testes de performance e acessibilidade no pipeline.
- Versionar mudanças de copy com foco em testes A/B.

## Licença

Projeto de uso institucional da Dritec. Defina internamente a política de distribuição e reutilização de código/conteúdo conforme necessidade do negócio.
