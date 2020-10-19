

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


//Aqui fazemos request.
const codigoPais = "BR";
const xhr = new XMLHttpRequest();

xhr.open("GET", "http://restcountries.eu/rest/v2/all");
xhr.send();

xhr.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const pais = data.find((item) => item.alpha2Code === codigoPais );

        console.log(pais.name);
    } else if(e.target.readyState === 4) {
        console.log('Deu ruim');
    }
});