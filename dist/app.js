"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var functions_1 = require("./functions");
var pokemon1 = new Pokemon_1.Pokemon('pikachu', 50, 100, 5, 10);
var pokemon2 = new Pokemon_1.Pokemon('Myuu', 70, 200, 15, 20);
var attaque1 = functions_1.attaqueEnPremier(pokemon1, pokemon2);
console.log(attaque1.getNom());
functions_1.combat(pokemon2, pokemon1);
