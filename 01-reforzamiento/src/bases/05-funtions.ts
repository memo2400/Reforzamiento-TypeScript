

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

const message = greet('Vegeta');
const message2 = greet2('Goku');

console.log(message, message2);

function getUser () {
    return {
        uid: 'ABC-123',
        username: 'demo22'
    }
}

const user = getUser()

const getUser2 = () => {

    return {
      uid: "ABC-123",
      username: "demo44",
    };
}

const user2 = getUser2();

console.log(user, user2);