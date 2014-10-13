var SuperHero = function SuperHero(name, power, health){
	this.name = name;
	this.power = power;
	this.health = health || 100;
};

SuperHero.prototype.getHealthReport = function getHealthReport(target){
	console.log(target.name + ' now has health of ' + target.health);
}
SuperHero.prototype.attack = function attack(target){
	console.log(target.name + ' is being attacked by ' + this.name);
	target.health -= 10;
	//console.log(target.name + ' now has health of ' + target.health);
	this.getHealthReport(target);
}
SuperHero.prototype.giveMotivationalSpeech = function giveMotivationalSpeech(target){
	console.log(this.name + ' is giving a motivation speech to ' + target.name);
	target.health += 10;
	//console.log(target.name + ' now has health of ' + target.health);
	this.getHealthReport(target);
}


var batman = new SuperHero('Batman', 'being wealthy');
var superman = new SuperHero('Superman', 'being an alien');

batman.attack(superman);
batman.giveMotivationalSpeech(superman);
