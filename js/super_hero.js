var Superhero = function(name, dmgPoints, hitPoints) {
	if (dmgPoints <= 0) {
		throw new Error('Damage cannot be less than 0');
	}
	if (hitPoints <= 0) {
		throw new Error('Health cannot be less than 0');
	}
	this.name = name;
	this.dmgPoints = dmgPoints;
	this.hitPoints = hitPoints || 100;	
	this.currentHitPoints = this.hitPoints;
	console.log(this + ' enters the arena! HEALTH: ' + this.hitPoints + ', POWER: ' + this.dmgPoints);
};

Superhero.prototype.toString = function() {
	return this.name;
};

Superhero.prototype.isDead = function() {
	return this.currentHitPoints <= 0;
};

Superhero.prototype.revive = function() {
	this.currentHitPoints = this.hitPoints;
	console.log(this + ' revived to ' + this.currentHitPoints + ' hit points.');
};

Superhero.prototype.attack = function(otherHero) {
	if (otherHero === this) {
		console.log(this + ' tried attacking themself but can\'t do that!');
		return false;
	}
	if (this.isDead()) {
		console.log(this + ' can\'t attack. Already dead!');
		return false;
	}
	var remaining = otherHero.currentHitPoints - this.dmgPoints;
	otherHero.currentHitPoints = remaining <= 0 ? 0 : remaining;
	console.log(this + ' attacked ' + otherHero + ' for ' + this.dmgPoints + ' hit points. ' + otherHero + ' has ' + otherHero.currentHitPoints + ' health remaining.');

	if (otherHero.currentHitPoints <= 0) {
		console.log(otherHero + ' died.');
	}
	return true;
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


var luke = new Superhero('Luke', 20, 100);
var leia = new Superhero('Leia', 30, 50);
var yoda = new Superhero('Yoda', 35, 150);
var vader = new Superhero('Vader', 25, 200);

var heroes = [luke,leia,yoda,vader];

var hero1,hero2;

while (heroes.length > 1) {
	shuffleArray(heroes);
	hero1 = heroes[0];
	hero2 = heroes[1];
	hero1.attack(hero2);
	if (hero2.isDead()) {
		heroes.splice(1, 1);
	}
}

console.log(heroes[0] + ' is the victor!');
