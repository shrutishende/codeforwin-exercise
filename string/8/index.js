const str ="I love codeforwin."
let alphabet =0
let num =0
let others=0

for(let i=0; i<str.length; i++){
    if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
        alphabet++
    }else if(str[i]>='0' && str[i]<='9'){
        num++
    }else{
        others++
    }
}

console.log("alphabet",alphabet)
console.log("num",num)
console.log("others", others)