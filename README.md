# ZimutDesafio
Desafio para seleção de estágio Zimut

Pré Requesitos:
  - Ter node instalado em sua máquina
  - Utilizar PhpMyAdmin(foi usado o xampp durante o desenvolvimento)

Comandos usados durante a configuração do projeto:

  - npm init
  - npm install express express-fileupload body-parser mysql ejs req-flash --save
  - npm install nodemon -g

  - npm install uuid
  - npm install node-cpf --save

Passos para rodar o programa:

  - Clone o projeto no directorio de sua preferencia: git clone https://github.com/CiceroPereira/ZimutDesafio.git
  - No PhpMyAdmin crie um database com o nome zimut e crie a tabela referente à pessoa física com a estrutura abaixo:
      CREATE `pessoas` (
            `id_bin` binary(16) NOT NULL PRIMARY KEY,
            `name` varchar(200) NOT NULL,
            `datanasc` date NOT NULL,
            `cpf` varchar(14) NOT NULL,
            `cep` int(10) NOT NULL,
            `endereco` varchar(100) NOT NULL,
            `numero` int(9) NOT NULL,
            `bairro`varchar(100) NOT NULL,
            `cidade` varchar(100) NOT NULL,
            `estado` varchar(100) NOT NULL,
            `complemento` varchar(50) 
      ) ;
- Feito isto, na raiz do projeto execute o seguinte comando:
  - nodemon app.js
  - A seguinte mensagem deverá ser exibida:
    - [nodemon] 1.18.6
    - [nodemon] to restart at any time, enter `rs`
    - [nodemon] watching: *.*
    - [nodemon] starting `node app.js`
    - Server running on port: 5000
    - Connected to database

- Abra seu navegador em http://localhost:5000 para executar a aplicação :)

