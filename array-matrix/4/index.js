const arr = [10,50, 12,16,2]

let min = arr[0]
let max = arr[0]

for (let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i]
    }
    if(arr[i]>max){
        max = arr[i]
    }

}

console.log(min)
console.log(max)
