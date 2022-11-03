
console.log("=== 1. Função e variáveis ===")
/**
 * @param {valor1} n1 
 * @param {valor2} n2
 * @description operação de soma 
 */
function VariavelSoma(n1, n2) {
    console.log(n1 + n2)
}

VariavelSoma(3, 5)

console.log("=== 2 - Função e Tipos de Dados ===")

/**
 * @param {caracter} l 
 * @returns retornar caracter a numerico e mostrar o type da salida em numerica 
 */

function numerico(l) {
    return `${parseInt(l)}, ${typeof parseInt(l)}`;
}

console.log(`${numerico('56')}`);

/**
 * @param {[]} lista 
 * @returns retornar e filtrar array com tuda string "P" na index [0]  
 */ 
function listaFiltrada(lista) {
    return lista.filter((filtra)=>filtra[0] === "P");
}

const listaresposta = ["Julia", "Anna", "Pedro", "Rafael", "Paula"];
console.log(listaFiltrada(listaresposta))

console.log("=== 3 - Função e Operadores ===")

/** 
 * @param {3} n1 
 * @param {3} n2 
 * @returns {soma}
 * @description função de somar, multiplicar, e retornar o modulo
 */

function soma(n1, n2) {
    soma = (3 + 3)
    return soma
}

console.log(soma())

function multiplicar(n1, n2) {
    multiplicar = (3 * 3)
    return multiplicar
}

console.log(multiplicar())

function divmod(n1, n2) {
    divmod = (7 % 3)
    return divmod
}

console.log(divmod())