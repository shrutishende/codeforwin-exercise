let sum =0
let f0=0
let f1 =1
for (let i=1; i<=10; i++){
    sum = f0+f1
    f0=f1
    f1=sum

    console.log(sum)
}