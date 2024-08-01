let readline = require ('readline-sync');

let nome = readline.question('Qual o seu nome? ')

let nota1 = readline.questionFloat('Informe sua primeira nota: ')
let nota2 = readline.questionFloat('Informe sua segunda nota: ')
let nota3 = readline.questionFloat('Informe sua terceira nota: ')
let nota4 = readline.questionFloat('Informe sua quarta nota: ')


let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(`Olá ${nome}, sua média foi ${media}.`)
