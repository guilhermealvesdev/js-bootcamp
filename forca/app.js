/*
    Selecionando os elementos DOM
*/
const $palavra = document.querySelector('.palavra');
const $tentativas = document.querySelector('.tentativas');

/*
    Aqui criamos um LISTENER pro window quando alguma
    tecla for pressionada.

    Usamos o método String.fromCharCode para traduzir o e.charCode (que retorna um NÚMERO),
    e usamos isso como parâmetro pra função LetraChutada.
*/

window.addEventListener('keypress', function(e) {
    const letraChutada = String.fromCharCode(e.charCode);
    forca1.chutaLetra(letraChutada);
    $palavra.textContent = forca1.montaForca();
    $tentativas.textContent = forca1.tentativas;
    console.log(forca1.checaEstado());
});


/*
    Aqui criamos o joguinho.
    A parte importante é o montaForca(), que retorna a Forca em si, com a palavra.
*/
const forca1 = new Forca ('BAR', 2);
$palavra.textContent = forca1.montaForca();
$tentativas.textContent = forca1.tentativas;
console.log(forca1.checaEstado());