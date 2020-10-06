/*
    Criando uma classe de Forca.
*/

class Forca {
    /*
        Constructor:

        Tem três propriedades.
        1 - É a palavra em si, que é convertida para lowercase, e separada numa array com as letras da palavra.
        2 - Quantidade de tentativas que o usuário terá.
        3 - Uma array que é populada de acordo com as letras que o usuário chutou.

        PARÂMETROS: a palavra que vai ser adivinhada,
        e as tentativas que o usuário terá.
    */
    constructor(palavra, tentativas) {
        this.palavra = palavra.toLowerCase().split("");
        this.tentativas = tentativas;
        this.letrasChutadas = [];
        this.estado = "Jogando"
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
    montaForca() {
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

        Primeiro convertemos a palavra pra lowercase, e temos duas variáveis:

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

        Há também dois detalhes importantes nessa função: uma verificação se o checaEstado retorna qualquer coisa que
        não seja "Jogando", e retorna nada, para forçar o final da função, e o checaEstado no final de tudo para
        atualizar o estado que o usuário está.
    */
    chutaLetra(letra) {
       letra = letra.toLowerCase();

        const letraUnicaChutada = !this.letrasChutadas.includes(letra);
        const letraErrada = !this.palavra.includes(letra);

        if (this.checaEstado() !== "Jogando") { 
            return;
        }

        if (letraUnicaChutada) {
            this.letrasChutadas.push(letra);
        }

        if (letraUnicaChutada && letraErrada) {
            this.tentativas--;
        }

        this.checaEstado();
    }

    /*
        Aqui criamos uma função chamada checaEstado que verifica se
        o usuário está "Jogando" (valor padrão), "Falhou" (quando acabaram as tentativas)
        ou se "Venceu" (usando a função INCLUDES pra ver se há algum asterisco na palavra final)
    */
   
    checaEstado() {
       if (this.tentativas === 0) {
           this.estado = "Falhou";
        } else if (!this.montaForca().includes("*")) {
            this.estado = "Venceu"
        } else {
            return this.estado;
        }
    }

    /*
        Aqui criamos uma função chamada retornaMensagem que verifica o estado
        que o usuário tem no jogo, e retorna uma mensagem apropriada para
        cada estado.

        O .join('') no "Falhou" junta (join) todas os itens da array, e, como passamos
        como parâmetro uma string vazia, ele não vai colocar nada entre os itens da array
        na hora de juntar.
    */
    retornaMensagem() {
       if (this.estado === "Jogando") {
           return `Tentativas restantes: ${this.tentativas}`
        } else if (this.estado === "Falhou") {
            return `Que pena! A palavra era ${this.palavra.join('')}.`
        } else {
            return `Parabéns! Você adivinhou a palavra.`
        }
    }
}