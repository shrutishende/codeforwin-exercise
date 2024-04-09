const str = "I love Codeforwin"
const  character ="o"
function findLastOccurrence(string, character) {
    let lastIndex = -1;
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === character) {
            lastIndex = i;
            break;
        }
    }
    return lastIndex;
}

const lastIndex = findLastOccurrence(str, character);

if (lastIndex === -1) {
    console.log("The character is not found in the string.");
} else {
    console.log("The last occurrence of the character is at index", lastIndex);
}