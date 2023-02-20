const nome = prompt('Qual o seu nome?')
const visit = confirm('Você já visitou alguma cidade?')

if(visit === true){
    let i = 0
    let input = true;
    let cities = ''

    while(input == true){
        i++
        input = confirm(`Você visitou a cidade ${i} ?`)
        input==true? cities += `- cidade ${i}\n`: cities
    }
    alert(`${i} cidades visitadas: \n${cities}`)
}else{alert('então beleza 👍')}