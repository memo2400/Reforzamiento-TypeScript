

// asi definimos la funcion tipada com e java de string
function greet (name:string):string{
    return `hola ${name}`;
}

// en funciones de flecha no cambia a donde apunta la 
// memoria al apuntar en this.
// callback, es mas simple de leer una de flecha
const greet2 = (name: string) => {
    return `hola ${name}`;
}

// funcion simplificada
const greet3 = (name: string): string => `hola ${name}`;


const message = greet('Vegeta');
const message2 = greet2('Goku');

console.log(message, message2);

// ####################################################

// Interface nos indica comoluce el objeto
interface User {
    uid: string;
    username: string;
}



function getUser():User {
    return {
        uid: 'ABC-123',
        username: 'demo22'
    }
}

const user = getUser()

// aqui seria el retorno resumido
const getUser2 = () => 
    ({
      uid: "ABC-123",
      username: "demo44",
    });


const user2 = getUser2();

console.log(user, user2);



/*
    Cuano usar una flecga  o funcion normal
    funcion helerp o metodo de ayuda
    cuando se requiere legibilidad, como un archivo independiente

    flecha 
    es prioritario con los colest
*/

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach( function (index){
    console.log({index})
});

// con Flecha funcion es mas simplificado
myNumbers.forEach((index) => {
    console.log({index})
});

// imprimo los 3 argumentos del for
myNumbers.forEach(console.log);