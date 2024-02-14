const num =3345

let last
let first = num

while(first>=10){
    first = Math.floor(first/10)
}

console.log("first ",first)


last = num % 10
console.log("last", last)

