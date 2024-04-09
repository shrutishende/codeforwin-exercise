const str = "I love Codeforwin"

let search = "o"

for(let i=0; i<str.length; i++){
    if(str[i]===search){
        console.log(i)
        break
    }
}