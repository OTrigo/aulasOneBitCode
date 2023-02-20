let listaImoveis = []
let imovel = {} 
let menu
let exibirImoveis = ''

while(menu != 3){
    menu = parseInt(prompt(`Qtd imoveis: ${listaImoveis.length} \n[1] Cadastrar Imóvel \n[2] Mostrar Imoveis \n[3] Sair`))

    switch(menu){
        case 1:
            imovel.proprietario = prompt('Nome do proprietario:')
            imovel.quartos = prompt('Número de quartos:')
            imovel.banheiros = prompt('Número de banheiros:')
            imovel.garagem = confirm('Possui garagem?')
            listaImoveis.push(imovel)
            break
        case 2:3
            for(let i=0; i<listaImoveis.length; i++){
                exibirImoveis += `[${i+1}] ${listaImoveis[0].proprietario}, ${listaImoveis[0].quartos}, ${listaImoveis[0].banheiros}, ${listaImoveis[0].garagem}\n`
            }

            alert(exibirImoveis) //)
            break
        case 3:
            break
        default:
            alert('Comando inválido')
            break
    }

    exibirImoveis = ''
}

