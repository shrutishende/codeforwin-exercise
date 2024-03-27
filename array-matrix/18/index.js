const arr = [10, 12, 20, 25, 13, 10, 9, 40, 60, 5]

let found =0
for (let i=0; i<arr.length; i++){
    if(arr[i]===25){
        found=1
        break
    }
}

if(found === 1)
{
    console.log("\n%d is found at position", 25);
}
else
{
    console.log("\n%d is not found in the array", 25);
}