# csv-reader-full-stack-app

## [Video de apresentação do Projeto (Clique Aqui)](https://youtube.com/watch?v=jbtfDtu18nc)
## Aplicação
Aplicação SPA, em React, Node com express, fullstack que utiliza um banco de dados MySQL para armazenar dados de produtos, esses dados são utilizados para gerar pacotes promocionais.

Todos os requerimentos do desafio cumpridos..

O app permite o usuário enviar um arquivo .csv que será validado de acordo com várias regras e regras de negócios, e caso tudo esteja de acordo habilita-se então a opção para atualizar o banco de dados com os preços dos produtos.

A aplicação é responsiva!

P.S Alguns arquivos .csv de exemplo estão disponíveis na pasta csv-exemplos

### Validações:

- [x] Os dados precisam estar preenchidos corretamente no arquivo .csv.
- [x] O código do produto alterado precisa existir no banco de dados.
- [x] O novo preço não pode ser inferior ao valor do preço de custo do produto a ser alterado.
- [x] O preço a ser alterado não pode ser 10% maior ou menor do que o valor anterior.

## Dependências
#### **Frontend**
##### Produção
* React
* Axios
* React-dropzone
* React-icons
* classnames

##### Desenvolvimento
* Sass
* eslint
* stylelint
  
#### **Backend**

##### Produção
* Express
* Express-async-errors
* Joi
* Multer
* Papaparse
* Sequelize
* cors
* dotenv

##### Desenvolvimento
* Typescript
* ts-node-dev
* sequelize-cli
* mysql2
* eslint

#### **Banco de dados**
* MySQL 8

## Instalação da aplicação

### Pré Requisitos:
* Node 16^
* npm 8.5.0^

### Rodando a aplicação em docker:
1. Abra o terminal e clone o repositório:

```
git clone git@github.com:ThiagoBarbosaDev/csv-reader-full-stack-app.git
```

2. Navegue até a raíz do projeto

3. rode o comando

```
docker-compose up
```

4. Espere todos os serviços ficarem de pé entre no `http://localhost:5173/`

### Rodando a aplicação localmente
<br>

1. Abra o terminal e clone o repositório:

```
git clone git@github.com:ThiagoBarbosaDev/csv-reader-full-stack-app.git
```

2. Vá para a raíz do frontend projeto:

```
cd csv-reader-full-stack-app/frontend
```


3. Instale as dependencias do frontend

```
npm install
```



5. Inicie o servidor frontend do projeto

```
npm start
```

6. Abra uma nova janela do terminal sem fechar a anterior, abra uma instância do MySQL 8, por padrão ele tentara utilizar a senha '123456' para conectar no banco na porta 3306, caso queira mudar este comportamento, remove o ".example" do arquivo ".env.example" e preencha a porta e o password da maneira que lhe for conveniente.

7. Atenção, por padrão a aplicação roda na porta 3001, no momento ela encontra-se hardcodeada dessa maneira, portanto não troque a porta em que o backend roda.


8. Entre na pasta raíz do backend do projeto

```
cd ../backend
```

9. Instale as dependência

```
npm install
```

10. Rode o script que irá criar a tabela e popular os dados
    
```
npm run db:reset
```
11. Rode o servidor backend da aplicação

```
npm run dev
```

12.  Abra seu navegador no http://localhost:3000/

## Contato
Qualquer dúvida, questionamento ou feedback entrar em contato por:
* email: thiagobarbosawebdev@gmail.com
* linkedin: https://www.linkedin.com/in/thiagobarbosawebdev/


