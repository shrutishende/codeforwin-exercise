let length = 1000

const convertCentimeterToMeter = (l)=>{
    let lengthInMeter = l / 100
    return lengthInMeter
}

const inMeter = convertCentimeterToMeter(length)
console.log(inMeter)


// 1km = 100000 cm
const convertCentimeterToKilometer = (l)=>{
let lengthInKilometer = l / 100000
    return lengthInKilometer
}

const inKilometer = convertCentimeterToKilometer(length)
console.log(inKilometer)