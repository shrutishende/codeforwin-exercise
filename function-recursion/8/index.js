function isArmstrong(n){
    let number = n
    let numDigits = 0

    for (let count =1; number >= 1; count++){
        number = number /10
        numDigits= count
    }

    let sum =0

    let temp =n
    while(temp > 0){
        let lastDigit = temp % 10

        sum = sum + (Math.pow(lastDigit, numDigits))

        temp =Math.floor(temp /10)
    }
    return n ===sum
}

for(let i=1; i<1000; i++){
    if(isArmstrong(i)){
    console.log(i)
    }
}