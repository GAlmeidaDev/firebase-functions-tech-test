# Projeto Firebase Functions (Tech test)

Este projeto utiliza o Firebase Functions juntamente com o Firestore Store para criar e gerenciar registros em uma coleção específica.
Utilizando arquitetura hexagonal para facilitar na implementação de testes e para desacoplar as camadas do sistema, reduzindo dependências entre si, além de ficar mais bem organizado futuramente dando melhor escalabilidade do projeto 

# Configuração

    Instalação das Dependências

    Antes de começar, certifique-se de ter o Node.js v20 > e o Firebase CLI instalados em seu ambiente de desenvolvimento. 
    Em seguida, instale as dependências do projeto:

    npm install
        
    ||
    
    yarn

# Configuração do Firebase

Se você ainda não configurou o Firebase no projeto, use o comando abaixo para inicializar o projeto Firebase na pasta functions:

    firebase init functions

    Siga as instruções para configurar o Firebase Functions e Firestore conforme necessário.

    Configuração do Firestore

    Certifique-se de configurar as regras de segurança (firestore.rules) e os índices (firestore.indexes.json) do Firestore conforme as necessidades do seu projeto.

# Execução Local

Para testar suas funções Firebase localmente, use o emulador Firebase. Certifique-se de iniciar o emulador com o seguinte comando:

firebase emulators:start

Isso iniciará o emulador Firebase localmente, onde você pode testar suas funções HTTP e gatilhos do Firestore em um ambiente controlado.


Endpoint HTTP para criar um novo registro na coleção records do Firestore.

    Método: POST

    URL: http://127.0.0.1:5001/wide-dryad-300221/us-central1/api/records

    Corpo da Requisição:

    json

    {
      "name": "Novo Registro"
    }

# Testes 

Para testar é necessário rodar o projeto antes 

    npm run serve
    
        ||

    yarn serve


e depois que estiver rodando 

    npm run test:service

    npm run test:httpServer

    npm run test:index
        
# Deploy

Para implantar suas funções Firebase em produção, use o comando:

firebase deploy --only functions
