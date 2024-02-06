const a =8
const b =-4
const c =-2

const discriminant = (b*b)-(4*a*c)

if (discriminant >0){
    let root1 =  (-b + Math.sqrt(discriminant)) / (2*a)
    let root2 =  (-b - Math.sqrt(discriminant)) / (2*a)
    console.log(root1,root2)
}

if (discriminant === 0 ){
    let root1 = -b / (2*a)
    let root2 = -b / (2*a)
}