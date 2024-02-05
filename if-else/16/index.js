const a = 30
const b= 40
const c =40

if( a === b && b === c){
    console.log("equilateral triangle")
} else if (a===b || b===c || a===c){
    console.log("isosceles triangle")
}else{
    console.log("scalene triangle")
}