import {Pokemon} from "./Pokemon"
import {attaqueEnPremier, combat} from "./functions"

let pokemon1 = new Pokemon('pikachu', 50, 100, 5, 10);
let pokemon2 = new Pokemon('Myuu', 70, 200, 15,20);

let attaque1 = attaqueEnPremier(pokemon1,pokemon2);
console.log(attaque1.getNom());
combat(pokemon2,pokemon1);


