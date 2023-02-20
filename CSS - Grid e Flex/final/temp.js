let num = 0
let maxNum = 1000
let qtdDivisores = 0
let sum = 0

for(let contador = 0; contador < maxNum; contador++ ){//numeros de 1 a 1000
   num = contador
   for(let i = 0; i <= num; i++ ){
      if(num>1){
         if(num % i == 0){
            qtdDivisores++
         }
      }
   }

   if(qtdDivisores == 2){
      sum+=num
   }

   qtdDivisores = 0
}

console.log(sum)