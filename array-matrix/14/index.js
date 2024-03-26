const arr = [10, 20, 10, 1, 100, 10, 2, 1, 5, 10, 3]


for(let i =0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
            for(let k=j; k<arr.length-1; k++){
                arr[k]= arr[k+1]
            }
            arr.length--
          //  j--
        }
    }
}

console.log(arr)