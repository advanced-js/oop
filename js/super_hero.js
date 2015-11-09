//Class
var SuperHero = function(superName,secretName,power,weakness) {
	SuperHero.allInstances.push(this);
	this.motto = "Save the Planet";
	this.energy = 10;
	this.health = 100;
	this.alive = true;
	this.power = power;
	this.weakness = weakness;
	this.secretName = secretName;
	this.superName = superName;
};

//Sub Classes
var HealerType = function(superName,secretName,power,weakness) {
	this.healingPowers = true;
	SuperHero.call(this);
	this.power = power;
	this.weakness = weakness;
	this.secretName = secretName;
	this.superName = superName;
};
HealerType.prototype = Object.create(SuperHero.prototype);

var WaterType = function(superName,secretName,power,weakness) {
	this.breatheUnderwater = true;
	SuperHero.call(this);
	this.power = power;
	this.weakness = weakness;
	this.secretName = secretName;
	this.superName = superName;
};
WaterType.prototype = Object.create(SuperHero.prototype);



//Methods
SuperHero.prototype.saveKittens = function (number) {
	this.energy--;
	var energyLevel = (this.energy * 10);
	if (energyLevel <= 0) {
		console.log(this.superName + " is too tired to save kittens today");
	}
	else {
		console.log("Feeling at " + energyLevel + "% of his power, " + this.secretName + " quickly transformed from his mild mannered alter ego, into " + this.superName + " and used his " +this.power+ " to save the " +number+ " kittens from a burning building.");	
		console.log("it cost him 10% of his energy, bringing him down to " + energyLevel + "% power");
	}
};

SuperHero.prototype.faceOff = function (nemesis) {
	if (!this.alive) {
		console.log(this.superName + " is dead");
	}
	else {
		console.log("In an epic battle, our hero, " + this.superName + ", uses his " + this.power + " to stop his arch nemesis, " + nemesis.superName + " and " + this.motto + ".  Little did our hero know, " + nemesis.superName + " turned the tides of battle when he found out our hero's only weakness, " +this.weakness);
		console.log(nemesis.superName + " uses " + this.weakness + " against " + this.superName + ", it costs him 25 health points, from his original health of " + this.health);
		this.health = this.health - 25;
		if (this.health < 1) {
			this.health = 0;
			this.alive = false;
		}
		if (!this.alive) {
			console.log("our hero, " + this.superName + ", has died!");
		}
	}
};

SuperHero.prototype.thrownInOcean = function(nemesis) {
	if (!this.alive) {
		console.log(this.superName + " is dead");
	}
	else {
		console.log(nemesis.superName + " has thrown " + this.superName + " into the ocean");
		console.log("our hero, " + this.superName + " has drowned");
		this.alive = false;
		this.health = 0;
	}
};

HealerType.prototype.faceOff = function (nemesis) {
	if (!this.alive) {
		console.log(this.superName + " is dead");
	}
	else {
		console.log("In an epic battle, our hero, " + this.superName + ", uses his " + this.power + " to stop his arch nemesis, " + nemesis.superName + " and " + this.motto + ".  Little did our hero know, " + nemesis.superName + " turned the tides of battle when he found out our hero's only weakness, " +this.weakness);
		console.log(nemesis.superName + " uses " + this.weakness + " against " + this.superName + ", it costs him 25 health points, from his original health of " + this.health);
		this.health = this.health - 15;
		console.log("but because he is a HEALER TYPE, he gains 10 points back and is at " + this.health + " health");
		if (this.health < 1) {
			this.health = 0;
			this.alive = false;
		}
		if (!this.alive) {
			console.log("our hero, " + this.superName + ", has died!");
		}
	}
};

WaterType.prototype.thrownInOcean = function(nemesis){
	if (!this.alive) {
		console.log(this.superName + " is dead");
	}
	else {
		console.log(nemesis.superName + " has thrown " + this.superName + " into the ocean");
		console.log("our hero, " + this.superName + " swims around and is healed back to 100%");
		this.health = 100;
	}
};

SuperHero.allInstances = []; // creating an array so that any time a new instance of a SuperHero is created, I can target all for QUnit checks.
var wolverine = new HealerType('wolverine','Logan','Slashing & Healing','Magnets');
var flash = new SuperHero('The Flash','Barry Allen','Superhuman speed','banana peels');
var superman = new HealerType('SuperMan','Clark Kent','Flight, superhuman strength and laser eyes','kryptonite');
var aquaman = new WaterType('AquaMan','Mr Fish','swims and speaks with marine life','fishing nets');

//V1
wolverine.saveKittens("10");
flash.faceOff(superman);

//V2
superman.faceOff(flash);

//V3
//tests added in tests.js
	//confirming proper arguments are available for each instance of SuperHero 
	//confirming functionality when superhero's health reaches zero

//V4
//Two SubClass categories added and tests created for each
//The original "faceOff" method has been updated so that SuperHero's with a sub Class of "HealerType", will take less damage when they face off.
wolverine.faceOff(aquaman);

//If a SuperHero is thrown in the ocean: regular SuperHero's drown & alive is set to false.  SuperHero's with sub Class "WaterType" will be healed to 100%
aquaman.thrownInOcean(flash);
wolverine.thrownInOcean(superman);




