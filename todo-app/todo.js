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

//Filtrar tudo do objeto pra procurar
const incompleteTodos = toDos.filter(function(todo){
    return !todo.completed;
});

console.log(incompleteTodos);


//Colocar tudo em vários <p>
toDos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.activity;
    document.querySelector('body').appendChild(p);
});


//Listeners

document.querySelector('#campo').addEventListener('input', function(e){
    console.log(e.target.value);
});

document.querySelector('#adicionar').addEventListener('click', function(){
    console.log('adicionar');
});

document.querySelector('#remover').addEventListener('click', function(){
    console.log('remover');
    document.querySelector('#campo').value = "";
});