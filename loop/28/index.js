function prime(n){
    if(n <= 1){
        return false
    }

    for(let i = 2; i<n; i++){
        if(n%i ===0){
            return false
        }
    }
    return true
}

let sum =0
for (let i=2; i<10; i++){

    if(prime(i)){
        sum = sum + i
    }

}
console.log(sum)