// var SuperHero = ...

var SuperHero = function(name, age) {
	this.name = name;
	this.age = age;
	this.energy = 100;
	return "Superhero created!";
};

SuperHero.prototype.fly = function() {
	this.energy -= 1;
	return "Yes, your superhero can fly!";
};

SuperHero.prototype.destroy = function() {
	return "Yes, your superhero can destroy the enemy!";
};

SuperHero.prototype.attack = function() {
	return "Attack the other superhero!";
};

var SubHero = function(name, age) {
	SuperHero.call(this, name, age);
	this.punkNess = 10;	
};

SubHero.prototype = Object.create(SuperHero.prototype);

SubHero.prototype.tookSteroids = function() {
	this.punkNess -=1;
}

SubHero.prototype.claimingSelf = function() {
	return "I'm a punk";
}

var superman = new SuperHero("Clark Kent", 27);
var batman = new SuperHero("John Wayne", 34);
var wannabeOne = new SubHero("Gunther", 21);
