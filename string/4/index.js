let str1="Learn at Codeforwin."
let str2="Learn at Codeforwin."

function compare (str1, str2){
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true
}

console.log(compare(str1,str2))