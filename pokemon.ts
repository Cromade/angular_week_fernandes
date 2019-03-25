export class Attack {
    name:string;
		power:number;
  constructor(name, power) {
    this.name=name;
		this.power=power;
  }

	toString() {
		console.log(this.name);
	}
}

export class Pokemon {
    name:string;
		level:number;
		hp:number;
		attack_point:number;
		defense_point:number;
		speed:number;
  constructor(name, level, hp, attack, defense, speed) {
    this.name = name;
		this.level = level;
		this.hp = hp;
		this.attack_point = attack;
		this.defense_point = defense;
		this.speed = speed;
  }

	attackDamage(attack_number, pkm_def) {
		return Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.attack_point * attack_number / pkm_def.defense_point) / 50) + 2;
	}

	toString() {
		console.log(this.name);
	}
}

export function initiative(pkm1, pkm2) {
	if (pkm1.speed<pkm2.speed) {
		return 2;
	}

	return 1;
}

export function battle(pkm1, pkm2) {
	var winner = null;
	var looser = null;
	var turn = 1;
	var atk = new Attack("Charge", 40);

	while (winner == null) {
		var pkm1_damage = pkm1.attackDamage(atk.power, pkm2);
		var pkm2_damage = pkm2.attackDamage(atk.power, pkm1);

		console.log("turn "+turn);
		console.log(pkm1.name+" hp : "+pkm1.hp+", atk : "+atk.name+" with damage : "+pkm1_damage);
		console.log(pkm2.name+" hp : "+pkm2.hp+", atk : "+atk.name+" with damage : "+pkm2_damage);
		console.log("----------------------------");
		turn++;

		switch(initiative(pkm1, pkm2)) {
		   case 1: {
					 pkm2.hp = pkm2.hp - pkm1_damage;
					 if (pkm2.hp <= 0) {
						 winner = pkm1;
						 looser = pkm2;
						 break;
					 } else {
						 pkm1.hp = pkm1.hp - pkm2_damage;
						 if (pkm1.hp <= 0) {
							 winner = pkm2;
							 looser = pkm1;
							 break;
						 }
			   		 break;
					 }
		   }
		   case 2: {
					 pkm1.hp = pkm1.hp - pkm2_damage;
					 if (pkm1.hp <= 0) {
						 winner = pkm2;
						 looser = pkm1;
						 break;
					 } else {
						 pkm2.hp = pkm2.hp - pkm1_damage;
						 if (pkm2.hp <= 0) {
							 winner = pkm1;
							 looser = pkm2;
							 break;
						 }
					 }
		       break;
		   }
		}
	}

	console.log(looser.name+" is KO, "+winner.name+" win the battle !");
	return winner;
}

//var myPokemon = new Pokemon("mew", 32);
