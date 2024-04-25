let str = "Do you love programming.";
const charToReplace = ".";
const newChar = "!";

for(let i=str.length-1; i>=0; i--){
    if(str[i]===charToReplace){
        str = str.substring(0, i) + newChar + str.substring(i + 1)
        break
    }
}

console.log(str)