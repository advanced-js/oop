// var SuperHero = SuperHero || {};
// 	SuperHero = function(name, power, sex, attack) {
// 		this.name = name;
// 		this.power = power;
// 		this.sex = sex;
// 		this.attack = function(max, min) {
// 			this.damage = Math.floor(Math.random() * (max - min + 1)) + min;
// 		console.log(attack());
// 		};
// 	};

var SuperHero = function() {
	this.health = 100;

	this.attack = function(opponent) {
		// var opponent
		console.log(opponent);
		opponent.health -= 10;
	};

};



var superman = new SuperHero();



var lex = new SuperHero();

superman.attack(lex);




var counter = {
	count: 10
};

counter.count = counter.count - 5;
counter.count -= 5;