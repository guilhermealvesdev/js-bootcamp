/*
    Aqui começamos a usar CLASSE com CONSTRUCTOR.
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
class Pessoa {    
    constructor(nome, sobrenome, idade, interesses = []) {
        this.nome = nome;
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

    pegaBio() {
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

    set nomeCompleto(nomeCompleto) {
        const nomes = nomeCompleto.split(' ');
        this.nome = nomes[0];
        this.sobrenome = nomes[1];
    }
}

class Estudante extends Pessoa {
    constructor(nome, sobrenome, idade, interesses, nota) {
        super(nome, sobrenome, idade, interesses);
        this.nota = nota;
    }

    pegaBio() {
        const status = this.nota >= 50 ? "APROVADO" : "REPROVADO";

        return `${this.nome} está sendo ${status}, está com ${this.nota}.`
    }

    pegaNota() {
        return this.nota;
    }

    mudaNota(valor) {
        this.nota += valor;

        if (this.nota < 0) {
            this.nota = 0;
        }

        if (this.nota > 100) {
            this.nota = 100;
        }

        return this.nota;
    }
}

// const estudante1 = new Estudante("Guilherme", "Alves", "29", ["Cagar", "Memes"], 100);

// console.log(estudante1.pegaBio());
// console.log(estudante1.mudaNota(-50));
// console.log(estudante1.pegaBio());
// console.log(estudante1.mudaNota(-20));
// console.log(estudante1.pegaBio());
// console.log(estudante1.mudaNota(80));
// console.log(estudante1.pegaBio());

 const pessoa1 = new Pessoa('Guilherme', 'Alves', 29, ['Memes', 'Front-End', 'Palmeiras', 'Troféus', 'Cagar']);
// const pessoa2 = new Pessoa('Aline', 'Oliveira', 34, ['Jornalismo', 'Blogueiras', 'Dormir']);
// const pessoa3 = new Pessoa('Mariana', 'Peduto', 24, ['Palmeiras']);

pessoa1.nomeCompleto = "Amaury Júnior";
console.log(pessoa1.nome)
// console.log(pessoa2.pegaBio());
// console.log(pessoa3.pegaBio());