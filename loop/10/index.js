
let num = 123
//let count = 0
// do {
//   count ++
//   num /= 10
// }while(num>1)
// console.log(count)

let numDigits = 0

for (let count =1; num >= 1; count++){
    num = num /10
    console.log(num)
    numDigits= count

}
console.log(numDigits)

