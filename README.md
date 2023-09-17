# Store

# Projeto de Exemplo com Angular e Netlify

Este é um projeto de exemplo que demonstra as seguintes implementações:

- Integração com a API RAWG 🎮
- Utilização dos módulos HttpClientModule e FormsModule do Angular 📡
- Criação de um campo de busca e um botão para buscar jogos por nome 🔍
- Redirecionamento para a página de um jogo na Steam ao clicar no jogo 🚀
- Deploy automatizado no [Netlify](https://storeplay.netlify.app) 🌐

## Integração com a API RAWG

Neste projeto, realizamos a integração com a API RAWG para obter informações sobre jogos, como título, descrição, classificação e muito mais. Utilizamos a biblioteca HttpClient do Angular para fazer requisições HTTP para a API e exibir os dados em nosso site.

## Utilização dos Módulos HttpClientModule e FormsModule

Utilizamos os módulos HttpClientModule e FormsModule do Angular para facilitar o processo de busca por jogos. O HttpClientModule permite fazer requisições HTTP para a API RAWG, enquanto o FormsModule é usado para criar um campo de busca interativo.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule
  ],
  // ...
})
export class AppModule { }

