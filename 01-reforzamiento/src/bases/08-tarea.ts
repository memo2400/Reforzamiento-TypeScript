

// mi caso no funciono
function useState (personaje: string){

    return [ personaje, anomima (personaje) ] as const;
}

const anomima = (texto: string) => {
    return console.log(texto);
}

const [name, setName] = useState("Elon");
console.log(name);

//Caso Real
function useState2 (personaje: string){
    
    return [ personaje, (setPersonaje:string) => console.log(setPersonaje) ] as const;
}

const [name2, setName2] = useState2("Elon");
console.log(name2);
setName2("Jenssen");
