let converteTemp = function(celsius){
    return {
        celsius: `${celsius}°C em Celsius é...bem, ${celsius}°C.`,
        fahrenheit: `${celsius}°C em Fahrenheit é ${Math.round(celsius * 1.8 + 32)}°F`,
        kelvin: `${celsius}°C em Kelvin é ${Math.round(celsius + 273.15)}K`
    }
}

console.log(converteTemp(13).kelvin);