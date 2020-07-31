/*
    Criando um constructor de Forca.

    Tem três propriedades.
    1 - É a palavra em si, que é convertida para lowercase, e separada numa array com as letras da palavra.
    2 - Quantidade de tentativas que o usuário terá.
    3 - Uma array que é populada de acordo com as letras que o usuário chutou.

    PARÂMETROS: a palavra que vai ser adivinhada,
    e as tentativas que o usuário terá.
*/

const Forca = function(palavra, tentativas) {
    this.palavra = palavra.toLowerCase().split("");
    this.tentativas = tentativas;
    this.letrasChutadas = [];
}

/*
    Aqui criamos uma função para o construtor (usando PROTOTYPE)
    e fazemos o seguinte: criamos uma string vazia,
    e fazemos um FOREACH na array de palavra para
    verificar se a letra que está na array PALAVRA (com as letras)
    está também na array LETRASCHUTADAS (com as letras que o usuário chutou).

    Se ela estiver, ela é inserida na string. Isso inclui também caso a
    letra seja um espaço.

    Se ela não estiver, o JS adiciona um asterisco à string.

    Finalmente, ela retorna a string pro usuário.
*/
Forca.prototype.montaForca = function() {
    let forca = '';

    this.palavra.forEach((letra) => {
        if (this.letrasChutadas.includes(letra) || letra === ' ') {
            forca += letra;
        } else {
            forca += "*"
        }
    });

    return forca;
}

const forca1 = new Forca ('SCHMEICHEL', 6);
console.log(forca1.montaForca());