### Cadastro de Usuários com Node.js, Prisma e MongoDB

Este é um projeto fullstack desenvolvido com React.js, Node.js, Prisma e MongoDB. Ele fornece uma interface de usuários com duas páginas (Cadastro e Login) e uma API REST para criar, atualizar, listar e deletar usuários.

## Tecnologias Utilizadas

React.js: Biblioteca para construção do front-end da apliacação.

Node.js: Plataforma para construção de aplicações backend.

Express.js: Framework para criação de aplicações web e APIs.

Prisma: ORM para interação com o banco de dados.

MongoDB: Banco de dados NoSQL utilizado para armazenamento dos dados.

CORS: Middleware para lidar com solicitações de origens cruzadas.

## Funcionalidades

1. Criação de usuários:

Endpoint: POST /users

Campos requeridos: nome, email, idade.

2. Atualização de usuários:

Endpoint: PUT /users/:id

Campos requeridos: nome, email, idade.

3. Listagem de usuários:

Endpoint: GET /users

4. Suporta query params para filtrar por name, email ou age.

5. Deleção de usuários:

Endpoint: DELETE /users/:id.
