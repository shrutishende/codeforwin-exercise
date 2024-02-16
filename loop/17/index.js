const num =333

const numstr = num.toString()

let reverseStr = ""

for (let i = numstr.length-1 ; i >= 0; i--){
    reverseStr += numstr[i]
}
if(numstr === reverseStr){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}