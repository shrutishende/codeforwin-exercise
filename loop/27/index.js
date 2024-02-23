function prime (n){
    if (n <= 1){
        return false
    }

    for(let i=2; i<n; i++){
        if(n%i ===0){
            return  false
        }
    }
    return true

}

console.log(prime(22))

for (let i =1; i<20; i++){
    if(prime(i))
    console.log(i)
}