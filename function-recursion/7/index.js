function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isStrong(n){
    let temp=n
    let sum =0
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}


for (let i = 1; i <= 10000; i++) {
    if (isStrong(i)) {
        console.log(i);
    }
}
