let baralho = ['Carta um', 'Carta dois', 'Carta três']
let acoes = ['Adicionar carta', 'Puxar uma carta', 'Sair']
let menu

let listaDeCartas = ''
let listaDeAcoes = ''

for(let i = 0; i < acoes.length; i++){
    listaDeAcoes += `[${i+1}] ${acoes[i]} `
}

while(menu != 3){

    for(let i = 0; i < baralho.length; i++){
        listaDeCartas += `   ${i+1}º ${baralho[i]} \n`
    }

    menu = parseInt(prompt(`Cartas: \n${listaDeCartas} \n Ações: \n ${listaDeAcoes}`))
    switch(menu){
        case 1:
            baralho.unshift(prompt('Escreva uma carta para adicionar ao baralho'))
            break
        case 2:
            baralho.shift()
            break
        default:
            break
    }
    
    listaDeCartas = ''
}
