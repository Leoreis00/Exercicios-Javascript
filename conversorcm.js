let readline = require('readline-sync')

console.log('Olá, irei fazer a conversão de metros(m) em centimentos(cm).')
let met = readline.questionFloat('Informe o valor de metros: ')

let conversao = met * 100;
console.log(`${met} metros corresponde a ${conversao} centimetros.`)