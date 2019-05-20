"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var functions_1 = require("./functions");
test('basic', function () {
    var pikachu = new Pokemon_1.Pokemon('pikachu', 50, 100, 5, 10);
    var myu = new Pokemon_1.Pokemon('Myuu', 70, 200, 15, 20);
    expect(functions_1.attaqueEnPremier(pikachu, myu)).toBe(myu);
});
