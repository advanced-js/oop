// var SuperHero = ...

var SuperHero = SuperHero || {};
	SuperHero = function(title, power) {
		this.title = title;
		this.power = power;
		this.health = 100;
		this.attack = function(opponent) {
		// var opponent
			opponent.health -= 10;
		};
	};

var superman = new SuperHero('Superman', 'god');
var lex = new SuperHero('villian', 'money');

superman.attack(lex);


