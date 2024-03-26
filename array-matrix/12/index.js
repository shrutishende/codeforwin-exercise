const numbers = [1, 2, 3, 4, 5, 1, 2, 3];

const uniq = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniq.includes(numbers[i])) {
        uniq.push(numbers[i]);
    }
}

console.log(uniq);