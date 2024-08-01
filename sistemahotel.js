let readline = require('readline-sync');
console.log('Tipos de quarto: Standard, Luxo e Suíte');

let standard = 150;
let luxo = 300;
let suite = 500;

let estadia = readline.question('Informe o tipo de quarto: ')
let diaria = readline.question('Informe o numero de diarias: ')

if(estadia === 'standard'){
console.log(`O valor da estadia é: ` + (diaria * standard));
}
else if(estadia === 'luxo'){
    console.log('O valor da estadia é: ' + (diaria * luxo));
}
else if(estadia === 'suite'){
    console.log('O valor da estadia é: '+ (diaria * suite))
}else{
    console.log('Opção inválida')
}