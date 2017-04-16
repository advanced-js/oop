var SuperHero = function () {
	run: function run(distance) {
		this.position = this.postion + distance;
	}, 
	position: 5,
	attack: function attack(otherSuperhero) {
		otherSuperhero.position = otherSuperhero.position - 3
	}
}

var SuperMan = function(){};
SuperMan.prototype = Object.create(SuperHero.prototype);

SuperMan.prototype.swim = function (distance){
	this.position = this.position + distance;
}

var superhero1 = new SuperHero()
var superhero2 = new SuperHero()

superhero1.run(4)
superhero2.attack(superhero1)