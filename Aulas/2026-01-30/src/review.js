// Revisão JS
console.log("Revisão de JS");
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

console.log(listaProdutos.length);
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

function printf(mensagem) {
  const msg = mensagem.toUpperCase();
  console.log(`[LOG] ${msg}`);
  console.log("[LOG] Fim da mensagem");
}

printf("Hello, World!");

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
