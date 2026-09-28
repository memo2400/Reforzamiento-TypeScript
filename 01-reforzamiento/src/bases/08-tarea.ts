

// mi caso no funciono
function useState (personaje: string){

    return [ personaje, anomima (personaje) ] as const;
}

const anomima = (texto: string) => {
    return console.log(texto);
}

const [name, setName] = useState("Elon");
console.log(name);


