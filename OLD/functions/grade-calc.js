const gradeCalc = function (studentScore, totalPossible) {
    let percent = (studentScore / totalPossible) * 100
    let grade;

    if (percent >= 90) {
        grade = "A"
    } else if (percent <= 89 && percent >= 80) {
        grade = "B"
    } else if (percent <= 79 && percent >= 70) {
        grade = "C"
    } else if (percent <= 69 && percent >= 60) {
        grade = "D"
    } else {
        grade = "E"
    }

    return `Você tirou ${grade} (${percent}%)!`
}

console.log(gradeCalc(18, 20));