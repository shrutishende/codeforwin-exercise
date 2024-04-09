
function reverseWords(str) {
    const words = str.split(" ");

    words.reverse();

    const reversedString = words.join(" ");

    return reversedString;
}

const str = "hello world!";
const reversedString = reverseWords(str);

console.log(reversedString);