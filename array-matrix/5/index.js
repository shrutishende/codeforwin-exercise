const arr = [-7, 2, 3, 8, 6, 6, 75, 38, 3, 2]

let max1=arr[0]
let max2=arr[0]

for (let i=0; i<arr.length; i++){
    if(arr[i]>max1){
        max2 = max1
        max1 = arr[i]
    }

    if(arr[i] > max2 && arr[i] < max1){
        max2=arr[i]
    }
}

console.log(max2)