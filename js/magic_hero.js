var MagicHero = function (params) {
	this.name = params.name;
	this.magic = params.magic;
};

MagicHero.prototype = new SuperHero({
	power: 10, // Stronger power
	defense: 7, // Lower defense
 	toughness: 170, // Average toughness
	strength: 0 // Average strength
});

// Slightly stronger than a normal attack, uses magic instead of strength
MagicHero.prototype.magicAttack = function (superhero) {
	if (this.magic >= 3) {
		this.state = 1;
		superhero.toughness -= (3 * this.power) + superhero.getDefense(); // 3 * power, instead of 2 * power
		this.magic -= 3; // uses magic instead of strength

		if (superhero.toughness <= 0) {
			superhero.state = 4;
			console.log(this.name + ' killed ' + superhero.name + ' with magic!');
		}

		return true;

	} else {
		console.log(this.name + ' doesn\'t have enough magic left!');
		return false;
	}
};

// Slightly better than a normal high five
MagicHero.prototype.magicHighFive = function (superhero) {
	if (this.state !== 4 && superhero.state !== 4) {
		this.power += 2;
		this.defense += 2;
		this.toughness += 11;
		this.strength += 5;

		superhero.power += 2;
		superhero.defense += 2;
		superhero.toughness += 11;
		superhero.strength += 5;

		return true;

	} else {

		return false;
	}
};