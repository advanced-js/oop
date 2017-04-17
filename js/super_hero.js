 var SuperHero = function(name, attackPoints, health){
   this.name = name;
   this.attackPoints = attackPoints;
   this.health = health;
};

SuperHero.prototype.sayHello = function() {
  console.log("Hello Im " + this.name + " and my attack point is  " + this.attackPoints);
};

SuperHero.prototype.attack = function(victim) {
  victim.health = victim.health - this.attackPoints;
  console.log(victim.name + " got attacked by " + this.name + ", " + victim.name + "'s health is now "  + victim.health);
};

var superman = new SuperHero("Superman", 20, 100);
var hulk = new SuperHero("hulk", 30, 100);

superman.sayHello();
hulk.attack(superman);
superman.attack(hulk);
hulk.attack(superman);
hulk.attack(superman);
superman.attack(hulk);
