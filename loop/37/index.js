const num = 100

let numStr = num.toString()

let complement = ""

for (let i =0; i<= numStr.length-1 ; i++){
    //console.log(i)

   // console.log(numStr[i])

    if(numStr[i] === "1"){
      complement = complement + "0"
    }else{
        complement = complement + "1"
    }


}
console.log(complement)
