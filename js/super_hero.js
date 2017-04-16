// var SuperHero = ...
var SuperHero = function(name) {
	this.name = name;
	
	this.health = 100;  
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
	if (multiplier != 0) {
		enemy.health = enemy.health - multiplier;
	}
	else {
		enemy.health = enemy.health - this.strength;
	}
}

//hugging adds 10HP to the "enemy"
SuperHero.prototype.hug = function(enemy) {
	enemy.health += 10;
}

//kid subclass
var kidHero = function(name){
	this.name = name;
	this.strength = 5;
	this.health = 40;
};

kidHero.prototype = new SuperHero();

//kids can eat anything to gain health
kidHero.prototype.eat = function() {
	this.health += 10;
	return this.health;
}

//but kids hurt themselves a bit when they punch
kidHero.prototype.punch = function(enemy) {
	//when the enemy's defense is lowered, the punch has more impact
	var multiplier = (10 - enemy.defense)*(this.strength);
	if (multiplier != 0) {
		enemy.health = enemy.health - multiplier;
	}
	else {
		enemy.health = enemy.health - this.strength;
	}
	this.health -= 1;
}

//shapeshifters have a random combination of strength, defense, and speed
var shapeshifter = function(name, combo) {
	this.name = name;
	
	if (combo === 1) {
		this.strength = 3;
		this.defense = 8;
		this.speed = 10;
	}
	else if (combo === 2) {
		this.strength = 9;
		this.defense = 7;
		this.speed = 5;
	}
	else if (combo == 3) {
		this.strength = 5;
		this.defense = 10;
		this.speed = 4;
	}
	else {
		this.strength = 4;
		this.defense = 4;
		this.speed = 4;
	}
	
};
shapeshifter.prototype = new kidHero();

//shapeshifters can also absorb their enemy's traits but it takes 2 seconds.  It also hurts the enemy.
shapeshifter.prototype.absorb = function(enemy) {
	var that = this; //this is how you hold onto the shapeshifter context
	setTimeout(function() {
		enemy.health -= 5;
		that.strength = enemy.strength;
		that.defense = enemy.defense;
		that.speed = enemy.speed;
	}, 2000);
}