
console.log("====== 1. Desafio | String ======")

const string = "Camisa" 
console.log(string.indexOf("a"))

console.log("====== 2. Desafio | Number ======")

 let number = "5"
number = parseInt(number)
 console.log(typeof number)

 console.log("====== 3. Desafio | Array ======")

const lista_frutas = [ "Morango", "Abacaxi", "Pera", "Banana", "Uva", "Tangerina" , "limão", "Mamão" ]
console.log(lista_frutas.filter(lista_fruta => lista_fruta[0] == "M"))

console.log("====== 4. Desafio | Objeto ======")

const Carro = { placa: "HPJ123", Ano: 2015 , color: "Preto",  }
console.log(Carro.Ano)