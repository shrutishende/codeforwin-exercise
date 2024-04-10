let str = "Programming in C."

function removeDuplicates(str) {
    let result = "";
    let seen = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicates(str))