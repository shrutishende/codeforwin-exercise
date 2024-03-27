const arr1 = [1, 4, 6, 9,15]

const arr2 = [2, 5, 8, 10]

const  mergeArray =[]

let i=0
let j=0

while (i<arr1.length && j < arr2.length){
    if(arr1[i]<arr2[j]){
        mergeArray.push(arr1[i])
        i++
    }else {
        mergeArray.push(arr2[j])
        j++
    }
}

while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
}



console.log(mergeArray)