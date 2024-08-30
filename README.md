# Bem vindos ao repositório Shopper Challenge! 🚀

Neste projeto foi construído o back-end de um serviço de leitura de
imagens. Foi desenvovida uma API REST em Node.js com Type Script. São 3 três endpoints e uma integração com a API do Google Gemini.

Neste projeto, foram aplicados os princípios da arquitetura `MSC` e os princípios de `POO`.

Os endpoints são:

* POST /upload: Responsável por receber uma imagem em base 64, consultar o Gemini e retornar a
medida lida pela API
* PATCH /confirm: Responsável por confirmar ou corrigir o valor lido pelo LLM
* GET /customer code/list: Responsável por listar as medidas realizadas por um determinado cliente

<br/>

# Orientações

O primeiro passo é clonar o repositório:

  - `git clone git@github.com:linahsu/shopper_challenge.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd shopper_challenge`

<details>
<summary><strong>🐋 Executando no Docker</strong></summary><br />

> Execute comando `docker-compose up -d` na raíz do projeto.

- Isso irá subir a aplicação com todos os serviços e dependências necessários.

<br/>

> Use o comando `docker exec backend sh`

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

<br/>

> Execute o comando no terminal `npm run db:reset` interativo

- Isso irá criar a tabela `measures` no banco de dados e popular com 2 exemplos

<br/>

> Crie um arquivo .env com a variável de ambiente `GEMINI_API_KEY`com a sua chave de acesso

- Esta chave de acesso é utilizada para a integração com o Gemini

<br/>

</details>
