
var SuperHero = function(name, power) {
	this.name = name; 
	this.power = power; 
	this.getInfo = function(){
		return this.name + " has " + this.power;
	}
}

SuperHero.prototype.cup = function() { 
	return this.name + ' ' + this.power; 
}


SuperHero.prototype.sound = "Bang";
SuperHero.prototype.makeSound = function(){
	return " and says " + this.sound;
}


var batman = new SuperHero("Batman", "batarang"); 
var superman = new SuperHero("Superman", "super strength")




document.write(batman.getInfo() + batman.makeSound() + "<br />");
document.write(superman.getInfo() + superman.makeSound() + "<br />");

document.write(superman.cup() + "<br />"); 
document.write((superman.cup === batman.cup) + "<br />");

document.write((superman.name === batman.name) + "<br />");


