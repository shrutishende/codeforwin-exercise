const arr = [ 0, 5, 1, 2, 3, 4, 6, 12, 10, 9]
function sortEvenOdd(arr) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] & 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }

    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);

    return even.concat(odd);
}
const sortedArr = sortEvenOdd(arr);

console.log(sortedArr);