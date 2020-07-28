/*
    Criando um constructor de Forca.

    PARÂMETROS: a palavra que vai ser adivinhada,
    e as tentativas que o usuário terá.
*/

const Forca = function(palavra, tentativas) {
    this.palavra = palavra;
    this.tentativas = tentativas;
}

const forca1 = new Forca ('california', 3);
const forca2 = new Forca ('jabadamazo', 6);

console.log(forca1);
console.log(forca2);