"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function attaqueEnPremier(adversaire, adversaire2) {
    return adversaire.vitesse > adversaire2.vitesse ? adversaire : adversaire2;
}
exports.attaqueEnPremier = attaqueEnPremier;
function combat(adversaire, adversaire2) {
    var att1 = attaqueEnPremier(adversaire, adversaire2);
    if (att1.getNom() == adversaire.getNom()) {
        var tour = true;
        var pname1 = att1.getNom();
        var pv1 = att1.getPV();
        var pa1 = att1.getPA();
        var pd1 = att1.getPD();
        console.log(pname1 + " pv: " + pv1 + " pa: " + pa1 + " pd: " + pd1);
        var pname2 = adversaire2.getNom();
        var pv2 = adversaire2.getPV();
        var pa2 = adversaire2.getPA();
        var pd2 = adversaire2.getPD();
        console.log(pname2 + " pv: " + pv2 + " pa: " + pa2 + " pd: " + pd2);
        while (pv1 > 0 && pv2 > 0) {
            if (tour == true) {
                var pa = pa1 - pd2 >= 0 ? pa1 - pd2 : pa1 - 2;
                pv2 = pv2 - pa;
                console.log(pname1 + " inflige " + pa + " à " + pname2);
                if (pv2 <= 0) {
                    console.log(pname1 + "a vaincu " + pname2);
                }
                tour = false;
            }
            else {
                var pa = pa2 - pd1 >= 0 ? pa2 - pd1 : pa2 - 2;
                pv1 = pv1 - pa;
                console.log(pname2 + " inflige " + pa + " à " + pname1);
                if (pv1 <= 0) {
                    console.log(pname2 + " a vaincu " + pname1);
                }
                tour = true;
            }
        }
    }
    else {
        var tour = true;
        var pname1 = adversaire.getNom();
        var pv1 = adversaire.getPV();
        var pa1 = adversaire.getPA();
        var pd1 = adversaire.getPD();
        console.log(pname1 + " pv: " + pv1 + " pa: " + pa1 + " pd: " + pd1);
        var pname2 = att1.getNom();
        var pv2 = att1.getPV();
        var pa2 = att1.getPA();
        var pd2 = att1.getPD();
        console.log(pname2 + " pv: " + pv2 + " pa: " + pa2 + " pd: " + pd2);
        while (pv1 > 0 && pv2 > 0) {
            if (tour == true) {
                var pa = pa1 - pd2 >= 0 ? pa1 - pd2 : pa1 - 2;
                pv2 = pv2 - pa;
                console.log(pname1 + " inflige " + pa + " à " + pname2);
                if (pv2 <= 0) {
                    console.log(pname1 + "a vaincu " + pname2);
                }
                tour = false;
            }
            else {
                var pa = pa2 - pd1 >= 0 ? pa2 - pd1 : pa2 - 2;
                pv1 = pv1 - pa;
                console.log(pname2 + " inflige " + pa + " à " + pname1);
                if (pv1 <= 0) {
                    console.log(pname2 + " a vaincu " + pname1);
                }
                tour = true;
            }
        }
    }
}
exports.combat = combat;
