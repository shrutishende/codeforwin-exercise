const power = 2
const base = 5

const computePower =(b,p)=>{
    // const c = Math.pow(b ,p)
    // return c

    const c = b ** p
    return c
}

const powerOfNumber = computePower(base,power)
console.log(powerOfNumber)