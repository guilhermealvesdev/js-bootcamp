/*
    Codificando em modo estrito,
    pra diminuir a tolerância com erros.
*/
'use strict';

/*
    Função que pega as notas no localStorage.
    Ela checa se há algum dado local (alguma NOTA que o usuário colocou).
    Se sim, atualizar a array tarefas.
    Se não, ele retorna uma nova array.
*/
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }
}

/*
    Função que salva as notas no localStorage.

    PARÂMETRO: é a array que ele vai usar para ler o conteúdo e salvar a tarefa.
*/
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

/*
    Função que remove a nota.

    PARÂMETRO: o ID da nota que se deseja retirar.
*/
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

/*
    Função que gera elemento pra cada item da array.

    PARÂMETRO: A array que é desejada que o conteúdo seja renderizado.
*/
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    //Botão de remover
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //Colocando um link no botão que leva à página edit.html, com o id
    textEl.setAttribute("href", `/edit.html#${note.id}`)

    /*
        Aqui adiciona-se o conteúdo do input do título (title) à propriedade 'title' do objeto note.
        Se não houver nenhum, chama-se um valor default.
    */
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    noteEl.appendChild(textEl)

    return noteEl
}

/*
    Função que renderiza as notas na tela.

    PARÂMETROS: a array de notas, e a array de filtros.
*/
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

/*
    Função que gera a mensagem de quando a nota foi mudada pela última vez
*/ 
const generateLastEdited = ((timestamp) => `Last edited: ${moment(timestamp).fromNow()}`);


/*
    Função que organiza as arrays. Aqui é elaborado, mas dá pra entender.

    PARÂMETROS: A array que se deseja organizar, e COMO se organizar, se alfabético, por último criado, etc.

    No caso, a função SORT precisa do callback (COMPARE FUNCTION, que é opcional), já que estamos trabalhando
    com objetos.
    Essa compare function recebe dois parâmetros, A e B, que serão usados para comparação.

    A inteligência no caso é comparar os dois usando maior ou menor.

    Organizando por "byEdited", significa que queremos usar a propriedade updatedAt (modificado por último), que
    é uma timestamp (logo, um número). Se o timestamp de A for menor que o de B (isto é, mais VELHO), retorna-se -1. Isto é,
    A virá antes de B.

    Se o B for maior (mais velho) que A, retorna-se 1. Isto é, B virá antes de A.

    Se ambos forem iguais, retorna-se 0.

    Isso se aplica pro timestamp de byCreated.

    Na alfabética, é utilizado um processo parecido, mas tem que ser usado o toLowerCase() pra ser ignorado o case
    sensitive. Se o índice de caractere do título de A for MENOR que o de B, retorna-se -1, como explicado acima..
*/
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort ((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}