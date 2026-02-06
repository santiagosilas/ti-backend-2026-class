function filtrarPorCatv2(nomeCat) {
  let subLista = [];
  for (let pessoa of lista) {
    if (pessoa.cat == nomeCat) {
      subLista.push(pessoa);
    }
  }
  return subLista;
}
