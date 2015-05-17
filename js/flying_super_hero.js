var FlyingSuperHero = function(name) {
	this.moving = "walking";
};

FlyingSuperHero.prototype = Object.create(SuperHero.prototype);

FlyingSuperHero.prototype.flyAway = function() {
	this.moving = "flying";
};