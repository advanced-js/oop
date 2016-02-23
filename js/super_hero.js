var SuperHuman = function(name,power) {
	this.name = name;
	this.lifeForce = 100;
	this.power = power;
	switch (power) {
		case "has super strength":
		case "can fly":
		case "has x-ray vision":
		case "runs super fast":
			this.powerLevel = 2;
			break;
		default:
			this.powerLevel = 1;
	}
};

SuperHuman.prototype.intro = function() {
	return "My name is " + this.name;
};

SuperHuman.prototype.isAlive = function() {
	if ( this.lifeForce > 0 ) {
		return true;
	} else {
		return false;
	}
};

var SuperHero = function(name,heroType) { 
	SuperHuman.call(this,name,"");
	this.heroType = heroType;
	switch (heroType) {
		case "succubus":
			this.power = "feeds on the energy of humans";
			this.powerLevel = 5;
			break;
		case "siren":
			this.power = "has an enchanted voice";
			this.powerLevel = 2;
			break;
		case "valkyrie":
			this.power = "chooses the slain";
			this.powerLevel = 4;
			break;
		case "shape-shifter":
			this.power = "changes into a wolf";
			this.powerLevel = 3;
			break;
		default:
			this.power = "complains alot";
			this.powerLevel = 10;
	}
	this.enemies = [];
}; 

SuperHero.prototype = Object.create(SuperHuman.prototype);

SuperHero.prototype.intro = function() {
	return "My name is " + this.name + ", and I'm a " + this.heroType;
};

SuperHero.prototype.addEnemy = function(enemy) {
	this.enemies.push(enemy);
};

SuperHero.prototype.removeEnemy = function(enemy) {
	var index = this.enemies.indexOf(enemy);
	if ( index >= 0 ) {
		this.enemies.splice(index,1);
	}
};

SuperHero.prototype.isEnemy = function(enemy) {
	if ( this.enemies.indexOf(enemy) >= 0 ) {
		return true;
	} else {
		return false;
	}
};

SuperHero.prototype.attack = function(offender) {
	var lifeUnits = 20;
	if ( this.enemies.indexOf(offender.name) === -1 ) {
		this.addEnemy(offender.name);
	}
	if ( this.powerLevel > offender.powerLevel ) {
		offender.lifeForce-=lifeUnits;
	} else if ( this.powerLevel < offender.powerLevel ) {
		this.lifeForce-=lifeUnits;
	}
};

var SuperVillain = function(name,villainType) { 
	SuperHuman.call(this,name,"");
	this.villainType = villainType;
	switch (villainType) {
		case "monster":
			this.power = "is a living being created from dead human parts";
			this.powerLevel = 2;
			break;
		case "vampire":
			this.power = "feeds on human blood";
			this.powerLevel = 2;
			break;
		case "vector":
			this.power = "is a flesh-eating zombie";
			this.powerLevel = 3;
			break;
		default:
			this.power = "vomits";
			this.powerLevel = 10;
	}
	this.evilFactor = 20;
}; 

SuperVillain.prototype = Object.create(SuperHuman.prototype);

SuperVillain.prototype.attack = function(defender) {
	var lifeUnits = 20;
	if ( this.powerLevel > defender.powerLevel ) {
		defender.lifeForce-=lifeUnits;
	} else if ( this.powerLevel < defender.powerLevel ) {
		this.lifeForce-=lifeUnits;
		if ( this.evilFactor > 0 ) {
			defender.lifeForce-=10;
			this.evilFactor-=10;
		}
	}
};
