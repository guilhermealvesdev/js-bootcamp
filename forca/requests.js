/*
    Aqui definimos uma função chamada "pegaNomePaís".

    PARÂMETROS: o código do país que estamos procurando, e a função
    que vai fazer algo dentro desse código (callback).

    Por que estamos usando callback e não return? Porque aqui, pequeno
    gafanhoto, estamos usando HTTPRequest. HTTPRequest é a forma que
    o JS usa para ir buscar conteúdo num endpoint (URL com data, geralmente JSON).

    Returns, etc, não poderiam ser usados, pois violariam a ASSINCRONIA (asynchronous) do
    JavaScript. Dessa forma, garantimos que uma função será disparada após
    resposta do HTTPRequest e o resto do código (do outro arquivo) pode continuar
    normalmente, ao invés de termos que esperar resposta para prosseguir.
*/
const pegaNomePais = (codigo, callback) => {

    //Aqui criamos uma variável que chama o HTTPRequest. Lembra das _xhr do Marcio? É isso.
    const xhr = new XMLHttpRequest();

    /*
        Aqui chamamos dois métodos vitais pra funcionar o request: open (passando GET e a URL que queremos),
        e send, para mandar o request.
    */
    xhr.open("GET", "http://restcountries.eu/rest/v2/all");
    xhr.send();

    /*
        Aqui colocamos o listener com "readystatechange", que vai ser disparado
        quando houver qualquer mudança no request. QUALQUER mesmo.

        Tanto é que usamos o "readyState" do "e.target" para ver se a
        o código é 4 (que significa que está DONE), e se o status é 200 (significando que está OK).

        Desta forma, sabemos que o request aconteceu direitinho, e ele roda
        o tratamento do retorno (usando JSON.parse para transformar conteúdo JSON em um objeto em uma array, no caso)
        e rodando um find para procurar o código "alpha2Code" do objeto de acordo com o parâmetro codigo
        que passamos na chamada da função.
        
        Aí, ordenamos que a função que passamos (callback) trate esse dado: se deu tudo certo,
        passamos undefined como erro (que é o primeiro parâmetro) e o país como segundo, pra
        mostrar que deu certo.

        Caso o readyState seja "4" (isto é, DONE), e o status não for 200, significa que
        houve algo errado, e a chamada da função terá apenas o parâmetro de erro ("deu ruim"),
        já que o segundo é undefined por natureza.

        Ver referência no caderninho e na MDN.
    */
    xhr.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const pais = data.find((item) => item.alpha2Code === codigo);
            callback(undefined, pais);
        } else if(e.target.readyState === 4) {
            callback("Deu ruim");
        }
    });
}