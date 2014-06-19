function getNewSuperman (toughness, strength) {
	return new SuperHero ({
		name: 'Superman',
		power: 10,
		defense: 8,
		toughness: toughness || 150,
		strength: strength || 20
	});
}

function getNewBatman (toughness, strength) {
	return new SuperHero ({
		name: 'Batman',
		power: 8,
		defense: 9,
		toughness: toughness || 170,
		strength: strength || 20
	});	
}

function getNewMagicHero () {
	return new MagicHero ();
}

function getNewAlienHero () {
	return new AlienHero ();
}

var mh = getNewMagicHero();
var ah = getNewAlienHero();

console.log(ah)

test('Superman initialization', function() {
	var s = getNewSuperman();

	ok(s.name === 'Superman', 'Superman\'s name initialized to: ' + s.name);
	ok(s.power === 10, 'Superman\'s power initialized to: ' + s.power);
	ok(s.defense === 8, 'Superman\'s defense initialized to: ' + s.defense);
	ok(s.toughness === 150, 'Superman\'s toughness initialized to: ' + s.toughness);
	ok(s.strength === 20, 'Superman\'s strength initialized to: ' + s.strength);
	ok(s.state === 0, 'Superman\'s state initialized to: ' + states[s.state]);
	
});

test('Superman attacks Batman', function() {
	var s = getNewSuperman();
	var b = getNewBatman();

	ok(s.state === 0, 'Superman is not attacking, state is: ' + states[s.state]);

	ok(s.attack(b) === true, 'Superman attacks Batman!');
	ok(s.state === 1, 'Superman\'s state set correctly to: ' + states[s.state]);

	// Batman toughness: 170 - ((2*10) + 9) = 141
	ok(b.toughness === 141, 'Batman\'s toughness reduced correctly: ' + b.toughness);

	// Superman's strength: 20 - 2 = 18
	ok(s.strength === 18, 'Superman\'s strength reduced correctly: ' + s.strength);
});

test('Batman does not have sufficient strength to attack', function() {
	var s = getNewSuperman();
	var b = getNewBatman(20, 1);

	ok(b.strength === 1, 'Batman\'s strength is: ' + b.strength);
	ok(b.attack(s) === false, 'Batman cannot attack, does not have sufficient strength');
});


test('Batman defends', function () {
	var s = getNewSuperman();
	var b = getNewBatman();

	ok(b.state === 0, 'Batman is not defending, state is: ' + states[b.state]);
	ok(b.getDefense() === 9, 'Batman\'s defense is: ' + b.getDefense());
	ok(b.defend() === true, 'Batman defends');
	ok(b.state === 2, 'Batman\'s state set to: ' + states[b.state]);

	// Batman's tempDefense: 9 + 10 = 19
	ok(b.getDefense() === 19, 'Batman\'s defense increased correctly to: ' + b.getDefense());
});

test('Superman rests', function () {
	var s = getNewSuperman();
	var b = getNewBatman();

	ok(s.toughness === 150, 'Superman\'s toughness is: ' + 150);
	ok(s.rest() === true, 'Superman rests');
	ok(s.state === 3, 'Superman\'s state set to: ' + states[s.state]);

	// Superman toughness: 150 + 5 = 155
	ok(s.toughness === 155, 'Superman\'s toughness increased correctly to: ' + s.toughness);
});

test('Batman gets a strength boost', function () {
	var s = getNewSuperman();
	var b = getNewBatman();

	ok(b.strength === 20, 'Batman\'s strength is: ' + b.strength);
	ok(b.getStrengthBoost() === true, 'Batman gets a strength boost');

	// Batman strength boost: 20 + 10 = 30
	ok(b.strength === 30, 'Batman\'s strength is: ' + b.strength);
});

test('Batman kills Superman', function () {
	var s = getNewSuperman(1); // reduce base toughness for purposes of test
	var b = getNewBatman();

	ok(s.state === 0, 'Superman\'s base state is: ' + states[s.state]);
	ok(s.toughness === 1, 'Superman\'s toughness is: ' + s.toughness);
	ok(b.attack(s) === true, 'Batman attacks Superman');

	// Superman's toughness: 1 - 24 = -23
	ok(s.toughness === -23, 'Superman\'s toughness is now: ' + s.toughness);

	ok(s.state === 4, 'Superman\'s toughness is <0, Superman\'s state is now: ' + states[s.state]);
});

test('Superheros high five (both alive)', function () {
	var s = getNewSuperman();
	var b = getNewBatman();

	ok(s.highFive(b) === true, 'Superman and Batman high five!');

	ok(s.power === 11, 'Superman power increased by 1: ' + s.power); // 10 + 1 = 11
	ok(s.defense === 9, 'Superman defense increased by 1: ' + s.defense); // 8 + 1 = 9
	ok(s.toughness === 160, 'Superman toughness increased by 10: ' + s.toughness); // 150 + 10 = 160
	ok(s.strength === 24, 'Superman strength increased by 4: ' + s.strength); // 20 + 4 = 24

	ok(b.power === 9, 'Batman power increased by 1: ' + b.power); // 8 + 1 = 9
	ok(b.defense === 10, 'Batman defense increased by 1: ' + b.defense); // 9 + 1 = 10
	ok(b.toughness === 180, 'Batman toughness increased by 10: ' + b.toughness); // 170 + 10 = 180
	ok(b.strength === 24, 'Batman strength increased by 4: ' + b.strength); // 20 + 4 = 24
});

test('Superheros high five (one dead)', function () {
	var s = getNewSuperman();
	var b = getNewBatman(1); // reduce base toughness for purposes of test

	s.attack(b);

	ok(b.state === 4, 'Superman attacks Batman, Batman\'s state is now: ' + states[b.state]);
	ok(s.highFive(b) === false, 'Superman and Batman cannot high five because Batman is dead. Bummer.');
});