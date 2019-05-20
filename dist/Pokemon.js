"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, vitesse, pointVie, pointAtt, pointDef) {
        this.nom = nom;
        this.vitesse = vitesse;
        this.pointVie = pointVie;
        this.pointAtt = pointAtt;
        this.pointDef = pointDef;
    }
    Pokemon.prototype.getNom = function () {
        return this.nom;
    };
    Pokemon.prototype.getVitesse = function () {
        return this.vitesse;
    };
    Pokemon.prototype.getPV = function () {
        return this.pointVie;
    };
    Pokemon.prototype.getPA = function () {
        return this.pointAtt;
    };
    Pokemon.prototype.getPD = function () {
        return this.pointDef;
    };
    Pokemon.prototype.attaqueEnPremier = function (adversaire) {
        return this.vitesse > adversaire.vitesse;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
