const pkm = require('../pokemon.js');


test('simple initiative : mewto', () => {
  let mew = new pkm.Pokemon("mew", 32);
  let mewto = new pkm.Pokemon("mewto", 41);

  expect(pkm.initiative(mew, mewto)).toBe(mewto);
});

test('simple initiative : mew', () => {
  let mew = new pkm.Pokemon("mew", 41);
  let mewto = new pkm.Pokemon("mewto", 32);

  expect(pkm.initiative(mew, mewto)).toBe(mew);
});
