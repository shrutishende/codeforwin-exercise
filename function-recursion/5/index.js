function isPrime(n){
    if(n<=2){
        return false
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}


function isPerfectNumber(n){
    let sum =0

    for(let i=1; i<n; i++){
        if(n%i===0){
            sum+=i
        }
    }


    if (sum === n ) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }

    return sum;
}

console.log(isPerfectNumber(11))

console.log(isPrime(11))