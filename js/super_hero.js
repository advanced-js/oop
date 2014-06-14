// var SuperHero = ...
var SuperHero = function(name) {
	this.name = name;
	
	this.health = 100;  //why doesn't SuperHero.prototype.health = function() { return 100; } work?
	this.defense = 10;
	this.strength = 10;
	this.speed = 10;
}

//defense boost
SuperHero.prototype.defenseBoost = function() {
	this.defense++;
	return this.defense;
}

//smiling weakens the enemy and catches them off guard
SuperHero.prototype.smile = function(enemy) {
	enemy.defense -= 2;
	enemy.speed -= 4;
}

//punch
SuperHero.prototype.punch = function(enemy) {
	//when the enemy's defense is lowered, the punch has more impact
	var multiplier = (10 - enemy.defense)*(this.strength);
	this.strength = multiplier;
	enemy.health = enemy.health - multiplier;
}

//hugging adds 10HP to the "enemy"
SuperHero.prototype.hug = function(enemy) {
	enemy.health += 10;
}
