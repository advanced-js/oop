 var SuperHero = function(name, strength){
   this.name = name;
   this.strength = strength;
};

SuperHero.prototype.sayHello = function() {
  console.log("Hello Im " + this.name + " and my strength is " + this.strength);
};

var superhero = new SuperHero("Superman", "Flying");

superhero.sayHello();
