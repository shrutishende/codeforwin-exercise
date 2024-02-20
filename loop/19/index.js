let num = 657

let result = 0;


while(num>0){
    let lastDigit = num%10;

    result = result*10 + lastDigit;

    num = Math.floor(num/10);
}
console.log("Reversed number is : " + result)





while (result >= 1){


    switch (Math.floor(result %10)){
        case 0:
            console.log("Zero ");
            break;
        case 1:
            console.log("One ");
            break;
        case 2:
            console.log("Two ");
            break;
        case 3:
            console.log("Three ");
            break;
        case 4:
            console.log("Four ");
            break;
        case 5:
            console.log("Five ");
            break;
        case 6:
            console.log("Six ");
            break;
        case 7:
            console.log("Seven ");
            break;
        case 8:
            console.log("Eight ");
            break;
        case 9:
            console.log("Nine ");
            break;
    }

     result =Math.floor( result/10)

}