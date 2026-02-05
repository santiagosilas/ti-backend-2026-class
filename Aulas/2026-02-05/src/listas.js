export const dados = [];
// Adicionar
export function adicionar(registro) {
  dados.push(registro);
}
// listar
export function listar() {
  //for (let item of dados) {
  //  console.log(item.matricula, item.nome);
  //}
  dados.forEach((item) => {
    console.log(`${item.matricula}:${item.nome}`);
  });
}

// obter por matrícula

// atualizar

// remover
