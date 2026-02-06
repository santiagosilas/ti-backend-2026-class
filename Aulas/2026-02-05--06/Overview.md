☑️ Executar o script JS main.js em src/

````shell
node src/main.js
```

☑️ Configurar o package.json para execução de script:

```javascript
"scripts": {
"dev": "node src/main.js"
},

````

```shell
npm run dev
```

☑️ Declaração e inicialização de Variáveis

```javascript
// Declaração de variáveis
const nome = "José da Silva";
const idade = 42;
const altura = 1.83;
const matriculado = false;
```

```javascript
let contador = 0;
contador = contador + 1;
```

☑️ String literals

```javascript
const repr = `N:${nome} I:${idade} A:${altura}`;
console.log(repr);
```

☑️ Objetos em JS

```javascript
const pessoa = {
  nome: "Lopes Silva",
  idade: 35,
};

const produto = {
  id: 42,
  nome: "Teclado",
  marca: "Multilaser",
  fabricante: "Multilaser LTDA",
  disponibilidade: true,
  quantidadeEstoque: 5,
  valor: 125.45,
  caracteristicas: {
    tipo: "mecânico",
    layout: "ABNT2",
  },
};

console.log(`Nome: ${produto.nome}`);
console.log(`Tipo: ${produto.caracteristicas.tipo}`);
```

☑️ Arrays

```js
let ListaVazia = [];
let SistemasOperacionais = ["Windows", "Linux", "OS X"];
let lstPessoa = ["Fulano", "de Tal", 37, 1.72, 85.2, "(85) 9 9234-5432"];

const listaCompras = [
  "Arroz",
  {nome: "Feijão", quantidade: 2, unidade: "kg"},
  {id: 3, nome: "Macarrão", quantidade: 1},
];

const listaProdutos = [
  {id: 3, nome: "Teclado", valor: 125.45},
  {id: 5, nome: "Mouse", valor: 25.45},
  {id: 7, nome: "GPU Nvidia RTX", valor: 2125.45},
  {id: 8, nome: "Monitor", valor: 225.45},
  {id: 9, nome: "Gabinete", valor: 525.45},
];
```

☑️ Loops

```js
for (let i = 0; i < listaProdutos.length; i++) {
  const nome = listaProdutos[i].nome;
  const valor = listaProdutos[i].valor;
  console.log(`${nome.toUpperCase()} ${valor}`);
}

for (const produto of listaProdutos) {
  const nome = produto.nome;
  const valor = produto.valor;
  console.log(`${nome.toUpperCase()} ${valor}`);
}

dados.forEach((item) => {
  console.log(`${item.matricula}:${item.nome}`);
});
```

☑️ Funções

```js
function printf(mensagem) {
  const msg = mensagem.toUpperCase();
  console.log(`[LOG] ${msg}`);
  console.log("[LOG] Fim da mensagem");
}

function fabricarProduto(id, nome, valor) {
  const produto = {
    id: id,
    nome: nome,
    preco: valor,
  };
  return produto;
}

function fazerBolo(sabor, tipo) {
  const novoBolo = {
    sabor: sabor,
    tipo: tipo,
  };
  return novoBolo;
}

const bolo1 = fazerBolo("Nata/Goiaba", "Fofo");
const bolo2 = fazerBolo("Chocolate", "Fofo");
const bolo3 = fazerBolo("Limão", "Fofo");
console.log(bolo1.tipo);
console.log(bolo1.sabor);
console.log(bolo2.tipo);
console.log(bolo2.sabor);
console.log(bolo3.tipo);
console.log(bolo3.sabor);

export function printf(message) {
  console.log(`INFO ${message.toUpperCase()}`);
}
export const printl = (message) => {
  console.log(`LOG ${message.toUpperCase()}`);
};
export const calcularImc = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc;
};
```

☑️ Exportando e Importando Módulos

```js
import {adicionar, listar} from "./listas.js";
adicionar({matricula: 1, nome: "Ana"});
listar();
```

```js
export function adicionar(registro) {
  . . .
}
// listar

export function listar() {
  . . .
}
```

🔳 Métodos de Lista

```js
// Métodos de Lista

// Insere novo item ao fim da lista (via método push)
lstPessoa.push(true);

// Remove o último item da lista (via método pop)
let lstNumbers = [0, 100, 200, 300, 400, 500];
let itensRemovidos = lstNumbers.splice(2, 1); // Remover o elemento de índice 2 (1 item será removido)

// busca o índice de um item na lista (via método indexOf)
let locais = ["Brasil", "Fortaleza", "Aracati"];
console.log(locais.indexOf("Brasil")); // 1
console.log(locais.indexOf("Rio de Janeiro")); // -1
```

🔳 Desestruturação de Objetos

```js
// Destructuring in Objects
const {firstName, age} = user;

console.log(firstName);
console.log(age);
```

🔳 Desestruturação em Funções

```js
// Destructuring in Functions

function obterInfo({nome, sobrenome, idade}) {
  console.log(nome + " " + sobrenome + "," + idade);
}
```

🔳 Desestruturação em Arrays

```js
// Destructuring in Arrays

const niveis = ["Fundamental", "Médio", "Superior"];

const [nivel1, nivel2, nivel3] = niveis;

console.log(nivel1, nivel2, nivel3);
```

🔳 Filtragem via Filter

```js
// Filter

const users = [
  {id: 1, name: "José", cpf: "123-456-78", position: "Front-end"},
  {id: 2, name: "João", cpf: "123-456-78", position: "Front-end"},
  {id: 3, name: "Matheus", cpf: "123-456-78", position: "Front-end"},
  {id: 4, name: "Thiago", cpf: "123-456-78", position: "Back-end"},
  {id: 5, name: "Joaquim", cpf: "123-456-78", position: "Back-end"},
];

console.log(users.filter((u) => u.position == "Front-end"));

console.log(users.filter((u) => u.id == 3));

console.log(users.filter((u) => u.id != 3));
```

```js
// Async Await surge para simplificar o trabalho com promisses
// O código fica mais legível e estruturado

// async function enviarPedido(...) → permite usar await dentro da função.

// await fazerPedidoPizza(...) → espera a Promise resolver ou rejeitar, sem precisar de .then.

// try { ... } catch { ... } finally { ... } → substitui .then, .catch e .finally,
// deixando o fluxo mais parecido com código “síncrono”.

async function enviarPedido(pedido, sabor) {
  try {
    const mensagem = await fazerPedidoPizza({pedido, sabor});
    console.log(mensagem, "Sucesso!");
  } catch (erro) {
    console.log(erro, "Falha!");
  } finally {
    console.log(`[${pedido}] Pedido Encerrado!`);
  }
}

enviarPedido(1, "frango");
enviarPedido(2, "frango");
enviarPedido(3, "chocolate");
enviarPedido(4, "chocolate");
```
