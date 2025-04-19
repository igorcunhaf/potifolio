# Portfolio + Blog Tecnico (Backend)

## Descricao
API construída em NestJS + MySQL para:
- Autenticacao JWT (admin)
- CRUD de posts (blog)
- CRUD de projetos (portfolio)
- Formulario de contato
- Comentarios em posts
- Integracao com GitHub

## Tecnologias
- Node.js, NestJS, TypeORM
- MySQL
- JWT (Passport)
- class-validator
- Axios (GitHub)
- Jest (testes)

## Pre-requisitos
- Node.js >= 16
- MySQL

## Instalação
```bash
git clone git@github.com:SEU_USUARIO/SEU_REPO.git
cd SEU_REPO
npm install
```

## Configuração
1. Renomeie `.env.example` para `.env` e ajuste:
   ```
   PORT=3000
   DB_HOST=
   DB_PORT=
   DB_DATABASE=
   DB_USERNAME=
   DB_PASSWORD=
   JWT_SECRET=
   ```
2. Execute os scripts SQL (veja **Script SQL** no PDF gerado).

## Executar em desenvolvimento
```bash
npm run start:dev
```

## API Endpoints
- `POST /auth/login`
- `POST /users`
- `POST /posts` (JWT)
- `GET /posts`
- `GET /posts/:id`
- `GET /posts/slug/:slug`
- `PATCH /posts/:id` (JWT)
- `DELETE /posts/:id` (JWT)
- `POST /projects` (JWT)
- `GET /projects`
- `GET /projects/:id`
- `PATCH /projects/:id` (JWT)
- `DELETE /projects/:id` (JWT)
- `POST /contact`
- `POST /posts/:postId/comments`
- `GET /posts/:postId/comments`
- `GET /github/repos/:username`

## Testes
```bash
npm run test
npm run test:cov
```
