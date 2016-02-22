// var SuperHero = ...
var SuperHero = function(name,heroType) { 
	this.name = name; 
	this.heroType = heroType;
	this.lifeForce = 100;
	this.enemies = [];
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

SuperHero.prototype.intro = function() {
	return "My name is " + this.name + ", and I'm a " + this.heroType;
};

SuperHero.prototype.attack = function(superHero) {
	var lifeUnits = 20;
	if ( this.enemies.indexOf(superHero.name) === -1 ) {
		this.addEnemy(superHero.name);
	}
	if ( this.powerLevel > superHero.powerLevel ) {
		superHero.lifeForce-=lifeUnits;
	} else if ( this.powerLevel < superHero.powerLevel ) {
		this.lifeForce-=lifeUnits;
	}
};

SuperHero.prototype.isAlive = function() {
	if ( this.lifeForce > 0 ) {
		return true;
	} else {
		return false;
	}
};
