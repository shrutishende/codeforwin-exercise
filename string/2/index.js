function copyString(sourceString, destinationString) {
    for (let i = 0; i < sourceString.length; i++) {
        destinationString[i] = sourceString[i];
    }
}

let sourceString = "Hello, world!";
let destinationString = new Array(sourceString.length);

copyString(sourceString, destinationString);

console.log(destinationString);