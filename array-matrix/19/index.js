const arr = [20, 2, 10, 6, 52, 31, 0, 45, 79, 40]
let temp
for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length ; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }
}

console.log(arr)