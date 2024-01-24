const p = 1200
const t =2
const r = 5.4

const simpleInterest= (p,t,r)=>{
    const si = (p*t*r)/100
    return si
}

const total = simpleInterest(p,t,r)
console.log(total)