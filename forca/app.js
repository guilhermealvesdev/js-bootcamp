

/*
    Selecionando os elementos DOM
*/
const $palavra = document.querySelector('.palavra');
const $tentativas = document.querySelector('.tentativas');
const $tentativasMsg = document.querySelector('.tentativasMsg');

/*
    Aqui criamos um LISTENER pro window quando alguma
    tecla for pressionada.

    Usamos o método String.fromCharCode para traduzir o e.charCode (que retorna um NÚMERO),
    e usamos isso como parâmetro pra função LetraChutada.

    Depois, os elementos de palavra e mensagem são associados aos respectivos valores.
*/

window.addEventListener('keypress', (e) => {
    const letraChutada = String.fromCharCode(e.charCode);
    forca1.chutaLetra(letraChutada);
    $palavra.textContent = forca1.forca;
    $tentativasMsg.textContent = forca1.retornaMensagem;
});


/*
    Aqui criamos o joguinho.
    A parte importante é o montaForca(), que retorna a Forca em si, com a palavra.
*/
const forca1 = new Forca ('CAR PARTS', 2);
$palavra.textContent = forca1.forca;
$tentativasMsg.textContent = forca1.retornaMensagem;


/*
    Pegando o nome de um país chamando uma função chamada
    "pegaNomePais" que usa um HTTP Request dentro de requests.js.

    Como essa função "pegaNomePais" retorna uma PROMISE, precisamos
    tratar a resposta com um THEN. O THEN é uma função que recebe
    dois parâmetros: o RESOLVE, e o REJECT, nesta ordem.
*/
pegaNomePais("BR").then((pais) => {
    return pais.name;
}).catch(err => {
    console.log(err);
});


pegaLocalizacao().then((data) => {
    return pegaNomePais(data.country);
}).then((data) => {
    console.log(data.name);
}).catch(err => {
    console.log(err);
});