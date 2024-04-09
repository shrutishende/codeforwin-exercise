const str ="codeforwin"

let chars = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (chars[char]) {
        chars[char]++;
    } else {
        chars[char] = 1;
    }
}

console.log(chars)