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
