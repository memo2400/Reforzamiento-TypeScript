


const person = {
    name: 'Elon',
    age: 45,
    key: 'Ironman'
}

// esto es ineficiente
const name1 = person.name;

// Esto es pro, podemos poner en desorden
const { name, age } = person;

console.log(name, age);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;  //asi existe o es indefinido
}

const useContex = ( {name, age, key, rank = "sin rango"} :Hero) => {

    return {
      keyName: key,
      user: {
        name: name,
        // esto es mas rapido en JS y TS, para no repetir
        age,
      },
      rank: rank,
    };

};

const context = useContex(person);

console.log(context);

// podemos acceder de esta forma al retorno que contex
context.user.age;

const { keyName, rank, user } = useContex(person);
console.log("/ 3 /");
console.log(keyName, rank, user);