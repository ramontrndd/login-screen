# <p align="center">  Projeto Tela de Login 🚀
<hr>
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular Logo" width="150px">
</div>
<hr>

### Link do projeto 
https://ramontrndd.github.io/login-screen
<hr>

### Link do backend
https://github.com/ramontrndd/login-backend

## Descrição

Este projeto é uma aplicação frontend desenvolvida em Angular 17 que consome as APIs de um backend desenvolvido em Node.js com Express. O backend utiliza bcryptjs para criptografia de senhas e cookie-parser para manipulação de cookies. A aplicação Angular permite aos usuários realizar cadastro, recuperação de senha e login de forma segura, além de oferecer um dashboard onde usuários aprovados podem aprovar outros usuários.

## Bibliotecas Utilizadas.

- jwt-decode
- Angular Material Design System
- animate.css
- ngx-cookie-service
- ngx-ui-loader

## Funcionalidades Principais

- Consumo de APIs RESTful para registro, login e recuperação de senha.
- Interface de usuário utilizando Angular Material e animações com animate.css.
- Gerenciamento de cookies com ngx-cookie-service.
- Integração com loader de UI usando ngx-ui-loader para melhorar a experiência do usuário durante as requisições.
- Interceptor de rotas para manipulação de tokens JWT e segurança.
- Route guard para proteger rotas e prevenir acesso não autorizado.
- Service de autenticação para centralizar lógica de login e controle de sessões.

## Instalação e Execução

1. Clone o repositório: `git clone https://github.com/ramontrndd/login-screen.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `ng serve`
4. Caso queira testar localmente, faça a instalação do backend `https://github.com/ramontrndd/login-backend`

## Autor

Ramon Trindade <ramonbraintrindade@gmail.com>

<hr>



