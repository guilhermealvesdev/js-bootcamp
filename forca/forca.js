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

/*
    Aqui criamos uma função chamada "Chuta Letra" que recebe como parâmetro
    uma letra. É um pouquinho elaborado e confuso, eu sei. Mas dá pra entender, juro.

    Aí convertemos ela pra lowercase, e temos duas variáveis:

    letraUnicaChutada verifica se é uma letra que não foi chutada antes. Então verificamos
    na array letrasChutadas se ela existe (includes). Caso ela não exista (FALSE), então realmente
    é uma letra única, então flipamos pra ela virar TRUE.

    letraErrada só verifica se a letra que foi chutada existe (includes) na array PALAVRA, que é a
    array com as letras separadas da palavra do joguinho. Se ela não existir (FALSE), então a
    letra chutada está errada, então flipamos pra que ela vire TRUE.

    Posto isso, logo abaixo, temos dois ifs.

    Como queremos que apenas as letras que não foram chutadas antes entrem na array
    letrasChutadas, verificamos se letraUnicaChutada é TRUE. Se for, a letra é
    adicionada à array, e ponto.

    O outro if diminui a quantidade de tentativas se dois cenários forem satisfeitos: se a
    letra que foi chutada for única (isto é, não existe na array letrasChutadas) e se a
    letra não existe na array PALAVRA (isto é, foi uma letra chutada errada). Se esses
    dois valores forem TRUE, então as tentativas diminuem por um.
*/

Forca.prototype.chutaLetra = function(letra) {
    letra = letra.toLowerCase();

    const letraUnicaChutada = !this.letrasChutadas.includes(letra);
    const letraErrada = !this.palavra.includes(letra);
    
    if (letraUnicaChutada) {
        this.letrasChutadas.push(letra);
    }

    if (letraUnicaChutada && letraErrada) {
        this.tentativas--;
    }
}

/*
    Aqui criamos um LISTENER pro window quando alguma
    tecla for pressionada.

    Usamos o método String.fromCharCode para traduzir o e.charCode (que retorna um NÚMERO),
    e usamos isso como parâmetro pra função LetraChutada.
*/
window.addEventListener('keypress', function(e) {
    const letraChutada = String.fromCharCode(e.charCode);
    forca1.chutaLetra(letraChutada);
    console.log(forca1.montaForca());
    console.log(`Você só poderá tentar mais ${forca1.tentativas} vezes.`)
});


/*
    Aqui criamos o joguinho.
    A parte importante é o montaForca(), que retorna a Forca em si, com a palavra.
*/
const forca1 = new Forca ('SCHMEICHEL', 6);
console.log(forca1.montaForca());
console.log(`Você só poderá tentar mais ${forca1.tentativas} vezes.`)