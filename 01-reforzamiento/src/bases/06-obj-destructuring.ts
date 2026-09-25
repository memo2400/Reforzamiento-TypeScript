


const person = {
    name: 'Elon',
    age: 45,
    key: 'Ironman'
}

// esto es ineficiente
const name1 = person.name;

// Esto es pro
const { name, age } = person;

console.log(name, age);