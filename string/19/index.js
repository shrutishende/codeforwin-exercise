function findMinOccurringChar(str) {
    const charFreq = {};
    for (const char of str) {
        if (charFreq[char] === undefined) {
            charFreq[char] = 0;
        }
        charFreq[char]++;
    }

    let minChar = str[0];
    let minFreq = charFreq[minChar];
    for (const char in charFreq) {
        if (charFreq[char] < minFreq) {
            minChar = char;
            minFreq = charFreq[char];
        }
    }

    return minChar;
}

// Example usage:
const str = "hello world";
const minChar = findMinOccurringChar(str);
console.log(minChar);
