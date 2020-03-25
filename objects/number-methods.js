let makeGuess = function(guess) {
    let min = 1;
    let max = 5;
    let number = Math.floor(Math.random() * max - min + 1);
    console.log(number);
    return number === guess;
}

console.log(makeGuess(1))