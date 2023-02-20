let dinheiro = parseInt(prompt('Digite a quantidade inicial inicial'))
let option;
let optionInput;

while(option != 3){
    option = parseInt(prompt(`Você está agora com R$ ${dinheiro}, quais das opções a seguir você deseja? \n [1] Aumenta a quantia \n [2] Diminuir a quantia \n [3] Sair `))
    switch (option){
        case 1:
           optionInput = parseInt(prompt("Diga a quantia que deseja aumentar."))
           dinheiro += optionInput
           break
        case 2:
            optionInput = parseInt(prompt("Diga a quantia que deseja diminuir."))
            dinheiro -= optionInput
            break
        case 3:
            break
        default:
            alert("Valor inválido")
    }
}