var SuperHero = function(name, ability, isVillain) {
	this.name = name;
	this.ability = ability;
	this.isVillain = isVillain;
};

SuperHero.prototype.partnerWith = function(otherHero) {
	return 'Crime-fighting duo ' + this.name + ' and ' + otherHero.name + '!';
};

SuperHero.prototype.attack = function(otherHero) {
	return this.name + ' has attacked ' + otherHero.name + ' using ' + this.ability;
};
SuperHero.prototype.win = function() {
	return this.name + ' saves the day!';
};
SuperHero.prototype.teamUpWith = function(teammates) {
	var sizeOfTeam = arguments.length;
	var aboutTeam = this.name + ' has teamed up with ';
	for (var i = 0; i < sizeOfTeam; i++) {
		aboutTeam += arguments[i].name;
		if (i === sizeOfTeam - 2) {
			aboutTeam += ' and ';
		} else if (sizeOfTeam > 2 && i < sizeOfTeam - 1) {
			aboutTeam += ', ';
		}
	}
	return aboutTeam;
};

var IncredibleHulk = function() {
	this.name = 'The Incredible Hulk';
	this.ability = 'rage';
	this.isVillain = false;
};
IncredibleHulk.prototype = Object.create(SuperHero.prototype);
IncredibleHulk.prototype.smash = function() {
	return 'Hulk smash!';
};
IncredibleHulk.prototype.turnGreen = function() {
	return 'Uh oh, the Hulk has turned green.';
};

var CaptainAmerica = function() {
	this.name = 'Captain America';
	this.ability = 'patriotism';
	this.isVillain = false;
};
CaptainAmerica.prototype = Object.create(SuperHero.prototype);
CaptainAmerica.prototype.throwShield = function() {
	return 'The Captain has thrown his shield!';
};

var Thor = new SuperHero('Thor', 'hammer', false);
var Hulk = new IncredibleHulk();
var Captain = new CaptainAmerica();
var IronMan = new SuperHero('Iron Man', 'tech', false);
var Loki = new SuperHero('Loki', 'tesseract', true);

Thor.teamUpWith(Hulk);
Thor.teamUpWith(IronMan, Captain, Hulk);
Thor.attack(Loki);
Hulk.attack(Loki);
Captain.attack(Loki);
IronMan.attack(Loki);
Thor.win();
Hulk.win();
Captain.win();
IronMan.win();

