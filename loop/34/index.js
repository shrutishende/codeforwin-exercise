let num =141
let temp =num
let sum =0

while (temp>0){
    let lastDigit = temp % 10

    let fact =1
    for (let i=1; i<=lastDigit ; i++){
        fact = fact * i
    }

    sum = sum + fact;

    temp = Math.floor(temp / 10);
}

if(sum === num)

{
    console.log("%d is STRONG NUMBER", num);
}
else
{
    console.log("%d is NOT STRONG NUMBER", num);
}



