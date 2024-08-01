let readline = require('readline-sync')

let lista = [];
opcao = 1;
while(opcao ==1){
     console.log('*********MENU************')
     console.log("Digite 1 para inserir")
     console.log("Digite 2 para Listar")
     console.log("Digite 4 para sair")
    opcao = readline.question("Digite a opcao desejada: ")
    if (opcao ==1){
    let valor = readline.question ("Digite um numero entre 1 e 3:")
    lista.push(valor)
} else if(opcao ==2){
    console.log(lista)
}else{
     console.log ("Opcao invalida")
}
}