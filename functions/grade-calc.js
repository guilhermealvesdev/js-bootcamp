// students score, total possible score
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let calculateGrade = function(score, totalScore) {
    let finalScore = (score / totalScore) * 100;

    let grade;

    if (finalScore === 100) {
        grade = "A+"
    } else if (finalScore >= 90) {
        grade = "A";
    } else if (finalScore >= 80) {
        grade = "B";
    } else if (finalScore >= 70) {
        grade = "C";
    } else if (finalScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return `Você tirou um ${grade} (${finalScore}%).`
}

console.log(calculateGrade(77, 80));