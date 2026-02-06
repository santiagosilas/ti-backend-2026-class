export const servidor = "192.168.10.1";
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
