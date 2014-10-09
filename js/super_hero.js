var SuperHero = function(name, city) {
	this.name = name;
	this.city = city;
}

SuperHero.prototype.disguise = function(alias) {
	this.name = alias;
}

SuperHero.prototype.fight = function(enemy) {
	return (this.name + ' punches ' + enemy.name + ' in the face!!');
}

SuperHero.prototype.motivate = function(friend) {
	return ("Don't be such a pansy, " + friend.name + "! You have to protect " + friend.city + "!!");
}
