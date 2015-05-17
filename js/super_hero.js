var SuperHero = function(name) {
	this.name = name;
	this.lifeForce = 100;
	this.dead = false;
};

SuperHero.prototype.heal = function() {
	this.lifeForce = 100;
};

SuperHero.prototype.attack = function(opponent) {
	if (opponent.lifeForce > 0) {
		opponent.lifeForce -= 20;
		this.lifeForce -= 5;
		if (opponent.lifeForce <= 0) {
			opponent.youreDead();
		}
		if (this.lifeForce <= 0) {
			this.youreDead();
		}
	} else {
		console.log(opponent.name + " is already dead");
	}
};
SuperHero.prototype.spotted = function() {
	console.log("It's a bird! It's a plane! It's ..." + this.name);
};

SuperHero.prototype.youreDead = function() {
	this.name = "Ghost of " + this.name;
	this.dead = true;
};