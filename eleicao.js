/*Questão:
Numa eleição existem três candidatos.
Faça um programa que peça o número total de eleitores.
Peça para cada eleitor votar e ao final mostrar o número de
votos de cada candidato.*/


const readline = require('readline-sync')//Importa a biblioteca readline-sync para ler entradas do usuário no console//
console.log('=====ELEIÇÃO SOFTEX======')
console.log('Opcoes de voto: 1 - Lula')
console.log('Opcoes de voto: 2 - Bolsonaro')
console.log('Opcoes de voto: 3 - Ciro')

let candidato01 = 0;
let candidato02 = 0;
let candidato03 = 0;


let totaldeeleitores = readline.questionInt('Qual o total de eleitores?');
console.log (`${totaldeeleitores} eleitores no total`);
 
let contador = 0
while (contador <= totaldeeleitores){
    let voto = readline.questionInt('Escolha uma opção de voto: ');

        if (voto == 1){
            console.log(`Voce votou no Lula`)
            candidato01 = candidato01 + 1

        }else if(voto == 2){
            console.log(`Voce votou no Bolsonaro`)
            candidato02 == candidato02 + 1
        } else if ( voto == 3){
            console.log(`Voce votou no Ciro`)
            candidato03 = candidato03 + 1

            
    }
    contador++
}


console.log(`Candidato Lula recebeu ${candidato01} votos`)
console.log(`Candidato Bolsonaro recebeu ${candidato02} votos`)
console.log(`Candidato Ciro recebeu ${candidato03} votos`)


