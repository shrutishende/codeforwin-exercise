const mat = [[1,2,3],[4,5,6],[7,8,9]]
const multiplier=2

let res = [[0,0,0],[0,0,0],[0,0,0]]

for(let i=0; i<mat.length; i++){

    for(let j=0; j<mat.length; j++){
        res[i][j] = multiplier * mat[i][j]
    }

}

console.log(res)