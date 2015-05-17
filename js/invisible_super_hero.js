var InvisibleSuperHero = function(name) {
	this.visible = true;
};

InvisibleSuperHero.prototype = Object.create(SuperHero.prototype);

InvisibleSuperHero.prototype.hide = function() {
	this.visible = false;
};
InvisibleSuperHero.prototype.showYourself = function() {
	this.visible = true;
};