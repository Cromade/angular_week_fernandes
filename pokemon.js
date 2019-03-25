"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.prototype.toString = function () {
        console.log(this.name);
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function initiative(pkm1, pkm2) {
    if (pkm1.speed < pkm2.speed) {
        return pkm2;
    }
    return pkm1;
}
exports.initiative = initiative;
var myPokemon = new Pokemon("mew", 32);
