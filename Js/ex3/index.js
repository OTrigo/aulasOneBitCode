let option;
while(option != 6){
    optionInput = prompt('Selecione uma opção \n [1] alguma coisa  \n [2] Outra coisa  \n [3] Alguma outra coisa  \n [4] Algo  \n [5] Outro algo \n [6] Sair do menu')
    option = parseInt(optionInput)
    switch (option){
        case 1:
            alert('Você escolheu alguma coisa')
            break
        case 2:
            alert('Você escolheu outra coisa')
            break
        case 3:
            alert('Você escolheu alguma outra coisa')
            break
        case 4:
            alert('Você escolheu algo')
            break
        case 5:
            alert('Você escolhe outro algo')
            break
        case 6:
            break
        default:
            alert('Escolha uma opção válida')
    }
}