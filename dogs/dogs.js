const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

let dogs = [];
let totalDogs = 0;
let totalDogsAge = 0;
let average = 0;

data.filter(function(animal){
	if (animal.type == 'dog'){
    	totalDogs++;
    	totalDogsAge += animal.age;
        average = totalDogsAge / totalDogs;
        console.log(average);
    }
});

console.log(`The average age of the dogs in here is ${average}.`);