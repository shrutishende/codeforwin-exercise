const num1 =12
const num2= 30


let lcm =1

let max = (num1>num2) ? num1 : num2
let i = max

while(1){
    if(i % num1===0 && i%num2===0){
lcm =i
        break
    }
    i += max;
}

console.log(lcm)