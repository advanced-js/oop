// var SuperHero = ...

// object constructor
var SuperHero = function(name,alias, power){
	this.name = name;
	this.alias = alias;
	this.power = power;
	this.SuperHeroInfo = SuperHeroInfo;
}


// object method
function SuperHeroInfo() {
	line1 = "Name: " + this.name + "</br>";
	line2 = "Alias: " + this.alias + "</br>";
	line3 = "Birth Place: " + this.birthPlace + "</br>";
	document.write(line1, line2, line3);
	return this.name;
}

// create object instance
var superman = new SuperHero("Superman", "Clark", "Super Strength");

// extend object instance
superman.birthPlace = "Crypton";

// call method on the instance of the object
superman.SuperHeroInfo();

SuperHero.prototype.fly = function() {
	console.log('up and away');

}();

