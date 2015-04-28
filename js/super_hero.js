var SuperHero = function(name, ability, isVillain) {
	this.name = name;
	this.ability = ability;
	this.partnerWith = function(otherHero) {
		return 'Crime-fighting duo ' + this.name + ' and ' + otherHero.name + '!';
	}
	this.attack = function(otherHero) {
		return this.name + ' has attacked ' + otherHero.name + ' using ' + this.ability;
	}
	this.win = function() {
		return this.name + ' saves the day!';
	}
	this.teamUpWith = function(teammates) {
		var sizeOfTeam = arguments.length;
		var aboutTeam = this.name + ' has teamed up with ';
		for (var i=0; i < sizeOfTeam; i++) {
			aboutTeam += arguments[i].name ;
			if (i === sizeOfTeam - 2) {
				aboutTeam += ' and ';
			} else if (sizeOfTeam > 2 && i < sizeOfTeam - 1) {
				aboutTeam += ', ';
			}
		}
		return aboutTeam;
	}
};

var Thor = new SuperHero('Thor', 'hammer', false);
var Hulk = new SuperHero('The Incredible Hulk', 'rage', false);
var Captain = new SuperHero('Captain America', 'patriotism', false)
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

