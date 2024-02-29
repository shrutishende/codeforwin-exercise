const num =6

let sum =0

for(let i=1;i<num;i++){
    if(num %i ===0){
        //console.log(i)
        sum = sum + i
    }


}

if(sum === num){
    console.log("perfect number")
}else {
    console.log("not a perfect number")
}