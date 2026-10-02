
import {heroes, type Hero} from "../data/heroes.data"

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

console.log(getHeroById(2));