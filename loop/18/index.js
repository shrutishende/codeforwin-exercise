let num =113404



for(let i =0; i<=9 ; i++){
    let count = 0

    let num2 = num
//console.log("dmfi")
    while (num2 >=1){
        let lastDigit = num2 % 10
         //console.log(lastDigit)

        if(lastDigit === i){
            count++
        }
        num2 = Math.floor(num2/10)
    }
    console.log(`frequency of ${i} : ${count}`)

}



//console.log(count)