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
	return new MagicHero ({
		name: 'Magic Bob',
		magic: 15
	});
}

function getNewAlienHero () {
	return new AlienHero ('Alien Sally');
}

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

/* SUBCLASS TESTS */

test('MagicHero subclass initialization', function () {
	var m = getNewMagicHero();

	ok(m.name === 'Magic Bob', 'Name initialized to ' + m.name);
	ok(m.power === 10, 'Power initialized to ' + m.power);
	ok(m.defense === 7, 'Defense initialized to ' + m.defense);
	ok(m.toughness === 170, 'Toughness initialized to ' + m.toughness);
	ok(m.strength === 0, 'Strength initialized to ' + m.strength);
	ok(m.magic === 15, 'Magic initialized to ' + m.magic);
});

test('AlienHero subclass initialization', function () {
	var a = getNewAlienHero();

	ok(a.name === 'Alien Sally', 'Name initialized to ' + a.name);
	ok(a.power === 7, 'Power initialized to ' + a.power);
	ok(a.defense === 9, 'Defense initialized to ' + a.defense);
	ok(a.toughness === 170, 'Toughness initialized to ' + a.toughness);
	ok(a.strength === 30, 'Strength initialized to ' + a.strength);
});

test('MagicHero attacks AlienHero with magic', function () {
	var m = getNewMagicHero(),
		a = getNewAlienHero();

	ok(m.state === 0, 'MagicHero is not attacking, state is: ' + states[m.state]);

	ok(m.magicAttack(a) === true, 'MagicHero attacks AlienHero with magic!');
	ok(m.state === 1, 'MagicHero\'s state set correctly to: ' + states[m.state]);

	// AlienHero toughness: 170 - ((3*10) + 9) = 131
	ok(a.toughness === 131, 'AlienHero\'s toughness reduced correctly: ' + a.toughness);

	// MagicHero's magic: 15 - 3 = 12
	ok(m.magic === 12, 'MagicHero\'s magic reduced correctly: ' + m.magic);
});

test('AlienHero attacks MagicHero with alien strength', function () {
	var m = getNewMagicHero(),
		a = getNewAlienHero();

	ok(a.state === 0, 'AlienHero is not attacking, state is: ' + states[a.state]);

	ok(a.alienAttack(m) === true, 'AlienHero attacks MagicHero with alien strength!');
	ok(a.state === 1, 'AlienHero\'s state set correctly to: ' + states[a.state]);

	// MagicHero's toughness: 170 - ((1 * 7) + 7) = 156
	ok(m.toughness === 156, 'MagicHero\'s toughness reduced correctly: ' + m.toughness);

	// AlienHero's strength: 30 - 1 = 29
	ok(a.strength === 29, 'AlienHero\'s magic reduced correctly: ' + a.strength);
});