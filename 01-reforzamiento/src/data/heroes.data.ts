
interface Hero {
  id: number;
  name: string;
  owner: OwnerEnum; // aqui mero definimos
}

// podemos definor que tipos de ownser a usar
type Owner = 'DC' | 'Marvel';

// enum no se traduce a JS, es como Interface
enum OwnerEnum {
  // DC,     // 0
  // Marvel  // 1
  DC = 'DC',  // aqui si mando el string
  Marvel = 'Marvel',
}

// hay que usar la interface como [] un array pa que jale
const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: "Spiderman",
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: "Superman",
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: OwnerEnum.Marvel,
  },
  {
    id: 6,
    name: "Chapulin",
    owner: "Taravisa",
  },
];


