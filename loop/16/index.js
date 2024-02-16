let num = 123456789
let numstr = num.toString()
let reverseStr = ""


for (let i = numstr.length-1; i>=0; i--){
    reverseStr += numstr[i]
}
console.log(reverseStr)