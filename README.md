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

### Rodando a aplicação em docker:
Não disponível no momento, será disponibilizado no futuro

## Decisões de design
1. Os dados da tabela vieram não normatizados, onde produtos e packs que eram modelos diferentes habitavam a mesma tabela. Desta forma foi optado por utilizar uma tabela para products, outra para packs e uma tabela intermediária chamada pack_product. 

2. Os dados do preço dos pacotes (packs) neste exato momento são calculados baseados nos dados da tabela intermediária product_packs da coluna qty, e os preços dos produtos individualmente da tabela product. No futuro a intenção é também colocar o cost_price e o sales_price dos pacotes na tabela packs.

[Diagrama entidade-relacionamento do banco após a normatização](https://i.imgur.com/2VjX9TQ.png)

## Débitos técnicos e futuras features:

### Débitos
1. Durante o desenvolvimento foi utilizado express-async-erros, porém foi descoberto bem longe dentro do sprint que isso afetaria o jeito com que os dados eram devolvidos para o front dado que mesmo se houvesse um erro ainda precisariamos de enviar alguns dados de produtos. No futuro a aplicação será refatorada para tirar a lib e permitir uma padronização melhor dos erros e da maneira como os dados vão para o front.
2. Neste exato momento existem três tipos erros: de validação, de banco de dados e de lógica de negócios. No futuro os três terão o seu retorno padronizado.
3. Dado ao tempo algumas funções ficaram demasiadamente extensas, ferindo assim alguns princípios do SOLID. No futuro será refatorado para melhor adequar o projeto com o SOLID e OOP em geral.
4. Tive alguns problemas com a codebase em typescript durante o desenvolvimento, e dado o tempo achei melhor continuar o desenvolvimento do front em javascript e deixando o compromisso de migrar o front para typescript no futuro

### Futuras features:
1. Criar um combobox para poder escolher se a pessoa gostaria de alterar o preço do produto ou o do pacote.
2. Criação de uma tabela para melhor vizualizar os erros de validação do .csv
3. No futuro com a disponibilização de preços na tabela de packs será implementado mudanças no banco de maneira transacionais a fim de melhor respeitar os principios ACID
4. Dockerização do projeto

## Contato
Qualquer dúvida, questionamento ou feedback entrar em contato por:
* email: thiagobarbosawebdev@gmail.com
* telefone/whatsapp: (061) 98100-7636
* linkedin: https://www.linkedin.com/in/thiagobarbosawebdev/


