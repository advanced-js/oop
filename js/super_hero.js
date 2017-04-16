var SuperHero = function() {
	this.name = " ";
};

SuperHero.prototype.disguise = function(alias) {
	this.alias = alias;
};

SuperHero.prototype.fight = function(enemy) {
	return (this.name + ' punches ' + enemy.name + ' in the face!!');
};

SuperHero.prototype.motivate = function(friend) {
	return ("Don't be such a pansy, " + friend.name + "! You have to protect " + friend.city + "!!");
};


// Elementalist subclass
var Elementalist = function(element, team) {
	this.element = element;
	this.team = team;
};

Elementalist.prototype = new SuperHero();

Elementalist.prototype.useElement = function(enemy) {
	return (this.name + ' uses the power of ' + this.element + ' against ' + enemy.name + '!');
};

Elementalist.prototype.callTeam = function() {
	return (this.name + ' calls the ' + this.team + ' for help!');
};

// Caped Crusader
var CapedCrusader = function(city) {
	this.hasCape = true;
	this.city = city;
};

CapedCrusader.prototype = new SuperHero();

CapedCrusader.prototype.complimentCape = function(friend) {
	return ("Ahmahgah " + friend.name + ", I loooove your cape.");
};

CapedCrusader.prototype.revealIdentity = function() {
	return ("I know you think that I'm " + this.alias + ", but I'm really " + this.name + "!");
};
