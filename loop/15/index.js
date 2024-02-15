let num = 1234

let numstr = num.toString()

let product = 1

for (let digit of numstr) {
    product *= parseInt(digit);
}


console.log(product)
