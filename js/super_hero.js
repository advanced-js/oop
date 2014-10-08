var SuperHero = function(name){
  this.name = name;
  this.health = 100;

  this.superShout = function(){
    return "I am Super " + this.name;
  };
  
  var Avengers = ["Thor", "Iron Man", "Captain America", "Hulk", "Black Widow", "Hawkeye"];
  if (Avengers.indexOf(this.name) > -1){
    this.isAvenger = true;
  } else {
    this.isAvenger = false;
  }
};

var batman = new SuperHero("Batman");
var thor = new SuperHero("Thor");

SuperHero.prototype.attack = function(victim, power){
  victim.health = victim.health - power;
  if (victim.health > 0){
    return false;
  } else {
    return true;
  }
};
