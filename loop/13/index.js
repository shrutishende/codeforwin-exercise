const num =4111113336

let numDigits = 0



let first
let last
let swappedNum
first = num

while (first>=10){
    first = Math.floor(first/10)
}

last = num % 10

let number = num
for (let count =1; number >= 1; count++){
    number = number /10
    //console.log(num)
    numDigits= count

}
console.log("num digit",numDigits)


console.log("first",first)
console.log("last",last)

swappedNum = last

swappedNum = last * Math.pow(10, numDigits-1)

console.log("swapp1", swappedNum)

const pow =  Math.pow(10, numDigits-1)
console.log("pow", pow)


 swappedNum = swappedNum + (num % pow)

 console.log("swapp2", swappedNum)

 swappedNum = swappedNum -last
 console.log("swapp3", swappedNum)

 swappedNum = swappedNum +first
 console.log("swapp4", swappedNum)
