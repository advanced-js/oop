var superHero = function(power){
	this.power = power;
	this.costume = "cape";
	this.sideKick = "Tim Armstrong";
};

superHero.prototype.comic = function(){
	console.log(this.costume);
};

superHero.prototype.kill = function(enemy){
	enemy.sideKick = "Dead";
	alert(enemy.sideKick);
};

var plane = new superHero("I can fly!");
var car = new superHero("I can drive!")

plane.comic();
car.kill(plane);

