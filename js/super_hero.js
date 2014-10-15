var SuperHero = function(name){
  this.name = name;
  this.health = 100;

  this.superShout = function(){
    return "I am Super " + this.name;
  };

  this.isAvenger = function(){
    var Avengers = ["Thor", "Iron Man", "Captain America", "Hulk", "Black Widow", "Hawkeye"];
    if (Avengers.indexOf(this.name) > -1){
      return true;
    } else {
      return false;
    }
  }
  
};

SuperHero.prototype.attack = function(victim, power){
  victim.health = victim.health - power;
  if (victim.health > 0){
    return false;
  } else {
    return true;
  }
};

var Alien = function(planet){
  this.planet = planet;
}

var Human = function(hometown){
  this.hometown = hometown;
  this.planet = "Earth";
}

Alien.prototype = new SuperHero();
Human.prototype = new SuperHero();
