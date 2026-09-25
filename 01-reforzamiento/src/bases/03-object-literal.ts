
// con esta interface moldeamos el objeto que queremos,
// la interface solo existe en TS, al convertirse en JS no existe.
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address?: { //con el ? podemos hacer esta parte opcional
        zipcode: string;
        city: string;
    }
}

//heredamos la interface    
const person: Person = {
    firstName: "Jens",
    lastName: "Johannson",
    age: 45,      // poner edad en string puede ser un error de dedo
    address: {      // si adress no se declara en la interface se marca error
        zipcode: '28080',
        city: "Helsinki"
    }
};


//person = "nueva cosa"; // esto esta mal

// esto error ambos sonigualitos, si cambio uno se cambia el otro
// const spiderman = person;

// aqui si que copiamos, pero solo las cabeceras, pero del primer nivel
// const spiderman = {...person};

const spiderman = structuredClone(person);

// si que puedo moficicar las properties de este objeto, pero no puedo reasignar el objeto completo

spiderman.firstName = "Kai";
spiderman.lastName = "Hansen";
// usando spred sencillo, este no funciona como queremos.
// spiderman.address?.city = "Hamburgo"; 

console.log(person, spiderman);