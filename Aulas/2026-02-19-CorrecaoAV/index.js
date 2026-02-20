const listaProdutos = [
  {id: 1, nome: "Monitor", valor: 550.5, disponibilidade: true},
  {id: 2, nome: "Teclado", valor: 120.5, disponibilidade: true},
  {id: 3, nome: "Mouse", valor: 110.5, disponibilidade: true},
];

const print = (dados) => {
  dados.forEach((item) => {
    console.log(item);
  });
};
const add = (dados, item) => {
  dados.push(item);
};
const search = (dados, nome) => {
  for (item of dados) {
    if (item.nome == nome) {
      return item;
    }
  }
};

let novo = {id: 4, nome: "Lousa Digital", valor: 730.5, disponibilidade: true};
add(listaProdutos, novo);
print(listaProdutos);
let busca = search(listaProdutos, "Mouse");
console.log("busca", busca);
