const str = "I love programming. I love Codeforwin"

let search = "o"

let count = 0

for(let i=0; i<str.length; i++){
    if(str[i]===search){
        count++

    }
}

console.log(count)