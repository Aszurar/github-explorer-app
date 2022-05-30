# Github Explorer(app) | Ignite

 O projeto **Github Explorer(app)** é um aplicativo que consome a API do GitHub e exibe informações de qualquer repositório público a partir da busca pelo usuario/nome-do-repositorio, exemplo: facebook/react e usa animações suaves e didáticas com React Native Reanimated para melhorar a experiência do usuário. Além disso, podemos navegar entre as issues de cada repositórios e acessá-las apertando no card da issue que será aberto o navedor com a url da issue.


<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#art-design">Design</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" >
    <img src="https://i.imgur.com/K2adVaS.gif" width="250">
</div>

****
- [**Link do vídeo completo sobre o projeto**]()
___

## :information_source: Sobre

- O github é uma plataforma de repositórios remotos, podemos subir nossos projetos, nossas branchs, detalhar nossos projetos, criar uma descrição e facilitar o trabalho em equipe de determinados projetos e/ou divulgar nossos projetos para outros desenvolvedores.
- Assim, o GitHub Explorer simplesmente é um app que conseguimos pesquisar sobre repositórios públicos e ver alguns detalhes deles como favoritos, forks, issues, descrições e acessar as issues desses repositórios.
- É o penultimo projeto da trilha de React Native do bootcamp Ignite.
- Para a alimentação dos dados foi usado o GithubAPI, API do Github que disponibiliza informações sobre repositórios públicos e também é usada para o ensinamento de API REST, livre para usar e popular, segue o link:
  - GithubAPI: https://docs.github.com/pt/rest
  - Vale ressaltar que essa API possui limitações para a quantidade de requisições que pode receber por hora de um mesmo usuário, no caso seriam 60/hora.
- Para criação das interfaces foi usado React Native em conjunto com TypeScript e diversas bibliotecas disponíveis para React Native como:
  - React Navigation: https://reactnavigation.org/
  - Styled Components: https://www.styled-components.com/
  - Além disso foi usado o EXPO para melhor produtividade: https://docs.expo.dev/
- dentre outras, abaixo, na sessão de   <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a> estará mais detalhado.

* **Home**:

<div align="center" >
  <img src="https://i.imgur.com/ACaog7Z.png" width="250">____<img src="" width=250>____<img src="https://i.imgur.com/tMrckt4.png" width="250">
</div>

___

## :interrobang: Motivo

Com esse projeto **foi posto em prática os conceitos aprendidos sobre animações no React-Native, uso do React-Native-Reanimated, passando dados via navegação e houve o primeiro contato com o componente de Linking do React-Native que realiza navegações seja para url de sites comuns abrindo navegador, navegando para outros apps ou até mesmo para deep links**.

1. **Home**
<img src="" width="1000">
- Funcionalidades:
  
  - Listagem dos repositórios pesquisados.
    - Perfomática, por meio da Flatlist.

  - Pesquisa de qualquer repositório público.
    - É feita pelo nome do usuário em conjunto com o respositóio(_Exemplo: facebook/react facebook/react-native_).
    - Todos Pokémon que contém o nome digitado serão mostrados como resultados garantindo assim mesmo que o usuário não lembre totalmente do nome do Pokémon, consiga encontrá-lo.
      - Exemplo: Pesquisar com a palavra **Regi**, o resultado será **Regigigas, Regice, Regirock, Regidragon, Registeel e Regieleki.**

  - Animação de deslizamento(Swipeable) em horizontal para esquerda de cada card de repositórios da tela Home provocando assim a ação de remoção daquele repositório.
    - É perguntando ao usuário com um Alert se ele realmente deseja exluir aquele reposiório que ele provocou o deslizamento/swipeable
      - Usuário pode cancelar a ação de remoção ou confirmar.


* **Página de detalhes sobre o Repositórion**:
<div align="center" >
  <img src="https://i.imgur.com/Dg2ggCz.png" width="250">____<img src="" width=250>
</div>

1. **Página sobre o Pokémon**
<img src="" width="1000">

 - Funcionalidades:

  - Exibição do nome completo do repositório animado e parte da descrição do mesmo
   
  - Número total de Stars/Favorites daquele repositório.
   
  - Número total de Forks daquele repositório.
   
  - Número total de Issues abertas daquele repositório.


  - Listagem de todas issues daquele repositório de forma otimizada.
    
  - Navegação para cada repositório no Github por meio do navegador padrão do celular
    - É usado o Linking do React-Native para isso

* **Navegando para o Github web e app**
<div align="center" >
  <img src="https://i.imgur.com/FGl88GH.png" width="250">____<img src="https://i.imgur.com/9Y1XkCB.png" width="250">
