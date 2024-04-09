
function maxChar(str) {
    let chars = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }

    let max = 0;
    let maxChar = '';
    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxChar('I love Codeforwin')); // 'l'
