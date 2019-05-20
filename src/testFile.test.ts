import {Pokemon} from "./Pokemon"
import {attaqueEnPremier} from "./functions"

test('basic', () => {
	let pikachu = new Pokemon('pikachu', 50, 100, 5, 10);
	let myu = new Pokemon('Myuu', 70, 200, 15,20);
  expect(attaqueEnPremier(pikachu,myu)).toBe(myu);
});