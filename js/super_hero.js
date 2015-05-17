// var SuperHero = ...
var superHero = function (name, ability) {
  this.name = name;
  this.ability = ability;
}

SuperHero.prototype.fly = function() {
  return this.name + " can fly everywhere! ";
}

SuperHero.prototype.fast = function() {
  return this.name + " can move fast! ";
}

SuperHero.prototype.crush = function() {
  return this.name + " can crush anything! ";
}

SuperHero.prototype.superPower = function() {
  return this.name + " can read people's mind with his ability " + this.ability;
}

SuperHero.prototype.notHuman = function() {
  return this.name + " is not a human! ";
} 

var superMan = new superHero("Superman", "superpower");


SuperHero.prototype.attack = function() {
	return "Attack another superhero!";
};

var newHero = function(name, ability) {
	SuperHero.call(this, name, ability);
	this.energyLevel = 10;	
};


newHero.prototype = Object.create(SuperHero.prototype);

newHero.prototype.eatingCat = function() {
	this.energyLevel +=1;
}

var superman = new SuperHero("Clark Kent", "superpower");
var batman = new SuperHero("Bruce Wayne", "technology");
var batgirl = new newHero ("Selena Kale", "being a cat");

