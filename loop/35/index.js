const upperLimit =1000



for(let j=1; j<=upperLimit; j++){
    let temp =j
    let sum = 0

    while (temp>0){
        let lastDigit = temp % 10

        let fact =1
        for (let i=1; i<=lastDigit ; i++){
            fact = fact * i
        }

        sum = sum + fact;

        temp = Math.floor(temp / 10);
    }
    if(sum === j)

    {
        console.log (j);
    }
}


