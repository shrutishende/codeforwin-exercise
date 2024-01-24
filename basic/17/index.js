const p = 1200
const t =2
const r = 5.4

const simpleInterest= (p,t,r)=>{
    const si = (p*t*r)/100
    return si
}

const total = simpleInterest(p,t,r)
console.log(total)

const compoundInterest = (p,r,t)=>{
    const ci =p* Math.pow((1+r/100),t)
    return ci
}

const totalCI = compoundInterest(p,t,r)
console.log(totalCI)