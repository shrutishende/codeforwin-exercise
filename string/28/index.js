const str ="I love programming!"
let search = "love"

function findFirstOccurrence(str,search){
    for(let i=0; i<str.length; i++){
        if (str.substring(i, i + search.length) === search) {
            return i;
        }
    }
    return -1
}

const index=findFirstOccurrence(str,search)

if (index === -1) {
    console.log("Word not found");
} else {
    console.log("The first occurrence of the word is at index", index);
}