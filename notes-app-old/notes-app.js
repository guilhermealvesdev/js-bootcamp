/*
    Codificando em modo estrito,
    pra diminuir a tolerância com erros.
*/
'use strict';

//Variável com a array que pega o conteúdo do localStorage
let notes = getSavedNotes()

//Objeto com os filtros
const filters = {
    searchText: '',
    sortBy:'byEdited'
}

renderNotes(notes, filters)

/*
    Aqui cria-se um listener pro botão de criar nota.
    Ele cria um ID e um timeStamp único, cria um objeto e adiciona à array NOTES.
    Além disso, salva-se no localStorage, e leva o usuário à página de edit da nota.
*/
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    const timestamp = moment().valueOf();

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`);
})

/*
    Aqui, a cada mudança do input de pesquisa, o objeto de filtro muda,
    e a função de renderizar é chamada atualizada.
*/
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

/*
    Aqui é a mesma coisa, só que só é disparado quando o usuário mudar
    o dropdown de "filtrar por".
*/
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})

/*
    Aqui significa que se o localStorage sofrer qualquer tipo de alteração,
    o renderNotes() será chamado pra atualizar o conteúdo.

    Isso é pra cobrir cenários de quando o usuário tiver duas janelas abertas,
    e o conteúdo mudar em tempo real.
*/
window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters)
    }
});



/*
    Experimentos com datas.
    É melhor usar o moment.js.
*/
const data1 = new Date("June 16 1999");
const data2 = new Date("July 12 2012");

if (data1.getTime() < data2.getTime()) {
    // console.log(data1.toString());
} else {
    // console.log(data2.toString());
}

/*
    Mexendo com moment.js
    Criando aqui um momento (chamado agora).
    Setando a data do moment (agora) para 21 de dezembro de 1990.
    O MONTH é 11 porque começa do zero.

    Mais informações: https://momentjs.com/docs/#/get-set/date/ e https://momentjs.com/docs/#/displaying/
*/
const agora = moment();
// agora.year(1990).month(11).date(21);
// console.log(agora.format('MMM D, YYYY'));