
// object constructor

function SuperHero(name, powers, nature, archenemy){
  this.name  = name;
  this.powers = powers;
  this.nature = nature;
  this.archenemy = archenemy;
}


SuperHero.prototype.introduce = function(name){
	return "Hello, I am " + name + " and I am here to save you!";
};

SuperHero.prototype.fight = function(archenemy){
  if (this.nature != archenemy.nature){
   
    if (this.powers.strength > archenemy.powers.strength) {
      return this.name + ' wins!';
    }
    else { 
      return this.name + ' loses!';
    }
  }
  else {
    return 'no fight!';
  }
};

var supermanPowers = {
  strength: 10,
  flight: "flight"
};

var lexluthorPowers = {
  strength: 3,
  smart: "smart",
};

var spidermanPowers = {
  strength: 3,
  smart: "smart",
};

var batmanPowers = {
  strength: 3,
  smart: "smart",
};

function SuperMutant(name, powers, nature, archenemy, mutation_type, physical_change){
	SuperHero.call(this, name, powers, nature, archenemy);
	this.mutation_type = mutation_type;
	this.physical_change = physical_change;
}

function SuperMaker(name, powers, nature, archenemy, tools, transportation){
	SuperHero.call(this, name, powers, nature, archenemy)
	this.tools = tools;
	this.transportation = transportation;
}

// Instantiate superheros...
var superman = new SuperHero("Superman", supermanPowers, "good", "lexluthor");

var lexluthor = new SuperHero("Lex Luthor", lexluthorPowers, "evil", "superman");

// Subclasses...
SuperMutant.prototype = Object.create(SuperHero.prototype);
SuperMutant.prototype.constructor = SuperMutant;

// Instantiate subclasses
var spiderman = new SuperMutant("Spiderman", spidermanPowers, "good", "green goblin", "spider dna", "spider powers" );

var batman = new SuperMaker("Batman", batmanPowers, "good", "joker", "utility belt", "bat mobile")


// call method on the instance of the object
SuperHero.prototype.fly = function() {
	return 'up and away';
};

// Parent class: good vs. evil...
superman.fight(lexluthor);

// Parent class vs. subclass, good vs. good....
superman.fight(batman);




