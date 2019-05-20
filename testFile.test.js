"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./src/Pokemon");
var functions_1 = require("./dist/functions");
test('basic', function () {
    var pikachu = new Pokemon_1.Pokemon("pikachi", 50);
    var myu = new Pokemon_1.Pokemon("myu", 70);
    expect(functions_1.attaqueEnPremier(pikachu, myu)).toBe(myu);
});
