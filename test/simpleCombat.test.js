const pkm = require('../pokemon.js');


test('simple initiative : carapuce vs bulbizarre', () => {
  let carapuce = new pkm.Pokemon("carapuce", 1, 44, 48, 65, 43);
  let bulbizarre = new pkm.Pokemon("bulbizarre", 1, 45, 49, 49, 45);

  expect(pkm.initiative(carapuce, bulbizarre)).toBe(2);
});

test('simple initiative : salameche vs bulbizarre', () => {
  let salameche = new pkm.Pokemon("salameche", 1, 39, 52, 43, 65);
  let bulbizarre = new pkm.Pokemon("bulbizarre", 1, 45, 49, 49, 45);

  expect(pkm.initiative(salameche, bulbizarre)).toBe(1);
});

test('simple battle : carapuce vs bulbizarre', () => {
  let carapuce = new pkm.Pokemon("carapuce", 1, 44, 48, 65, 43);
  let bulbizarre = new pkm.Pokemon("bulbizarre", 1, 45, 49, 49, 45);

  expect(pkm.battle(carapuce, bulbizarre)).toBe(bulbizarre);
});

test('simple battle : carapuce vs salameche', () => {
  let carapuce = new pkm.Pokemon("carapuce", 1, 44, 48, 65, 43);
  let salameche = new pkm.Pokemon("salameche", 1, 39, 52, 43, 65);

  expect(pkm.battle(carapuce, salameche)).toBe(carapuce);
});

test('simple battle : carapuce', () => {
  let mege_dracaufeu_X = new pkm.Pokemon("Mega-dracaufeu X", 32, 78, 104, 78, 100);
  let torterra = new pkm.Pokemon("Torterra", 34, 95, 109, 105, 56);

  expect(pkm.battle(mege_dracaufeu_X, torterra)).toBe(torterra);
});
