let char = prompt("Vamos ver se o que você está prestes a escrever é de fato um palíndromo...")
let caractereNormal = 0
let validados = 0

for(let i = char.length; i >= 0; i--){
    if(char[caractereNormal] == char[i]){
        console.log(`O valor de i agora é:${i} e o de caracterNormal é: ${caractereNormal}`)
        validados++
        caractereNormal++
    }
}

console.log(validados)

if(validados == char.length){
    alert("Realmente é um palíndromo")
}
else{
    alert("Não é um palíndromo")
}