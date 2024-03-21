let N = 5


for(let i=1; i<=N; i++){

    for (let j = 1; j<=N; j++){
        if(i===1 || j===1 || i===N || j === N){
          //  process.stdout.write("a")
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }


   console.log("\n")
}