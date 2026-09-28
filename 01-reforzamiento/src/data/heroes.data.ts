
interface Hero {
  id: number;
  name: string;
  owner: Owner; // aqui mero definimos
}

// podemos definor que tipos de ownser a usar
type Owner = 'DC' | 'Marvel';

// hay que usar la interface como [] un array pa que jale
const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
  {
    id: 6,
    name: "Chapulin",
    owner: "Taravisa",
  },
];


