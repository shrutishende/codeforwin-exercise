let upperLimit = 1000

for(let i=1; i<=upperLimit; i++){
    let sum =0

    let num =i

    let temp = i

    let numDigit = 0

    for (let count=1; temp >=1; count ++){
        temp = temp /10
        numDigit= count
    }

    while (num >0){
        let lastDigit = num % 10

        sum = sum + (Math.pow(lastDigit, numDigit))

        num =Math.floor(num /10)
    }

    if(i === sum)
    {
        console.log(i);
    }




}