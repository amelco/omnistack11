# Semana omnistack 11 

Feito para desenvolvimento em sistemas **\*nix** (macOS e Linux).  
Em sistemas windows, alguns comandos podem ser diferentes.

**OBS**: o caractere `$` indica que o comando deve ser digitado em um **emulador de terminal**, a famosa *tela preta*.

# Dia 1


## Iniciando aplicação Node.js

Crie um diretório para guardar os  diretórios `backend` e o `frontend`, tipo:
```bash
$ mkdir semana-omnistack-11
$ cd semana-omnistack-11
$ mkdir backend
```

## Criando o backend

Entre no diretório `backend``
```bash
$ cd backend
```

Criar o arquivo `package.json`

```bash
$ npm init -y
```

Instalando o micro-framework `express` para:
- configurar rotas
- interpretar parâmertros

```bash
$ npm install express
```
### Escrevendo um *Hello World* no Node.JS
O arquivo `index.js` será o arquivo principal da aplicação. Crie-o com o comando:
```bash
$ touch index.js
```

- Importando as funcionalidades do `express`:
```javascript
const express = require('express');
```

- cria variável para armazenar a aplicação:
```javascript
const app = express();
```

- configurar a aplicação para ouvir a porta `3333`. Assim o acesso será `localhost:3333`
```javascript
app.listen(3333); 
```

- Executar aplicação
```
$ node index.js
```
Acessando o endereço `localhost:3333` no browser, teremos o erro `cannot GET /` porque nenhuma rota foi definida.

Código até agora:

- **index.js**
```javascript
const express = require('express');
const app = express();
app.listen(3333);
```

### Definindo rotas

- Rota raiz
```javascript
const app = express();

app.get('/', (request, response) => {
    return response.send("Olá, mundo!");
});
```

O método `get()` sempre recebe dois parâmetros: o primeiro é a rota, no caso `/`, e o segundo é a função que será chamada quando a rota for demandada pelo browser, ou seja, a *callback function*.

Nossa callback function também espera 2 parâmetros: a *requisição* e a *resposta*, que chameremos de *request* e *response*,  respectivamente.

**OBS**.: Aqui utilizamos o conceito de *arrow function* na criação da *callback function*.

Como vamos criar um backend **REST**, iremos retornar um objeto `JSON` ao invés de texto. Portanto, nosso `Olá Mundo` pode ficar assim:

```javascript
const app = express();

app.get('/', (request, response) => {
    return response.json({
        texto: "Olá, mundo!",
        evento: "Semana Omnistack 11.0",
        aluno: "Andre Herman"
    });
});
```

Atualizando o navegador você irá ver a alteração.

#### Reinicando o Node.js
Sempre que o código do index.js for alterado, o node precisa ser reinicado.
Para fazer isso, execute vá ao terminal onde o node está sendo executado e digite a combinação das teclas `ctrl` e `c`. Isso irá partar o node. Após isso, redigite:

```
$ node index.js
```

para reexecutar o node com o arquivo `index.js` atualizado.

```
OBS.: mais à frente, iremos fazer com que o node reinicialize automaticamente sempre que um arquivo for modificado
```

## Iniciando frontend REACT

Caso você esteja no diretório `backend` saia dele com o comando 
```
$ cd ..
```

**DICA**: o comando `pwd` diz em qual diretório você se encontra.

### Criando o *boilerplate* da aplicação React

O termo *boilerplate* se refere a estrutura básica de toda aplicação React.

```bash
npx create-react-app frontend
```

Após o processo de instalação (download das dependencias exigidas pelo react, estruturação das pastas e criação de arquivos) podemos entrar no diretório do frontend

```
cd frontend
```

Para iniciar a aplicação, digite
```
npm start
```
e acesse p endereço `localhost:3000` através de seu navgador (caso o a aplicação já não tenha feito isso automaticamente).

O comando `npm start` é um script que está definido dentro do arquivo `package.json`, que faz parte do *boilerplate* do `create-react-app`.

O que está exibido no navegador é o resultado do que está escrito no arquivo `src/App.js`.

### Modificando conteúdo

Podemos modificar o arquivo `src/App.js` para vermos as alterações na tela do navegador.

Modifique a linha

```html
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
```

para

```html
<p>
  Olá Mundo!
</p>
```

Você verá as alterações imediatamente após salvar o arquivo modificado.