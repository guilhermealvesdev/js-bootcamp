/*
    Array principal de tarefas.
*/
const tarefas = pegaTarefas();

/*
    Objeto que cuida do filtro.
*/
const filtro = {
    texto: '',
    ocultaCompletas: false
}

/*
    Aqui é chamado a função renderizaFiltro, que busca
    os conteúdos de acordo com o valor inicial da array, e do objeto filtro.
*/
renderizaFiltro(tarefas, filtro);


/********************************
 LISTENERS
*******************************/

//Listener pra quando o usuário digitar no campo de input
document.querySelector('#filtrar').addEventListener('input', function(e){
    filtro.texto = e.target.value;    
    renderizaFiltro(tarefas, filtro);
});


/*
    Adicionar atividade pra fazer à lista.

    O localStorage.setItem pega o valor que foi atualizado à array principal (usando PUSH)
    e transforma numa string (usando JSON.stringify) pra colocar essa string no localStorage.

    Assim, na próxima vez que o usuário entrar na página, ele vai buscar (no início do arquivo está esse código)
    no localStorage e renderizar a nova array atualizada.
*/
document.querySelector('#formulario').addEventListener('submit', function(e){
    e.preventDefault();
    tarefas.push({
        activity:e.target.elements.tarefa.value,
        completed:false
    });

    salvaTarefas(tarefas);

    document.querySelector("#lista").innerHTML = "";
    renderizaFiltro(tarefas, filtro);
    
    e.target.elements.tarefa.value = "";
});

//Ocultar completados
document.querySelector('#oculta-completados').addEventListener('change', function(e){
    filtro.ocultaCompletas = e.target.checked;
    renderizaFiltro (tarefas, filtro);
})