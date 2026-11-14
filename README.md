# Projeto Formulário — Cadastro de Funcionários

Aplicação web de estudo para cadastro de funcionários, integrando formulário no navegador, servidor Express e banco de dados MySQL.

## Objetivo

Desenvolver um fluxo de cadastro de ponta a ponta e compreender como os dados preenchidos em uma página web são enviados ao servidor e tratados antes de serem persistidos.

## Funcionalidades e componentes identificados

- Página de cadastro de funcionário.
- Estilização da interface com CSS.
- JavaScript para interação com o formulário.
- Servidor Node.js com Express.
- Controller responsável pelo fluxo de cadastro/autenticação.
- Rota específica para funcionários.
- Serviço de conexão com MySQL.
- Script SQL para estrutura do banco.

## Organização

```text
config/
└── database.js
controllers/
└── authControllers.js
database/
└── sistema_cadastro.sql
public/
├── cadastro-funcionario.html
├── css/style.css
└── js/cadastro-funcionario.js
routes/
└── funcionariosRoutes.js
server.js
```

## Tecnologias

- JavaScript
- Node.js
- Express
- MySQL / mysql2
- HTML5
- CSS3
- dotenv

## Como executar

Requisitos: Node.js, npm e MySQL.

```bash
npm install
```

Configure a conexão do banco no ambiente local, execute o script SQL e inicie a aplicação:

```bash
npm start
```

## Aprendizados

O projeto reforça a integração entre formulário, rotas, controllers e banco de dados. Também permite praticar a organização de uma aplicação Express em arquivos com responsabilidades distintas.

## Repositório

[github.com/Moisasb/Projeto_Formulario](https://github.com/Moisasb/Projeto_Formulario)
