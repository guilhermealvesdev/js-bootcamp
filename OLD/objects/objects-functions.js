let myBook = {
    name: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    name: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//Challenge

function temp(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    let kelvin = celsius + 273.15

    return {
        fahrenheit: `${celsius}°C em fahrenheit é ${fahrenheit}°F`,
        kelvin: `${celsius}°C em fahrenheit é ${kelvin}K`
    }
}

console.log(temp(25))