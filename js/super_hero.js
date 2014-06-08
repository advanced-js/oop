var states = ['neutral', 'attacking', 'defending', 'resting', 'dead'];

var SuperHero = function (params) {
	this.name = params.name;

	/* MODIFIERS */
	this.power = params.power; // attack power (out of 10)
	this.defense = params.defense; // defense power (out of 10)
	this.tempDefense = params.defense + 10;

	/* CONSUMABLES */
	this.toughness = params.toughness; // health points (out of 200)
	this.strength = params.strength; // strength points (out of 20)
};

// Superhero's present state
// 0: Neutral
// 1: Attacking
// 2: Defending
// 3: Resting
// 4: Dead
SuperHero.prototype.state = 0;

SuperHero.prototype.attack = function (superhero) {
	if (this.strength > 1) {
		this.state = 1;
		superhero.toughness -= (2 * this.power) + superhero.getDefense();
		this.strength -= 2;

		if (superhero.toughness <= 0) {
			superhero.state = 4;
			console.log(this.name + ' killed ' + superhero.name + '!');
		}

		return true;

	} else {
		console.log(this.name + ' doesn\'t have enough strength left!');
		return false;
	}
};

SuperHero.prototype.getStrengthBoost = function () {
	this.strength += 10;
	return true;
};

SuperHero.prototype.getDefense = function () {
	if (this.state === 2) {
		return this.defense + 10;
	} else {
		return this.defense;
	}
};

SuperHero.prototype.defend = function () {
	this.state = 2;
	return true;
};

SuperHero.prototype.rest = function () {
	this.state = 3;
	this.toughness += 5;
	return true;
};

SuperHero.prototype.highFive = function (superhero) {
	if (this.state !== 4 && superhero.state !== 4) {
		this.power += 1;
		this.defense += 1;
		this.toughness += 10;
		this.strength += 4;

		superhero.power += 1;
		superhero.defense += 1;
		superhero.toughness += 10;
		superhero.strength += 4;

		return true;

	} else {

		return false;
	}
};
