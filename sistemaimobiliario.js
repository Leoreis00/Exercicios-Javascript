let readline = require('readline-sync')

let imoveltipo = readline.question('Qual o tipo o deu imovel (Casa ou Apartamento)?: ')
let imovelarea = readline.question('Qual a area de seu imovel em m²?: ')
let valormetro = 20.00

let aluguel = imovelarea * valormetro

console.log(`${imoveltipo}: ${imovelarea}m² - Valor do aluguel: R$ ${aluguel} `)