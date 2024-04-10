function removeFirstOccurrence(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            str = str.substring(0, i) + str.substring(i + 1);
            break;
        }
    }
    return str;
}

let str = "Hello world!";
let char = 'o';

let newStr = removeFirstOccurrence(str, char);

console.log(newStr);