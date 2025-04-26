# Portfólio + Blog Técnico — Fullstack

Aplicação fullstack construída com **NestJS (Backend)** e **Next.js (Frontend)**, com gerenciamento de projetos, posts de blog, área administrativa (intranet) protegida por login e formulário de contato.

---

## 🚀 Tecnologias Utilizadas

### Backend (NestJS)

- Node.js
- NestJS
- TypeORM (MySQL)
- JWT + Passport (Autenticação)
- class-validator (validação de dados)
- bcrypt (hash de senha)
- Axios (integração GitHub)
- Jest (testes unitários)

### Frontend (Next.js)

- React (Next.js)
- TailwindCSS
- React Icons
- API Routes
- Autenticação via token JWT

---

## 📚 Funcionalidades

- [x] Página de exibição de projetos
- [x] Página de blog técnico (posts)
- [x] Página de detalhes do post + comentários
- [x] Área administrativa (Intranet):
  - Login com email e senha
  - CRUD de Projetos (Adicionar, Editar, Deletar)
  - CRUD de Posts do Blog (Adicionar, Editar, Deletar)
- [x] Formulário de contato
- [x] Integração com GitHub para exibir repositórios (opcional)
- [x] Proteção de rotas administrativas usando token

---

## ⚙️ Requisitos

- Node.js >= 16
- MySQL >= 8

---

## 🛠️ Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone git@github.com:igorcunhaf/portifolio.git
cd portifolio
```

---

### 2. Configurar o Backend

```bash
cd backend
npm install
```

- Renomeie o arquivo `.env.example` para `.env`
- Configure as variáveis de ambiente:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=sua_senha
JWT_SECRET=sua_chave_secreta
```

- Execute o script SQL para criar as tabelas:

```bash
mysql -u root -p portfolio < script.sql
```

**(ou crie manualmente baseado na estrutura fornecida)**

- Inicie o backend:

```bash
npm run start:dev
```

Backend ficará disponível em `http://localhost:3000`.

---

### 3. Configurar o Frontend

```bash
cd frontend
npm install
```

- Crie um arquivo `.env.local` e adicione:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

- Inicie o frontend:

```bash
npm run dev
```

Frontend ficará disponível em `http://localhost:3001`.

---

## 📽️ Fluxo de Acesso

| Página         | Acesso         |
| -------------- | -------------- |
| `/`            | Página inicial pública |
| `/projetos`    | Listagem de projetos |
| `/blog`        | Listagem de posts do blog |
| `/contato`     | Formulário de contato |
| `/login`       | Login para intranet |
| `/intranet`    | Área administrativa protegida (CRUD de projetos e posts) |

---

## ✅ Comandos Úteis

### Rodar Testes Backend

```bash
npm run test
npm run test:cov
```

---

## 📦 API Endpoints principais (Backend)

- `POST /auth/login` — Login de usuários
- `POST /users` — Cadastro de usuário
- `GET/POST/PATCH/DELETE /posts` — Gerenciamento de posts (blog)
- `GET/POST/PATCH/DELETE /projects` — Gerenciamento de projetos
- `POST /contact` — Enviar mensagem de contato
- `POST/GET /posts/:postId/comments` — Comentários em posts
- `GET /github/repos/:username` — Buscar repositórios do GitHub

---

## 🧰 Observação

> Para funcionamento correto, **o login exige que a senha do usuário esteja armazenada como hash bcrypt** no banco de dados.

---

## 📜 Licença

Projeto pessoal para estudo e demonstração. Todos os direitos reservados a **Igor Ferreira**.
