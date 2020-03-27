var toDos = [
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

function removeTodo(lista, textoPraRemover) {
    const index = lista.findIndex(function(toDo){
        return toDo.activity.toLowerCase() === textoPraRemover.toLowerCase();
    });
    
    if (index > -1) {
        toDos.splice(index, 1);
    }
}

const getThingsToDo = function (lista, texto) {
    return lista.filter(function(toDo, index){    
        const activityCheck = toDo.activity.toLowerCase().includes(texto.toLowerCase());
        const completedCheck = toDo.completed.toString().toLowerCase().includes(texto.toLowerCase());
        return activityCheck || completedCheck;
    });
};

const sortTodos = function (array) {
    array.sort(function(a, b){
        if (!a.completed && b.completed) {
            return -1;
        } else if (a.completed && !b.completed) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortTodos(toDos);
console.log(toDos);



// console.log(getThingsToDo(toDos, "FALSE"));

// removeTodo(toDos, 'DORMIR');
// console.log(toDos);

// console.log(removeTodo(toDos, "Dormir"));
// console.log(toDos);

// toDos.splice(2, 1);
// toDos.push('jogar videogame');
// toDos.shift();
// console.log(`You have ${toDos.length} todos`);
// toDos.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`);
// });

// for (let count = 0; count < toDos.length; count++) {
//     console.log(`${count + 1}. ${toDos[count]}`);
// }