
import {heroes, type Hero, OwnerEnum} from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id; 
    });

    // ete caso se vera mas adelante 
    // if (!hero) {
    //     throw new Error(`No hay heroe con ese ID ${id}`)
    // }


    return hero;

}

// console.log(getHeroById(2));

export const getHeroeByOwner = (owner: OwnerEnum) : Hero => {
    const hero = heroes.find( (hero: Hero) => { // forma de parametro tipado
        return hero.owner === owner;
    })

    if (!hero) {
 
        const heroEmpty: Hero = {
                id: 0,
                name: "Desconocido",
                owner: OwnerEnum.Taravisa,
            }
        

        return heroEmpty;
    }

    return hero;

}

console.log(getHeroeByOwner(OwnerEnum.Gato));

export const getHeroeByOwnerList = (owner: OwnerEnum) => {
    const heroesByOwner = heroes.filter(
      (hero) => hero.owner === owner,   // forma de parametro corto tipado automatico heroe
    );

    return heroesByOwner;


}