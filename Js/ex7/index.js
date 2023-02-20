let queue = ['Joao', 'Maria', 'Marcos']
const acoes = ['Novo paciente', 'Consultar paciente', 'Sair']
let listaString = ''
let listaAcoes = ''
let menu;

for(let i = 0; i < acoes.length; i++){
    listaAcoes += `      [${i+1}] ${acoes[i]} `
}4

console.log(listaString)

while(menu != 3){
    for(let i = 0; i < queue.length; i++){
        listaString += `     ${i+1}º ${queue[i]}\n`
    }

    menu = parseInt(prompt(`Paciente \n${listaString} \n Escolha a sua ação \n ${listaAcoes}`))

    switch(menu){
        case 1:
            listaString = ''
            queue.push(prompt('Digite um nome'))
            break
        case 2:
            listaString = ''
            queue.pop()
            console.log(queue)
            break
        case 3:
            listaString = ''
            alert("Saindo")
            break
        default:
            listaString = ''
            alert("Comando inválido")
            break
    }
}
