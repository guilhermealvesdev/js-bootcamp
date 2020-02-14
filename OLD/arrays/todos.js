const todos = [{
    text: 'Estudar',
    completed: true
}, {
    text: 'Dormir',
    completed:false
}, {
    text: 'Jogar videogame',
    completed: false
}];

const deleteToDo = function (array, todoTitle) {
    const index = array.findIndex(function (item) {
        return item.text.toLowerCase() === todoTitle.toLowerCase()
    });

    if (index > -1) {
        array.splice(index, 1);
    }
};

console.log(deleteToDo(todos, 'Dormir'));
console.log(todos);