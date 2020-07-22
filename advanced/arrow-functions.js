const pessoas = [{
    nome: 'Guilherme',
    idade: 29
}, {
    nome: 'Aline',
    idade: 34
}, {
    nome: 'Mariana',
    idade: 24
}];

const idade24 = pessoas.find((pessoa) => pessoa.idade === 24);

console.log(idade24);