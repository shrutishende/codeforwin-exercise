let unit = 351

let total_bill = 0
let surcharge = 0

let ru = unit
if (ru > 0){
    ru = ru - 50
    total_bill  = total_bill + (50 * 0.5)
    console.log(total_bill)
}
if(ru >0){
    ru = ru - 100
    total_bill  = total_bill + (100 * 0.75)
    console.log(total_bill)

}

if(ru >0){
    ru = ru - 100
    console.log(ru)
    total_bill  = total_bill + (100 * 1.20)
    console.log(total_bill)

}

if(ru >0){
    total_bill  = total_bill + (ru * 1.5)
    console.log(total_bill)

}

surcharge = total_bill * 0.2

total = surcharge + total_bill

console.log("total", total)