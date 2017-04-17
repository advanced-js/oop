// var SuperHero = ...
var SuperHero = function (superName, secretIdentity, superPower) {
  this.superName = superName;
  this.secretIdentity = secretIdentity;
  this.superPower = superPower;
  this.partner = "";
};

SuperHero.prototype.useSuperPower = function() {
  console.log(this.superName + " uses super power " + this.superPower);
  return this.superName + " uses super power " + this.superPower;
};

SuperHero.prototype.teamUp = function(partner) {
  console.log(this.superName + " is teaming up with " + partner.superName);
  this.partner = partner.superName;
  partner.partner = this.superName;
  return this.superName + " is teaming up with " + partner.superName;
};

var spiderman = new SuperHero("Spider-Man", "Peter Parker", "shoot spider web");
var superman = new SuperHero("Superman", "Clark Kent", "super strength");

spiderman.useSuperPower();
superman.useSuperPower();

superman.teamUp(spiderman);