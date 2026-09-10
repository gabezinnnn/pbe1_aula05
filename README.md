# 📦 Sistema de Gerenciamento de Inventário

API REST simples desenvolvida para controle e gerenciamento de itens de inventário e patrimônio. O sistema permite cadastrar, consultar, atualizar e remover itens armazenados em formato JSON.

---

## 📄 Descrição do Projeto

Este projeto consiste em um servidor HTTP desenvolvido em Node.js e Express para gerenciar registros de inventário. Cada item possui identificador único (`id`), nome (`item`), local de alocação (`local`), data de registro (`dataRegistro`), valor estimado (`valor`) e código de patrimônio (`patrimonio`).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express.js**: Framework para construção de APIs e rotas HTTP.
- **JSON**: Formato para persistência e armazenamento dos dados (`inventario.json`).

---

## 📥 Instruções para Instalação e Execução

### Pré-requisitos
- **Node.js** e **npm** instalados na sua máquina.

### Passo a Passo

1. Execute o terminal na pasta raiz do projeto.
2. Instale as dependências executando:
   ```bash
   npm install express
   ```
3. Garanta que a estrutura de arquivos do projeto esteja organizada assim:
   ```text
   .
   ├── inventario.json
   └── server.js
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```
5. O servidor estará acessível na URL: `http://localhost:3000/inventario`

> **Observação:** O middleware configurado atualmente no código é `express.urlencoded({ extended: true })`. Ao realizar requisições `POST` ou `PUT` via Postman/Insomnia, envie o corpo no formato **x-www-form-urlencoded** (ou inclua `app.use(express.json())` caso prefira requisições em formato JSON).

---

## 🛣️ Lista das Rotas Disponíveis

Base URL: `http://localhost:3000`

| Método HTTP | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/inventario` | Retorna a lista completa com todos os itens do inventário. |
| `GET` | `/inventario/:id` | Busca e retorna um item específico com base no `id` informado. |
| `POST` | `/inventario` | Adiciona um novo item ao inventário. |
| `PUT` | `/inventario/:id` | Atualiza os campos de um item existente informado pelo `id`. |
| `DELETE` | `/inventario/:id` | Remove o item especificado do inventário pelo `id`. |

---

### 📝 Estrutura dos Dados (`inventario.json`)

```json
{
  "id": 1,
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-01",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}
```
