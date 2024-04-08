const str ="I love codeforwin."

let vowel =0
let consonent =0


for(let i =0; i<str.length; i++){
    if((str[i]>="a" && str[i]<="z") || str[i]>="A" && str[i]<="Z"){
        if(str[i]=== "a" || str[i]==="e"|| str[i]==="i" || str[i]==="o" || str[i]==="u" ||
            str[i]=== "A" || str[i]==="E"|| str[i]==="I" || str[i]==="O" || str[i]==="U" ){
            vowel++
        }else {
            consonent++
        }
    }
}

console.log(vowel)
console.log(consonent)