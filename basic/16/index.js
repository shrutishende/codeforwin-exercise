const sub1=95
const sub2=76
const sub3=85
const sub4=90
const sub5=89

const total = (a,b,c,d,e)=>{
    const z = a+b+c+d+e
    return z
}
const totalMarks = total(sub1,sub2,sub3,sub4,sub5)
console.log(totalMarks)
//console.log(total(sub1,sub2,sub3,sub4,sub5))

const avg = ()=>{
  const  avgTotal = totalMarks/5
    return avgTotal
}
const avgMark=avg(sub1,sub2,sub3,sub4,sub5)
console.log(avgMark)


const precent = ()=>{
  const  cent = (totalMarks/500) *100
    return cent
}

console.log(precent())