var SuperHero = function SuperHero(name, power, health){
	this.name = name;
	this.power = power;
	this.health = health || 100;
	this.attack = function(target){

		console.log(target.name + ' is being attacked by ' + this.name);
		
		target.health -= 10;
		
		console.log(target.name + ' now has health of ' + target.health);
	}
};

var batman = new SuperHero('Batman', 'being wealthy');
var superman = new SuperHero('Superman', 'being an alien');

batman.attack(superman);
