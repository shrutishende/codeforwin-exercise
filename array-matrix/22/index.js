let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let d=3
function rotateArray(arr,d){
    let temp =[]
    for (let i = arr.length-d; i < arr.length; i++) {
        temp.push(arr[i]);
    }

    for (let i = 0; i < arr.length - d; i++) {
        temp.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }

    return arr

}

const rotatedArray = rotateArray(arr, d);

console.log(rotatedArray)