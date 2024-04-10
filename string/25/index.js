
function replaceFirstOccurrence(str, charToReplace, newChar) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToReplace) {
            str = str.substring(0, i) + newChar + str.substring(i + 1);
            break;
        }
    }
    return str;
}

const str = "I love programming.";
const charToReplace = ".";
const newChar = "!";

const newStr = replaceFirstOccurrence(str, charToReplace, newChar);

console.log(newStr);