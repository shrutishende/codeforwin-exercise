const r = 10

function diaCircle (r){
    let D = 2 * r
    return D
}

//console.log(diaCircle(r))

const circumference= (r)=>{
    let c = 2 * 3.14 * r
    return c
}

const k = circumference(r)

//console.log(k)



const getCircleArea = (r) =>{
    const a = 3.14 * (r*r)
    return a
}

const area = getCircleArea(r)
//console.log(area)