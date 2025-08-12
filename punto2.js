class CuentaBancaria {
  #saldoInicial;
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldoInicial = saldoInicial;
  }

  get saldo() {
    return this.#saldoInicial;
  }

  set ingresarSaldo(monto) {
    if (monto >= 0) {
      this.#saldoInicial += monto;
    } else {
      console.log("el saldo no puede ser negativo");
      return;
    }
  }

  set extraerSaldo(monto) {
    if (monto > this.#saldoInicial) {
      return console.log("Fondos insuficientes");
    }
    this.#saldoInicial = this.#saldoInicial - monto;
  }
}

const newClient = new CuentaBancaria("juan", 7000);
console.log(newClient.saldo);
newClient.ingresarSaldo = -3000;
console.log(newClient.saldo);
newClient.extraerSaldo = 4000;
console.log(newClient.saldo);
