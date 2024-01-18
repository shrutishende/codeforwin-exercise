 const fahrenheit = 205

 const convertFahrenheitToCelcius = (f)=>{
    const celcius = (f - 32) * 5/9
     return celcius
 }

 const inCelcius = convertFahrenheitToCelcius(fahrenheit)
 console.log((inCelcius))