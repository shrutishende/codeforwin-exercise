let amount = 575


if (amount >= 500){
    let note500 =Math.floor( amount/500)
    amount = amount - (note500 * 500)
    console.log(amount, note500)
}
if(amount >= 100){
    let note100 = Math.floor(amount/100)
    amount = amount - (note100 * 100)
    console.log(amount, note100)
}

if (amount >= 50){
    let note50 = Math.floor(amount/50)
    amount = amount - (note50 * 50)
    console.log(amount, note50)
}

if (amount >= 20){
    let note20 = Math.floor(amount/20)
    amount = amount - (note20 * 20)
    console.log(amount, note20)
}


if (amount >= 10){
    let note10 = Math.floor(amount/10)
    amount = amount - (note10 * 10)
    console.log(amount, note10)
}

if (amount >= 5){
    let note5 = Math.floor(amount/5)
    amount = amount - (note5 * 5)
    console.log(amount, note5)
}

if (amount >= 2){
    let note2 = Math.floor(amount/2)
    amount = amount - (note2 * 2)
    console.log(amount, note2)
}

if (amount >= 1){
    let note1 = Math.floor(amount)
    amount = amount - (note1 * 20)
    console.log(amount, note1)
}