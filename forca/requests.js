/*
    Aqui definimos uma função chamada "pegaNomePaís".

    PARÂMETRO: o código do país que estamos procurando.

    Aqui, pequeno gafanhoto, estamos usando HTTPRequest. HTTPRequest é a forma que
    o JS usa para ir buscar conteúdo num endpoint (URL com data, geralmente JSON).

    Aí retornamos uma PROMISE. Promises são usadas em ASSINCRONIA (asynchronous) para
    tratar um valor após ele aparecer. Desta forma, ordenamos o JS o que fazer após o HTTPRequest
    terminar o request.

    Usamos RESOLVE para tratar quando o valor vier corretamente, e REJECT quando der algum problema.

    Toda promise recebe uma função como argumento (CALLBACK), e passamos dois parâmetros pra essa função,
    o resolve e o reject.
    
    REFERÊNCIA PARA PROMISES: https://blog.matheuscastiglioni.com.br/trabalhando-com-promises-em-javascript/
*/
const pegaNomePais = (codigo) => new Promise ((resolve, reject) => {

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
        
        Aí, ordenamos que o RESOLVE da Promise trate esse dado: se deu tudo certo, passamos o país
        que ele foi buscar no objeto e retornamos.

        Caso o readyState seja "4" (isto é, DONE), e o status não for 200, significa que
        houve algo errado, e chamamos o REJECT para dizer que a Promise não foi cumprida.

        Ver referência no caderninho e na MDN.
    */
    xhr.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const pais = data.find((item) => item.alpha2Code === codigo);
            resolve(pais);
        } else if(e.target.readyState === 4) {
            reject("Deu ruim");
        }
    });
});