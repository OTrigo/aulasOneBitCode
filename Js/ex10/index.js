function areaTriangulo(base, altura){
    return alert(`A área é: ${(base*altura)/2}`)
}

function areaRetangulo(base, altura){
    return alert(`A área é: ${base*altura}`)
}

function areaQuadrado(lado){
    return areaRetangulo(lado, lado)
}

function areaTrapezio(maior, menor, altura){
    return alert(`A área é: ${((maior+menor)*altura)/2}`)
}

function areaCirculo(raio){
    const pi = Math.pi
    return alert(`A área é: ${pi*Math.pow(raio, 2)}`)
}

let menu;

while(menu != 6){
    menu = parseInt(prompt('Digite o procedimento que deverá ser realizado \n [1]Area do triângulo\n [2]Area do retangulo\n [3]Area do quadrado\n [4]Area do trapézio\n [5]Area do quadrado\n [6]Sair\n'))

    switch(menu){
        case 1:
            areaTriangulo(prompt('Digite a base'), prompt('Digite a altura'))
            break
        case 2:
            areaRetangulo(prompt('Digite a base'), prompt('Digite a altura'))
            break
        case 3:
            areaQuadrado(prompt('Digite o lado'))
            break
        case 4:
            areaTrapezio(prompt('Digite a base maior'), prompt('Digite a base menor'), prompt('Digite a altura'))
            break
        case 5:
            areaCirculo(prompt('Digite o raio'))
            break
        case 6:
            alert('saindo...')
            break
        default:
            alert('Comando inválido')
    }
}

