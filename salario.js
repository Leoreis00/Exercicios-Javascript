let readline = require('readline-sync');
console.log ('Olá, irei calcular o valor de seu salário')

let valorhora = readline.question('Quanto voce ganha por hora? ');
let horas = readline.question('Quantas horas voce trabalha por dia? ');
let dias = readline.question('Quantos dias voce trabalha por mes? ');


let salario = (valorhora * horas) * dias;

console.log(`Você ganha ${valorhora} reais por hora e trabalha ${horas} horas por dia.`)
console.log(`Seu salário mensal é de ${salario} reais.`)

