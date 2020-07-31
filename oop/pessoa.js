/*
    Aqui começamos a usar CONSTRUCTOR.
    Constructor nada mais é do que uma função usada para criar
    e inicializar um objeto.

    Aqui, em Pessoa (sempre com a primeira letra em caixa alta), criamos
    um constructor que atribui os parâmetros nome, sobrenome, idade e interesses (que é uma array),
    às propriedades do objeto que foi criado.

    Assim, criamos um objeto (também conhecido como INSTÂNCIA), e retornamos
    ao usuário.

    Não há necessidade de usar RETURN, pois já é nativo do constructor.

    Como estamos usando THIS, não podemos usar arrow functions.
*/
const Pessoa = function(nome, sobrenome, idade, interesses) {
    this.nome
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.interesses = interesses;
}

/*
    Aqui criamos uma função chamada pegaBio que monta e retorna
    uma string com o nome da pessoa, a sua idade, e o que ela
    gosta de fazer.

    Aqui estamos usando PROTOTYPE, que significa que é uma propriedade (no caso, como
    é uma função, um método) que está sendo adicionada ao construtor (objeto).
    Se não houvesse esse PROTOTYPE na sintaxe, o JS daria erro.

    Como estamos usando PROTOTYPE, ela já está sendo vinculada ao
    constructor de Pessoa.
*/
Pessoa.prototype.pegaBio = function() {
    let bio = `${this.nome} tem ${this.idade} anos.`;

    /*
        Aqui fazemos um FOREACH pra cada item da array
        e adicionamos à template string.

        Detalhe importante: Aqui não podemos usar função normal,
        pois o THIS usado dentro do forEach não vai ler o conteúdo
        que está dentro de INTERESSES. Nesse caso, utilizamos
        a arrow function, que vai procurar o valor paternal
        do this na função acima (no caso, o método pegaBio).
    */
    this.interesses.forEach((item, index) => {
        if (this.interesses.length <= 1) {
            bio += ` ${this.nome} gosta de ${item}.`
        } else {
            if (index === 0) {
                bio += ` ${this.nome} gosta de ${item}`
            } else if (index === this.interesses.length - 1) {
                bio += ` e de ${item}.`
            } else {
                bio += `, de ${item}`
            }
        }
    });

    return bio
}

const pessoa1 = new Pessoa('Guilherme', 'Alves', 29, ['Memes', 'Front-End', 'Palmeiras', 'Troféus', 'Cagar']);
const pessoa2 = new Pessoa('Aline', 'Oliveira', 34, ['Jornalismo', 'Blogueiras', 'Dormir']);
const pessoa3 = new Pessoa('Mariana', 'Peduto', 24, ['Palmeiras']);

console.log(pessoa1.pegaBio());
console.log(pessoa2.pegaBio());
console.log(pessoa3.pegaBio());