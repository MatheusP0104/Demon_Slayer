# ⚔️ Demon Slayer - Catálogo de Caçadores (Hashiras)

Este projeto é uma aplicação web desenvolvida em React que consome uma API pública de **Demon Slayer (Kimetsu no Yaiba)** para listar, filtrar e detalhar os personagens e caçadores da obra. 

O projeto foi reformulado a partir de uma base de Pokémon, ganhando uma identidade visual totalmente customizada em Modo Escuro (*Dark Mode*) com paleta de cores inspirada no haori de Tanjiro Kamado e elementos místicos.

---

## 👥 Integrantes do Projeto
* **Matheus Santos de Paula**
* **Eduardo Brandão**

**Disciplina:** Programação Frontend  
**Instituição:** UNIVAS (Universidade Vale do Sapucaí)

---

## 🌐 API Utilizada
* **API Escolhida:** Demon Slayer API (Manami Project)
* **Link para a Documentação:** [Demon Slayer API Documentation](https://github.com/manami-project/demon-slayer-api)
* **Endpoint de Dados:** `https://raw.githubusercontent.com/manami-project/demon-slayer-api/master/api/all.json`

---

## 🚀 Funcionalidades Implementadas

1. **Catálogo Completo (Lista Dinâmica):** Renderização automática de toda a lista de personagens vindos diretamente da API do GitHub.
2. **Sistema de Busca em Tempo Real:** Barra de pesquisa interativa na listagem que filtra os caçadores por nome à medida que o usuário digita.
3. **Página de Detalhes Dinâmica (`/hashiras/:id`):** Ao clicar em qualquer card, o usuário é direcionado para uma rota específica que exibe dados detalhados como **Raça**, **Idade** e a **História/Descrição** do personagem no anime.
4. **Tratamento de Erros e Contingências:** Mecanismo robusto na API que, caso a busca por ID direto falhe, executa um plano de filtragem local para garantir que a página nunca fique travada.
5. **Design Temático Customizado:** CSS totalmente autoral com efeitos de iluminação (*glow*), transformações tridimensionais nos cards e um favicon personalizado de Domínio Público.

---

## 🛠️ Instruções para Instalação e Execução Local

Siga os passos abaixo para clonar, instalar as dependências e rodar o projeto na sua máquina:

### 1. Clonar ou extrair o projeto
Certifique-se de que todos os arquivos (`src/`, `public/`, `package.json`, etc.) estão na sua pasta de trabalho.

### 2. Instalar as dependências do Node
Abra o terminal dentro da pasta raiz do projeto e execute o comando abaixo para instalar o React, React Router e demais ferramentas necessárias:
```bash
npm install