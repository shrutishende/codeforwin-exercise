function natural(L,R){
    if(L>R){
        return
    }
console.log(L)
    natural(L+1,R)
}

console.log(natural(1,10))