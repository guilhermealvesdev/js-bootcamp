//Array com objetos de todos os animais
const dataAnimais = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
    bred: false
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
    bred: false
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat',
    bred: true
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
    bred: true
  },
  {
    name:'Dodo',
    age: 5,
    type:'dog',
    bred: false
  },
  {
    name:'Elsa',
    age: 8,
    type:'dog',
    bred: false
  },
  {
    name:'Lucas',
    age:2,
    type:'cat',
    bred:true
  }
];

//Objeto para filtro
const filtro = {
  texto: ''
}

/*
Função que renderiza o filtro. Nela é passada dois parâmetros,
a Array que ela vai buscar o conteúdo, e o conteúdo em si.
*/
const renderizaFiltro = function(arrayTotal, filtro) {

    /*
    Aqui a função filtra a array dataAnimais (criando uma nova array),
    que tem os itens da array original que se encaixam com o filtro pesquisado.
    */
   
    const filtrados = arrayTotal.filter(function(item){
        return item.name.toLowerCase().includes(filtro.texto.toLowerCase());
    });

    /*É limpado todo o conteúdo da div #lista*/
    document.querySelector('#lista').innerHTML = '';

    /*
    Pra cada item daquela array que foi criada, é criado um elemento <p>
    que é renderizado na tela, dentro do elemento #lista.
    */
    filtrados.forEach(function(item){
        const p = document.createElement('p');
        p.textContent = item.name;
        document.querySelector('#lista').appendChild(p);
    });
}

//Aqui a função é chamada pra não aparecer em branco ao carregar a página
renderizaFiltro(dataAnimais, filtro);

/*
EventListener que é disparado toda vez que o input #campo muda.
Ele atualiza o valor do objeto "filtro", e dispara a função renderizaFiltro,
que faz a comparação de todos os itens da array dataAnimais.
*/
document.querySelector('#campo').addEventListener('input', function(e){
    filtro.texto = e.target.value;

    renderizaFiltro(dataAnimais, filtro);
});


//Outras opções para filtrar
let dogs = [];
let totalDogs = 0;
let totalDogsAge = 0;
let average = 0;

const filter = data.filter(function(animal){
    //Pegando a média de todos os cachorros
	if (animal.type == 'dog'){
    	totalDogs++;
    	totalDogsAge += animal.age;
        average = totalDogsAge / totalDogs;
    }

    //Adicionando nome do cachorro numa array, por exemplo
    if (animal.type == "dog") {
        dogs.push(animal.name);
    };

    return dogs;
});

// console.log(dogs);

// console.log(`The average age of the dogs in here is ${average}.`);