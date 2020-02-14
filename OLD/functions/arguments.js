let totalTip = function (total, tipPercent = .2) {
    let tip = total * tipPercent;

    return tip
}

let tip = totalTip(40, .25);
let total = 40;


console.log(`A $${tip} tip for the full $${total}`);