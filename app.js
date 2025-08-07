function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (cantidad) {
  this.saldoInicial += cantidad;
};
CuentaBancaria.prototype.extraer = function (cantidad) {
  if (cantidad > this.saldoInicial) {
    console.log("Fondos insuficientes");
  }
  this.saldoInicial = this.saldoInicial - cantidad;
};
CuentaBancaria.prototype.consultarSaldo = function () {
  return `saldo actual ${this.saldoInicial}`;
};

const nuevoCliente = new CuentaBancaria("jose", 4000);
nuevoCliente.depositar(1000);
console.log(nuevoCliente.consultarSaldo());
nuevoCliente.extraer(300);
console.log(nuevoCliente.consultarSaldo());
