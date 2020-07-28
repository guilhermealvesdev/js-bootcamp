/*
    Codificando em modo estrito,
    pra diminuir a tolerância com erros.
*/
'use strict';

//Variável que tem o ID do objeto que estamos mexendo, extraído do hash na URL
const noteId = location.hash.substring(1);

//Chamando o conteúdo do localStorage
let notes = getSavedNotes();

//Criando variáveis pros elementos
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const spanElement = document.querySelector("#last-edited");

//Procurando objeto na array Notes, usando o noteId como referência.
let note = notes.find((note) => note.id === noteId);

/*
    Se não existir, ele volta pra tela inicial.
    Observe que aqui estamos usando os princípios dos valores TRUTHY / FALSY.
    
    Isso significa que se note for undefined (que é falsy), virará true,
    e o assign será rodado.
*/
if (!note) {
    location.assign('/index.html')
}

//Atribuindo valores dos campos de título e body de acordo com o conteúdo do objeto;
titleElement.value = note.title;
bodyElement.value = note.body;

//Aqui é mudado o texto do span de "last edited" pra ficar de acordo com o timeStamp do objeto
spanElement.textContent = generateLastEdited(note.updatedAt)

/*
    Aqui, a cada mudança de conteúdo de título, muda-se:

    1. O título do objeto;
    2. A propriedade updatedAt, que, usando moment, gera uma nova timeStamp usando valueOf();
    3. A span de "last edited" muda de acordo com a timestamp passada.
    
    E aí salva-se no localStorage novamente.
*/
titleElement.addEventListener("input", (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    spanElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes);
});

//Aqui, a mesma coisa de acima, apenas que se muda quando o usuário mexer no input de body.
bodyElement.addEventListener("input", (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    spanElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes);
});

//Aqui remove-se o elemento que o usuário estiver editando, salva-se no localStorage, e volta pra tela inicial.
removeElement.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html')
});

/*
    Aqui significa que se o localStorage sofrer qualquer tipo de alteração,
    o renderNotes() será chamado pra atualizar o conteúdo.

    Isso é pra cobrir cenários de quando o usuário tiver duas janelas abertas,
    e o conteúdo mudar em tempo real.
*/
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);

        note = notes.find(function (note){
            return note.id === noteId
        });
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;

        spanElement.textContent = generateLastEdited(note.updatedAt)
    }
})