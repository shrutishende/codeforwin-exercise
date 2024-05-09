function even(L, R)
{
    if (R < L)
    {
        return;
    }

    if (R % 2 === 0 )
    {
        even(L, R - 2);
    }
    else
    {
        even(L, R - 1);
    }

    if (R % 2 === 0)
    {
        console.log(R + " ");
    }
}

console.log(even(1,10))

function odd(L,R){
    if(R<L){
        return;

    }

    if(R%2 !==0){
        odd(L, R - 2)
    }else{
        odd(L, R - 1)
    }

    if (R % 2 === 1)
    {
        console.log(R + " ");
    }
}

console.log(odd(1,10))