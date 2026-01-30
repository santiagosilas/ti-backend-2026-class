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
