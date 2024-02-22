const num = 13

function prime (n){
    if (num <= 1){
        return false
    }

    for(let i=2; i<n; i++){
        if(num%i ===0){
          return  false
        }
    }
    return true

}

console.log(prime(num))