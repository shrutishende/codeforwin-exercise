const str = "madam"

for (let i = 0; i < str.length / 2; i++) {

    // check if first and last string are same
    if (str[i] !== str[str.length - 1 - i]) {
        console.log('It is not a palindrome')
    }
}
console.log('It is a palindrome')