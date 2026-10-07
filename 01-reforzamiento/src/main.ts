import './style.css'
//import './bases/01-const-let' // con solo importar ya se ejecuta el archivo
import './bases/11-async-await' // con solo importar ya se ejecuta el archivo;
import {getHeroeByOwner, getHeroeByOwnerList} from './bases/08-imp-exp';
import {OwnerEnum} from './data/heroes.data'


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<div>
  <h1>Hola a Todos</h1>
</div>

`;

// Leccion 08
// console.log(getHeroeByOwner(OwnerEnum.DC));
// console.log(getHeroeByOwnerList(OwnerEnum.DC));
