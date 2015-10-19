// var SuperHero = ...
var SuperHero = function (superName, secretIdentity, superPower) {
  this.superName = superName;
  this.secretIdentity = secretIdentity;
  this.superPower = superPower;
};

SuperHero.prototype.useSuperPower = function() {
  console.log(this.superName + " uses super power " + this.superPower);
  return this.superName + " uses super power " + this.superPower;
};

var spiderman = new SuperHero("Spider-Man", "Peter Parker", "shoot spider web");
var superman = new SuperHero("Superman", "Clark Kent", "super strength");

spiderman.useSuperPower();
superman.useSuperPower();