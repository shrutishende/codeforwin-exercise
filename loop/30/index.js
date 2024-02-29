const num = 408

let number =num

let numDigits = 0

for (let count =1; number >= 1; count++){
    number = number /10
    numDigits= count
}
//console.log(numDigits)

 let sum =0

 let temp =num

while(temp > 0){
    let lastDigit = temp % 10
  //  console.log(lastDigit)

    sum = sum + (Math.pow(lastDigit, numDigits))
   // console.log("sum",sum)

    temp =Math.floor(temp /10)
}

if(num === sum){
    console.log("armstrong num")
}else{
    console.log("not")
}