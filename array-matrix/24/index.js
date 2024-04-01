let mat1=[[1,2,3],[4,5,6],[7,8,9]]
let mat2=[[9,8,7],[6,5,4],[3,2,1]]

let result=[[0,0,0],[0,0,0],[0,0,0]]

for (let i=0; i<mat1.length; i++){
    for (let j=0; j<mat1[0].length; j++){
        result[i][j]=mat1[i][j]-mat2[i][j]
    }
}

console.log(result)