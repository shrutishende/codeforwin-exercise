const num1 =12
const num2 = 30

let hcf =1

const min = (num1 <num2)? num1 : num2
console.log(min)

for (let i =1; i<=min;i++){
    if(num1 % i ===0 && num2 % i ===0 ){
        hcf =i
    }
}

console.log(hcf)
// let fact1 =[]
// let fact2 =[]
//
// let uniq = []
//
//     for (let i=1; i<=num1; i++){
//         if(num1 % i === 0){
//             fact1.push(i)
//         }
//     }
//
// console.log(fact1)
//
// for (let i=1; i<=num2; i++){
//     if(num2 % i === 0){
//         fact2.push(i)
//     }
// }
//
// console.log(fact2)
//
//
// fact1.forEach(ele1 => {
//     fact2.forEach(ele2 => ele1 === ele2 && uniq.push(ele1));
// });
//
// console.log(uniq)
//
// let HCF = uniq[0]
//
// for (let i =0 ; i<=uniq.length; i++){
//     if(uniq[i]>HCF){
//         HCF=uniq[i]
//     }
// }
// console.log(HCF)