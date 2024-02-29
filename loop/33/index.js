let upperLimit =100

for (let i=1; i<=upperLimit ;i++){
    let sum =0
    for(let j=1; j<i; j++){
        if(i % j === 0){
            sum = sum + j
        }
    }
    if(sum === i){
        console.log(i)
    }
}

