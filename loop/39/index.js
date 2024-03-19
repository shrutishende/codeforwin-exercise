let num = "0011"
const digits = num.split("");

let decimal = 0

digits.reverse()

//const rev= digits.reverse()

for (let i=0; i<digits.length; i++){
    decimal += digits[i] * Math.pow(2,i)
}

console.log("decimal",decimal)


