# 🖥️ Sobre o projeto


<p>API Rest para uma aplicação de Todo</p>
<br>

# ⚙️ Funcionalidades

- Através dos endpoints é possivel:
  - Registrar, Excluir, Atualizar um Todo
  - Listar Todos
  
<br>

# 💡 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org)

<br>

# 🚀 Como executar o projeto
## Pré-requisitos
  - [Git](https://git-scm.com/downloads) ( Para clonar o repositório )
  - [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/getting-started/install) ( Para rodar os scripts de execução do projeto e instalação dos pacotes)
  - [VSCode](https://code.visualstudio.com/) ( Opcional - editor de código para você trabalhar com o código )
  - [Docker](https://www.docker.com/products/docker-desktop) (Orquestrador de containers, na aplicação é utilizado para subir um banco de dados sem precisas de muitas configurações)
<br>

## Agora execute os seguintes comandos:

```bash
#Clone este repositorio
$ git clone https://github.com/lucasgoncalvesbt/agendalaranja-api.git

#Ao finalizar o processo de clone entre na pasta da aplicação
$ cd nodeestagiolucasgoncalves

#Instale as dependências
$ npm install
ou
$ yarn install

# Para subir o banco de dados com o docker utilize o seguinte comando (Essa etapa é opcional, caso deseje utilizar um sgbd local de sua máquina basta alterar as configurações no arquivo ormconfig.json na raíz do projeto) 
$ docker-compose up

#Para criar as tabelas no banco de dados execute os comandos abaixo (Obs.: É necessário que a conexão com o banco de dados esteja ok, recomendo utilizar o docker-compose que mencionei antes)
$ npm run typeorm migration:run
ou
$ yarn typeorm migration:run

#Execute a aplicação
$ npm run dev
ou
$ yarn dev

```

### O servidor está configurado para iniciar na porta 3333, caso a porta já esteja em uso basta alterar a porta no arquivo src/server.ts