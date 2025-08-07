const string = "Hola";

String.prototype.concatenarPalabra = function (palabra) {
  return `${this} ${palabra}`;
};

const resultado = string.concatenarPalabra("mundo");
console.log(resultado);

// Punto 4
const originalTexto = String.prototype.toUpperCase;

String.prototype.toUpperCase = function () {
  return "ESTO ESTÁ PROHIBIDO";
};

const resultado2 = string.toUpperCase();
console.log(resultado2);
