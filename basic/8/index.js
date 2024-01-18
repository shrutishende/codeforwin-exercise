const celcius = 100

const celciusTofahrenheit = (c)=>{
    const f = (c * 9/5) + 32
    return f
}

const inFahrenheit = celciusTofahrenheit(celcius)
console.log(inFahrenheit)