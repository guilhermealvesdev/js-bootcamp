//Challenge

let adivinha = function(guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.round(Math.random() * (max - min) + 1);
    
    return randomNum === guess;
}

console.log(adivinha(2));