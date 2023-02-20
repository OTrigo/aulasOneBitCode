const nameChar1 = prompt("Digite o nome do primeiro personagem")
const atkChar1 = parseFloat(prompt("Poder de ataque do primeiro personagem"))

const nameChar2 = prompt("Digite o nome do segundo personagem")
const healthChar2 = parseFloat(prompt("Digite a quantidade de vida do personagem"))
const defChar2 = parseFloat(prompt("Digite a quantidade de defesa do personagem"))
const shieldChar2 = confirm("O personagem possui escudo?")

let healthCalc = 0;
if(atkChar1 > defChar2){

    if(shieldChar2 == true){
        healthCalc = healthChar2 - (atkChar1 - defChar2)
        alert("O segundo personagem possui defesa menor do que o ataque do primeiro personagem, dano reduzido por conta do escudo")
        alert("Vida do segundo personagem:"+healthCalc)
    }

    else{
        healthCalc = healthChar2 - (atkChar1 - defChar2)
        alert("O segundo personagem possui defesa menor do que o ataque do primeiro personagem")
        alert("Vida do segundo personagem:"+healthCalc)
    }

}else{
    alert("O segundo personagem sofreu 0 de dano.")
}