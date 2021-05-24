Esse é um projeto para o conteúdo de `React Testing Library`.

### Antes de iniciar

Com o comando `git checkout -b`. Crie a branch onde vocês realizarão a solução para o exercício,
essa branch deverá ser chamada `digimon-T10B-group-NN` onde `NN` será o número do seu grupo. 

Rode o comando `npm install`.

### COMEÇANDO OS EXERCÍCIOS

Este repositório contém uma aplicação funcional, ela utiliza a [Digimon API](https://digimon-api.herokuapp.com/).

É uma aplicação simples que pesquisa digimons pelo nome, seu objetivo nesse exercício é utilizar todos os aprendizados sobre testes até o momento para realizar os exercícios e alcançar 100% de cobertura de testes.

Após a realização de cada exercício execute o comando `npm run test-coverage`, ele te retorna um relatório como o abaixo:

![Após mudança](images/relatorio.png)

A seta azul mostra o local que deve estar com o valor de 100, o que indica a finalização do exercício com todas as linhas do código testadas.

### INSTRUÇÕES SOBRE A COBERTURA DE TESTES

* Ao rodar o comando `npm run test-coverage`, será gerada uma nova pasta na raiz do seu projeto chamada `coverage`, após criada, abra o arquivo `./coverage/lcov-report/index.html` usando a extensão `Live Server` do seu VSCode.

![Resumo Coverage](images/coverage-resume.png)

* Veja os detalhes sobre o quê a cobertura de testes está avaliando, clicando no link do arquivo:

![Coverage Detail](images/coverage-detail.png)

* Utilize essa lista como referência para programar seus testes. Cubra todos as linhas destacadas para ter 100% de cobertura!

### Exercícios

#### Ao fim de cada teste, lembre de rodar o test-coverage, para verificar se o teste realmente foi finalizado!!

##### Os dados mockados da API estão presentes no arquivo `/__tests__/__mocks__/data.js`

1. Implemente o teste do componente `Digimon` no arquivo `Digimon.test.js`, para o teste você poderá utilizar os dados mockados da API.

2. Implemente o teste da aplicação no arquivo `App.test.js`, não crie o mock da API ainda, desenvolva esse teste inicialmente sem o mock.

3. Crie o mock da requisição a API realizada do componente `App` no teste anterior.

    * Utilize os dados da API mockados para criar o mock;

    * Atenção pois o arquivo `data.js`, possui um array com vários digimons, porém a requisição, retorna apenas 1;
    
    * Qualquer dúvida, consulte o conteúdo no [Course](https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/e05ca38f-9d9a-445d-98b3-8d600908411b/conteudos/ddf170e5-8655-4d19-a2fb-8bee09c7160e/mocking-modules/b910d42a-9cfb-4cc3-b5d2-a2474d745ce5?use_case=side_bar), sobre mock de módulos.

###### Bônus

4. Implemente uma nova funcionalidade que satisfaça os teste do arquivo `Req4.test.js`, vocês podem implementar o mock aqui também e se necessário melhorar o teste para alcançar os 100% de test-coverage.

**Divirta-se codando!** 🚀
