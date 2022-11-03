
let op = ""
/**
 * @param {operador aritmetico} operacao // string ou simbolo aritmetico 
 * @param {valor1} n1 
 * @param {valo2} n2 
 * @returns print na tela a operacao 
 */
function Calculadora(operacao, n1, n2) {
    op = operacao
    if (operacao === "+" || operacao === "soma") 
        return console.log(n1 + n2);
    else if 
    (operacao === "-" || operacao === "subtracao") 
        return console.log(n1 - n2);
    else if 
    (operacao === "/" || operacao === "divicao") 
        return console.log(n1 / n2);
    else if 
    (operacao === "*" || operacao === "multiplicacao") 
        return console.log(n1 * n2);
    else
    (operacao === "")
        return console.log("operador invalido... digite operador example: Calculadora('operador',valo1,valo2)");
    
}

 Calculadora("*",50,3)