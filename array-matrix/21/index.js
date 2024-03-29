let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let d=3

function rotateArray(arr,d){

    let temp =[]
    for (let i = 0; i < d; i++) {
        temp.push(arr[i]);
    }

    for(let i=d; i<arr.length; i++){
        arr[i - d] = arr[i];
    }

    for (let i = 0; i < d; i++) {
        arr[arr.length - d + i] = temp[i];
    }

    return arr;
}

const rotatedArray = rotateArray(arr, d);

console.log(rotatedArray)