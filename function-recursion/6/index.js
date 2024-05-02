

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for(let i=10; i<=50;i++){
    if(isPrime(i)){
        console.log(i)
    }
}