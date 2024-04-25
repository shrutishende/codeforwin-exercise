let str = "I_love_learning_at_Codeforwin.";
const charToReplace = "_";
const newChar = "-";
let newStr=""

//function replaceAll(){
//}

for(let i=0; i<str.length; i++){
    if(str[i] === charToReplace){
newStr+=newChar
    }else{
        newStr+=str[i]
    }
}

console.log(newStr)