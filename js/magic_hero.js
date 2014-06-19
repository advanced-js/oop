var MagicHero = function () {};

MagicHero.prototype = new SuperHero({
	name: 'Magic Hero',
	power: 10, // Stronger power
	defense: 7, // Lower defense
 	toughness: 170, // Average toughness
	strength: 20 // Average strength
});

// Slightly stronger than a normal attack, also slightly more expensive
MagicHero.prototype.magicAttack = function (superhero) {
	if (this.strength >= 3) {
		this.state = 1;
		superhero.toughness -= (3 * this.power) + superhero.getDefense(); // 3 * power, instead of 2 * power
		this.strength -= 3; // uses 3 strength instead of 2

		if (superhero.toughness <= 0) {
			superhero.state = 4;
			console.log(this.name + ' killed ' + superhero.name + ' with magic!');
		}

		return true;

	} else {
		console.log(this.name + ' doesn\'t have enough strength left!');
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