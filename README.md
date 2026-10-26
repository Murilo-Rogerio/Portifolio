# 💼 Portfólio & Currículo Interativo — Murilo Rogério

[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=flat-square)]()
[![Tecnologias](https://img.shields.io/badge/Techs-HTML5%20%7C%20CSS3%20%7C%20JS%20Vanilla-blue?style=flat-square)]()
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-violet?style=flat-square)]()
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&style=flat-square)](https://meuportifolio-pessoal.vercel.app/)

Portfólio web moderno, de alto desempenho e totalmente responsivo, desenvolvido com arquitetura Bento Grid. O projeto reúne a minha trajetória acadêmica, experiências profissionais (como na Engemap Geoinformação), competências técnicas em **Desenvolvimento Full-Stack**, **Geotecnologia & WebGIS** e **Robótica/Automação**, além das minhas aplicações em produção.

🔗 **Acesse o portfólio ao vivo:** [meuportifolio-pessoal.vercel.app](https://meuportifolio-pessoal.vercel.app/)

---

## 📑 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Projetos em Destaque](#-projetos-em-destaque)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar Localmente](#-como-executar-localmente)
- [Licença](#-licença)

---

## 🧭 Visão Geral

O objetivo principal deste projeto é apresentar o meu perfil profissional e técnico de forma clara, interativa e elegante, sem a necessidade de dependências pesadas ou frameworks complexos no frontend do portfólio.

- **Design:** Bento Grid escuro (*Dark Mode nativo*) com suporte a acentos em gradiente, efeito *glassmorphism*, suporte a efeito 3D Tilt e cursor customizado.
- **Acessibilidade:** Marcação HTML5 semântica e atributos ARIA para melhor navegação por leitores de tela.
- **Performance:** Carregamento ultra-rápido, otimizado sem bibliotecas de terceiros além de fontes web.

---

## ⚡ Funcionalidades

- 🗂️ **Bento Grid Layout:** Organização modular para perfis, experiências, habilidades e projetos.
- 🎯 **Visão Rápida para Recrutadores:** Modal executivo com resumo de 30 segundos contendo disponibilidade, perfil cognitivo (AH/SD), diferenciais e stack principal.
- 🔬 **Estudos de Caso Técnicos:** Modais com detalhamento aprofundado de cada projeto, abordando Desafio Técnico, Solução de Engenharia, Decisões de Arquitetura, Trade-offs e KPIs.
- 🏷️ **Filtro Dinâmico de Projetos:** Filtragem instantânea por categoria (`Todos`, `WebGIS`, `Full-Stack`, `PWA / Mobile`).
- 🧭 **Navegação & Scrollspy:** Barra lateral com indicação de seção ativa e retorno rápido ao topo.
- 📊 **Barra de Progresso de Leitura:** Indicador no topo acompanhando a rolagem da página.
- 📄 **Gerador de Currículo PDF:** Impressão e exportação dinâmica do currículo em formato A4 numa nova aba.
- ⚡ **Atalhos Rápidos:** Botões para cópia instantânea de dados de contato (E-mail, WhatsApp) com notificações *Toast*.
- 🕒 **Horário Local em Tempo Real:** Relógio digital configurado para o fuso horário de Assis, SP (BRT).
- 📡 **Live GitHub Tracking:** Conexão direta com a API pública do GitHub exibindo o repositório e mensagem do commit mais recente em tempo real.
- 📱 **Totalmente Responsivo:** Adaptação fluida para dispositivos móveis, tablets e monitores ultrawide.

---

## 🚀 Projetos em Destaque

- **Engemap (WebGIS & AutoCAD):** Mapeamento Móvel de ativos em nível de solo ("Street View" da Engemap: placas, postes Wi-Fi, placas solares) e vetorização em AutoCAD com imagens de drones para traçado geométrico de eixo e bordas de rodovias (14º → 15º mês de contrato).
- **[Arca](https://github.com/Murilo-Rogerio/Arcaik)** ([Demo](https://arcaik-notes.vercel.app/)): Bloco de notas e organização pessoal PWA com captura de mídias (TikTok/YouTube) via Web Share Target do Android, compressão de imagens no cliente e backend Supabase com RLS.
- **[Nosso Fluxo](https://github.com/Murilo-Rogerio/nossofluxo)** ([Demo](https://nossofluxo.vercel.app)): Gestão financeira pessoal completa com cotações automáticas de FIIs/Ações, projeção de recorrências e taxa CDI em tempo real via BrasilAPI.
- **[Vivi Carvalho Boty](https://github.com/Murilo-Rogerio/Vivi-Boty)** ([Demo](https://www.vivicarvalhoboty.com.br/)): Catálogo e-commerce e vitrine digital com funil de vendas integrado diretamente ao WhatsApp, extração multimodal de cosméticos via Google Gemini 3.8 Flash e painel administrativo com Edge Middleware.
- **[FORJA](https://github.com/Murilo-Rogerio/Forja-gym)** ([Demo](https://theforge-rho.vercel.app)): Plataforma PWA de alta performance e mini rede social fitness inspirada no Hevy, com biblioteca completa de 132+ exercícios com guias biomecânicos e tracking de 1RM, AI Coach multifuncional (Google Gemini), contador de macros e 9 micronutrientes por linguagem natural, sincronização em nuvem e feed social em tempo real com Supabase, heatmap anatômico corporal em vermelho neon e gráficos de 1RM em Canvas 2D.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica rigorosa.
- **CSS3:** Variáveis nativas (`:root`), Flexbox, CSS Grid, `backdrop-filter` e animações leves.
- **JavaScript (Vanilla):** Lógica limpa e direta sem frameworks, com suporte a APIs nativas do navegador (Clipboard, Intl, IntersectionObserver, Canvas, Fetch API).
- **Tipografia:** Fontes *Outfit* e *JetBrains Mono* via Google Fonts.

---

## 📂 Estrutura do Projeto

```text
.
├── index.html         # Estrutura principal, estilos e scripts unificados
└── README.md          # Documentação do repositório
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Edge, Firefox, Safari)
- Servidor estático local simples (ex.: Live Server do VS Code, `npx serve` ou Python `http.server`)

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/Murilo-Rogerio/Portifolio.git
cd Portifolio
```

2. **Inicie um servidor estático local:**
```bash
# Com Python:
python -m http.server 8000

# Ou com Node.js:
npx serve .
```

3. **Acesse no navegador:**
Abra `http://localhost:8000` (ou a porta informada pelo seu servidor local).

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar a estrutura como inspiração para o seu próprio portfólio.
