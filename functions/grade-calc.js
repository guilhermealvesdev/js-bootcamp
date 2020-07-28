/*
    Função que calcula a média de um estudante.
    // students score, total possible score
    // A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

    Ele verifica antes de calcular se algum dos dois parâmetros não são um número.
    Se algum deles não for, o JS joga (throw) um erro, dizendo apenas números.

    Isso funciona de certa forma igual ao RETURN, cancelando todo o conteúdo
    que vem abaixo do código caso as condições sejam satisfeitas.
*/

let calculateGrade = function(score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error ("Apenas números, por favor.")
    }

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

/*
    Este try/catch trata caso haja algo errado na hora de chamar
    a função calculateGrade.
    Caso aconteça algum problema, ele chama o console.log personalizado.
*/

try {
    //const resultado = calculateGrade(77, 80)
    const resultado = calculateGrade('botao', 'padrao');
    console.log(resultado);
} catch (e) {
    console.log(e.message)
}