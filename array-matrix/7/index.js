let arr = [10, -2, 5, -20, 1, 50, 60, -50, -12, -9]

let neg =0

for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        neg++
    }
}
console.log(neg)