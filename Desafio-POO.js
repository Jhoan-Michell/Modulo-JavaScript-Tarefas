
class Banco {
  constructor (saldo) {   
    this.saldo = saldo;
    }

  deposit(valor) {
    this.saldo =+ valor
    return console.log(`Seu deposito foi realizado... seu saldo actual e: ${this.saldo}`);
    }
  saque(valor) {
    if (this.saldo < valor) {
      console.log(`Saldo indisponivel... saque invalido`)
    
    } else {
      this.saldo -= valor
      console.log(`Saque efetuado com sucesso, seu saldo actual e de: ${this.saldo}`)
    }
  }  
}
const banco1 = new Banco()
banco1.deposit(500)
banco1.saque(200)
banco1.saque(600)
