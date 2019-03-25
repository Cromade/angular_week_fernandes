export class Pokemon {
    name:string;
		speed:number;
  constructor(name, speed) {
    this.name=name;
		this.speed=speed;
  }

	toString() {
		console.log(this.name);
	}
}

export function initiative(pkm1, pkm2) {
	if (pkm1.speed<pkm2.speed) {
		return pkm2;
	}

	return pkm1;
}

var myPokemon = new Pokemon("mew", 32);
