
import {heroes, type Hero} from "../data/heroes.data"

const getHeroById = (id: number): Hero => {

    const hero = heroes.find((hero) => {
        return hero.id === id; 
    });

    return hero;

}