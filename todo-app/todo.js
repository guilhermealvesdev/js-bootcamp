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

    //Itens filtrados
    let filtrados = tarefas.filter(function(item){
        return item.activity.toLowerCase().includes(filtro.texto.toLowerCase());
    });

    //Olha, meu amigo, nem eu entendi isso aqui. Assiste de novo a aula 59, por favor.
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