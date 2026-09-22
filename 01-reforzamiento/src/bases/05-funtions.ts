

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