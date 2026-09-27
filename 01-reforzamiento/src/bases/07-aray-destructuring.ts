


const caractersNames = ["goku", "vegeta", "trunks"];

// desestructuracion de arregos por [] de array
const [character1, character2] = caractersNames;
console.log({character1, character2});

// para acceder al ultimo, dejamos espacios
const [ , , character3] = caractersNames;
console.log({character3});

// Coas pro typecrip
const returnArrayFn = () => {
    // definimos que siempre se va ha regresar un el arreglo
    // stign y numero en ese orden.
    return ["ABC", 456] as const;
};

const [ texto, numero ] = returnArrayFn();
console.log( numero + 10);

