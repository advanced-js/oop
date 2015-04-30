// var SuperHero = ...

var SuperHero = function(name, age) {
	this.name = name;
	this.age = age;
	return "Superhero created!";
};

SuperHero.prototype.fly = function() {
	return "Yes, your superhero can fly!";
};

SuperHero.prototype.destroy = function() {
	return "Yes, your superhero can destroy the enemy!";
};

SuperHero.prototype.attack = function() {
	return "Attack the other superhero!";
};

var superman = new SuperHero("Clark Kent", 27);
var batman = new SuperHero("John Wayne", 34);
