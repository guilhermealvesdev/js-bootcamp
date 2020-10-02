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

window.addEventListener('keypress', function(e) {
    const letraChutada = String.fromCharCode(e.charCode);
    forca1.chutaLetra(letraChutada);
    $palavra.textContent = forca1.montaForca();
    $tentativasMsg.textContent = forca1.retornaMensagem();
});


/*
    Aqui criamos o joguinho.
    A parte importante é o montaForca(), que retorna a Forca em si, com a palavra.
*/
const forca1 = new Forca ('SCHMEICHEL', 2);
$palavra.textContent = forca1.montaForca();
$tentativasMsg.textContent = forca1.retornaMensagem();