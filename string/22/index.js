let str = " I love programming. I love Codeforwin."
const search = "I"

for(let i=str.length-1; i>=0; i--){
    let lastIndex=1
    if(str[i]=== search){
        lastIndex =i
        str = str.substring(0, i) + str.substring(i + 1);
        break
    }
}
console.log(str)
