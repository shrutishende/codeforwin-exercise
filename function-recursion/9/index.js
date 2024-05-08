function isPerfect(n){
    let sum =0

    for(let i=1;i<n;i++){
        if(n %i ===0){
            sum = sum + i
        }
    }
    return sum ===n
}

for (let i=1; i<100; i++){
    if(isPerfect(i)){
        console.log(i)
    }
}