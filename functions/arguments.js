let calculateTip = function (total, tipPercent = 20) {
    let tip = total * (tipPercent/100);
    return `A ${tipPercent}% tip on ${total} would be ${tip}.`;
}

console.log(calculateTip(385, 50));