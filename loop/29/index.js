


let num = 10

for(let i=2; i<=num; i++){

    if(num % i === 0){
        //console.log(i)
        let isPrime = true;
        for (let j=2; j<i; j++){
            if(i % j === 0){
                isPrime=false
               // console.log(i)
                break
            }
    }

        if(isPrime===true){
            console.log(i)
        }


    }
}