</div>

___
## :art: Design

[<h2 align="center">GitHub Explorer App</h2>]()
<div align="center">
<img src="" width="1000">
<img src="" width="1000">
<img src="" width="100">
</div>

1. Código:
     - É tentando **manter o padrão que é ensinado na Rocketseat** para o código mais limpo, organizado de facil entendimento com sua estrutura de pastas também.
     - Em geral foi todo código foi **feito com TypeScript** de forma a manter **sempre uma tipagem/interface** para cada elemento que foi usado tanto para **facilitar o desenvolvimento e entendimento do código tanto para o dev quanto para o VsCode/IDE**, quanto para **manter a consistência do código e a IDE possa sugerir correções e recomendações de forma mais efetiva**.
2. Estilização:
     - Toda estilização foi realizada com **styled-components**, que é uma biblioteca de css que tem como objetivo facilitar a criação de estilos e componentes de forma mais eficiente e similar a web com ReactJS, assim podemos **manter o mesmo padrão para web e mobile facilitando o desenvolvimento.**
     - Foi criado um **tema global** com as **fontes e cores** do projeto que são passadas no Figma.
     - A fonte usada foi a **Roboto**, que é uma fonte popular e livre para uso, está na biblioteca do Google Fonts. Foi instalada no projeto como fonte externa tanto para o **android quanto para o IOS**.
     - Para lidar com SVG, JSON, PNG foi necessário realizar uma configuração para que o TypeScript reconheça tais arquivos.
3. React Native
     - A estrutura dos componentes foi feita por meio de funções, que são **funções que retornam um componente React.**
     - A pasta de um componente é composta por um arquivo chamado **index.tsx** e um arquivo de estilização **styles.ts**.
     - Foi usado o yarn como gerenciador de pacotes.
     - É utilizado a **react-native-gesture-handler** para criar os botões da aplicação mantendo assim a consistência do dos efeitos de reação do componente entre as platformas IOS e Android, além disso, também é usado presseables e outros tipos de botões  para realização das animações evitando conflitos com os botões do gesture handler
4. Expo
     - É usado o EXPO para garantir uma melhor produtividade e configuração das libs para seus usos e inicialização do app. 
___
## :seedling: Requisitos Mínimos

- Android Studio
- Celular(Opcional)
- Expo
- Node.js
- React
- React-Native
- TypeScript
- Yarn(ou NPM)

___

## :rocket: Principais Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias
- [Android Studio](https://developer.android.com/studio)
- [Axios](https://www.npmjs.com/package/axios)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
   - [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
- [Expo Vector Icons](https://www.npmjs.com/package/react-native-feather)
  - [Feather Icons](https://feathericons.com/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
  - [RectButton](https://docs.swmansion.com/react-native-gesture-handler/docs/next/api/components/buttons/#rectbutton)
- [React Native Iphone X Helper](https://github.com/ptelad/react-native-iphone-x-helper#readme)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Responsive Fontsize](https://www.npmjs.com/package/react-native-responsive-fontsize)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)
- [Styled Components](https://www.styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
___
## :package: Como baixar e executar o projeto

  - Clonar o projeto:
    ```bash
     git clone https://github.com/Aszurar/github-explorer-app.git
    ```
  - É necessário a instalação do **yarn** de acordo com seu sistema operacional, para isso veja como no site do [Yarn](https://github.com/Aszurar/SavePass.git)
  - Instalação das dependências:
    - Execute o comando abaixo dentro da pasta do projeto
    ```bash
      yarn
    ```
 - É necessário a instalação do emulador [Android Studios](https://developer.android.com/studio) e das tecnologias requesitadas acima no:seedling:   <a href="#seedling-requisitos-mínimos">**Requisitos**</a>
 - Também é necessário a instalação/configuração de outras tecnologias, para isso siga os passos indicados nessa página de acordo com seu sistema operacional: [Executando uma Aplicação React-Native emulando Windows/Linux/MacOS ou direto no dispositivo mobile Android/IOS](https://react-native.rocketseat.dev/android/linux)
 Execução - Abra a pasta do projeto com alguma IDE(Vscode) ou simplesmente abra o terminal na pasta do projeto e execute o comando abaixo:
```bash
   expo start
```
Abra o emulador ou conecte o celular(É necessário a instalação do Expo Go) e execute:
```bash
    a
```
Lembrando que, caso seja executado pelo emulador, o ideal é sempre deixa-lo aberto antes de aplicar os comandos acima.


___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.
