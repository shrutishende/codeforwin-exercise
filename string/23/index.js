let str = " I love programming. I love Codeforwin."
const search = "I"
let newstr =""
for(let i=0; i<str.length; i++){
    if(str[i]!==search){
newstr += str[i]
    }
}
console.log(newstr)