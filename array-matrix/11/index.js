const arr = [5, 10, 2, 5, 50, 5, 10, 1, 2, 2]

const counts = {};

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counts[num] === undefined) {
        counts[num] = 0;
    }
    counts[num]++;
}

console.log(counts);
