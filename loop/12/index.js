const num =12345

let first
let last
first = num

while(first >= 10){
    first = Math.floor(first/10)
}
console.log("first",first)

last =( num %10)
console.log("last", last)

const sum = first + last
console.log("sum", sum)