//Class
var SuperHero = function(superName,secretName,power,weakness) {
	this.motto = "Save the Planet";
	this.energy = 10;
	this.power = power;
	this.weakness = weakness;
	this.secretName = secretName;
	this.superName = superName;
};

//Methods
SuperHero.prototype.saveKittens = function (number) {
	this.energy--;
	var energyLevel = (this.energy * 10);
	console.log("Feeling at " + energyLevel + "% of his power, " + this.secretName + " quickly transformed from his mild mannered alter ego, into " + this.superName + " and used his " +this.power+ " to save the " +number+ " kittens from a burning building.");	
};

SuperHero.prototype.faceOffWithVillain = function (nemesis) {
	this.energy--;
	console.log("In an epic battle, our hero, " + this.superName + ", uses his " + this.power + " to stop his arch nemesis, " + nemesis + " and " + this.motto + ".  Little did our hero know, " +nemesis+ " turned the tides of battle when he found out our hero's only weakness, " +this.weakness);
};



var wolverine = new SuperHero('wolverine','Logan','Slashing & Healing','Magnets');
var flash = new SuperHero('The Flash','Barry Allen','Superhuman speed','banana peels');
var superman = new SuperHero('SuperMan','Clark Kent','Flight, superhuman strength and laser eyes','kryptonite');


wolverine.saveKittens("10");
flash.faceOffWithVillain("Slow Guy");
superman.faceOffWithVillain("Lex Luther");