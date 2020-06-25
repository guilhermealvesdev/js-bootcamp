const toDos = [
    {
        activity:"Tomar banho",
        completed: true
    },
    {
        activity:"Escovar os dentes",
        completed: false
    },
    {
        activity: "Ir para o trabalho",
        completed: true
    },
    {  
        activity: "Ir para a academia",
        completed: false
    },
    {
        activity: "Dormir",
        completed: false
    }
];

const filtro = {
    texto: '',
    ocultaCompletas: false
}

//Função que renderiza todos os itens da array
const renderizaFiltro = function(tarefas, filtro){

    /*
        Cria uma nova array (o filter cria) que retorna todos os itens da array TAREFAS (que veio no parâmetro)
        para armazenar apenas os que estiverem de acordo com o texto digitado no objeto filtro,
        que por sua vez é alimentado toda vez quando o usuário digita no campo de input
    */

    let filtrados = tarefas.filter(function(item){
        return item.activity.toLowerCase().includes(filtro.texto.toLowerCase());
    });

    /*
        Aqui é elaborado. Mas dá pra entender, juro.

        Pra retornar um valor no filter(), é preciso que alguma condicional seja TRUE.

        No caso, o JS pega a array "filtrados" e atualiza o conteúdo para mostar (return) apenas
        os valores que estiverem o oposto do filtro.ocultaCompletas (isto é, o checkbox. Se o checkbox
        estiver TRUE, o primeiro valor do return vira FALSE), OU o valor oposto do completed do item que
        ele usou para comparar.

        Vamos de novo: ao checar o checkbox, o !filtro.ocultaCompletas estará sempre FALSE (porque checado, está TRUE
        no DOM). Se deixar assim, nunca retornará nada com o checkbox ativo, certo? Então, precisamos colocar outra condicional,
        pro JS ir buscar os conteúdos da array principal que estão como completed para comparar.

        Aí, o JS procura no item que ele está comparando se é TRUE or FALSE. Como queremos que apareça
        apenas as que não estão completadas, a gente pede pra ele buscar o contrário de completed.

        Logo, as tarefas que estiverem na array com valor TRUE (isto é, completas), virarão FALSE no return, logo,
        não aparecerão se o valor do check estiver FALSE (porque os dois valores darão FALSE no final, e o filter() precisa
        de um TRUE pra renderizar algo). Se o valor do objeto estiver como FALSE (isto é, incompleto), virará TRUE no
        return, e aparecerá na lista final (uma tarefa que não foi completada ainda).
    */
    filtrados = filtrados.filter(function(item){
        return !filtro.ocultaCompletas || !item.completed;
    });

    //Filtrar incompletos
    const incompleteTodos = filtrados.filter(function(todo){
        return !todo.completed;
    });
    
    document.querySelector('#lista').innerHTML = '';

    const resumo = document.createElement('h2');
    resumo.textContent = `Você tem ${incompleteTodos.length} atividades pra fazer`
    document.querySelector('#lista').appendChild(resumo);
    
    filtrados.forEach(function(item){
        const p = document.createElement('p');
        p.textContent = item.activity;
        document.querySelector("#lista").appendChild(p);
    });
};

renderizaFiltro(toDos, filtro);

//Listeners

//Listener pra quando o usuário digitar no campo de input
document.querySelector('#filtrar').addEventListener('input', function(e){
    filtro.texto = e.target.value;    
    renderizaFiltro(toDos, filtro);
});


//Adicionar
document.querySelector('#formulario').addEventListener('submit', function(e){
    e.preventDefault();
    toDos.push({
        activity:e.target.elements.todo.value,
        completed:false
    });

    document.querySelector("#lista").innerHTML = "";
    renderizaFiltro(toDos, filtro);
    
    e.target.elements.todo.value = "";
});

//Ocultar completados
document.querySelector('#oculta-completados').addEventListener('change', function(e){
    filtro.ocultaCompletas = e.target.checked;
    renderizaFiltro (toDos, filtro);
})