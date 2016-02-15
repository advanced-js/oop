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
	};
}; 
 
SuperHero.prototype.addEnemy = function(enemy) {
	this.enemies.push(enemy);
	console.log(enemy + " is an enemy of " + this.name);
};

SuperHero.prototype.myIntro = function() {
	console.log("My name is " + this.name + ", and I'm a " + this.heroType);
};

SuperHero.prototype.myPower = function() {
	console.log(this.name + " " + this.power);
};

SuperHero.prototype.myLifeForce = function() {
	console.log(this.name + "'s life force is " + this.lifeForce);
};

SuperHero.prototype.myEnemies = function() {
	console.log(this.name + "'s enemies are " + this.enemies);
};

SuperHero.prototype.attack = function(superHero) {
	var lifeUnits = 2;
	if ( this.enemies.indexOf(superHero.name) >= 0 ) {
		lifeUnits = 5;
	} else {
		this.addEnemy(superHero.name);
	};
	if ( superHero.lifeForce <= 0 ) {
		console.log(superHero.name + " is dead!");
	} else if ( this.powerLevel > superHero.powerLevel ) {
		superHero.lifeForce-=lifeUnits;
		console.log(this.name + " took " + lifeUnits + " life units from " + superHero.name);
	} else if ( this.powerLevel < superHero.powerLevel ) {
		this.lifeForce-=lifeUnits;
		console.log(superHero.name + " took " + lifeUnits + " life units from " + this.name);
	};
};

var tamsin = new SuperHero("Tamsin","valkyrie");
tamsin.myIntro();
var dyson = new SuperHero("Dyson","shape-shifter");
dyson.myIntro();
var hale = new SuperHero("Hale","siren");
hale.myIntro();

var bo = new SuperHero("Bo","succubus");
bo.myIntro();
bo.myPower();
bo.attack(tamsin);
bo.myEnemies();
bo.myLifeForce();
tamsin.myLifeForce();

bo.addEnemy(dyson.name);
bo.myEnemies();
bo.attack(dyson);
bo.myEnemies();
bo.myLifeForce();
dyson.myLifeForce();

dyson.attack(tamsin);
tamsin.myLifeForce();
dyson.myLifeForce();
