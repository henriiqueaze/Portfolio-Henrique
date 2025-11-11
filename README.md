# Portfólio — Henrique Azevedo

Este repositório contém meu portfólio profissional, uma página construída com React e Vite para apresentar projetos, conhecimentos e informações de contato.

## Layout do Projeto

<img src="public/layout.png"></img>

## Tecnologias

- HTML
- CSS
- React
- Vite
- react-icons

## Estrutura do projeto (resumo)

Arquivos e pastas mais relevantes:

- `index.html` – arquivo HTML base
- `src/` – código fonte React
  - `src/main.jsx` – bootstrap da app
  - `src/App.jsx` – layout principal (Header, seções e Footer)
  - `src/components/` – componentes reutilizáveis
    - `Home/` — seção inicial (foto, saudação)
    - `About/` — sobre e link para currículo (`docs/Henrique Azevedo Dutra.pdf`)
    - `Projects/` — cards de projetos (cada card contém link para o repositório)
    - `Knowledge/` — grid de skills e modal descritivo
    - `Contact/` — informações de contato (e-mail, LinkedIn, GitHub)
    - `ThemeToggle/` — botão que alterna tema claro/escuro (usa localStorage)
- `assets/` – imagens, ícones e estilos
- `docs/` – inclui o currículo em PDF

## Recursos e comportamento notáveis

- Alternância de tema (light/dark) persistida em localStorage.
- Menu responsivo com comportamento mobile (hamburger).
- Modal na seção de conhecimentos para descrever cada skill.
- Projetos com imagens e link direto para seus repositórios no GitHub.

## Contato

- Email: henriquee.aze.dev@gmail.com
- LinkedIn: https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/
- GitHub: https://github.com/henriiqueaze

---