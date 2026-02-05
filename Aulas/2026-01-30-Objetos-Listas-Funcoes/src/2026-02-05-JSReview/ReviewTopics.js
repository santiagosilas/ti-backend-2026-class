// Loops (outra forma)

cities.forEach((cidade, index) => {
  console.log(index, cidade.cidade);
});

// Listas e Métodos de Array

let ListaVazia = [];
let SistemasOperacionais = ["Windows", "Linux", "OS X"];
let lstPessoa = ["Fulano", "de Tal", 37, 1.72, 85.2, "(85) 9 9234-5432"];

// Insere novo item ao fim da lista (via método push)
lstPessoa.push(true);

// Remove o último item da lista (via método pop)
let lstNumbers = [0, 100, 200, 300, 400, 500];
let itensRemovidos = lstNumbers.splice(2, 1); // Remover o elemento de índice 2 (1 item será removido)

// busca o índice de um item na lista (via método indexOf)
let locais = ["Brasil", "Fortaleza", "Aracati"];
console.log(locais.indexOf("Brasil")); // 1
console.log(locais.indexOf("Rio de Janeiro")); // -1

// Destructuring in Objects

const user = {
  firstName: "José",
  lastName: "Silva",
  age: 42,
};

const {firstName, age} = user;

console.log(firstName);
console.log(age);

// Destructuring in Functions

function obterInfo({nome, sobrenome, idade}) {
  console.log(nome + " " + sobrenome + "," + idade);
}

const pessoa = {
  nome: "José",
  sobrenome: "Lopes",
  idade: 41,
};

obterInfo(pessoa);

// Destructuring in Arrays

const niveis = ["Fundamental", "Médio", "Superior"];

const [nivel1, nivel2, nivel3] = niveis;

console.log(nivel1, nivel2, nivel3);

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
