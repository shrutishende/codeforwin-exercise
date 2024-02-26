let num =10
let isPrime
for(let i=2; i<=num; i++)
{
    if(num%i===0)
    {
        isPrime = 1;
        for(let j=2; j<=i/2; j++)
        {
            if(i%j===0)
            {
                isPrime = 0;
                break;
            }
        }

        if(isPrime===1)
        {
            console.log(i)
        }
    }



}