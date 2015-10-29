'use strict';
QUnit.test('hello test', function(assert) {
  assert.strictEqual(1 + 1, 2, 'One plus one is two');
});
//__________________________

// TESTS FOR SOLUTION PART 2
//__________________________

// Testing Constructor

QUnit.module ('superHero.constructor');
test('constructor', function(assert) {

	var m = new SuperHero('testHero');

	var hasName = m.superName;
	assert.strictEqual(hasName, 'testHero', 'has property superName');

	var hasPower = m.hasSecretPower;
	assert.strictEqual(hasPower, true, 'has property secretPower');

	var isAlive = m.isAlive;
	assert.strictEqual(isAlive, true, 'has property isAlive');

	var hasWeapon = m.hasWeapon;
	assert.strictEqual(hasWeapon, true, 'has property hasWeapon');

	var hasShield = m.hasShield;
	assert.strictEqual(hasShield, true, 'has property hasShield');
});

var a = 'My battle skills combined with these weapons will do you in!!';
var b = 'I will fight you with my bare hands!!';
var c = 'With these secret powers you don\'t have a chance!!';
var d = 'With this shield any weapon you try is just a toy!!';
var e = 'Ha! Your attack is no match for my secret powers!!';

//Testing attack method

QUnit.module ('superHero.prototype.attack');
test('method attack', function(assert) {

	var m = new SuperHero('testHero');
	var attack = m.attack();
	switch (attack) {

		case m.hasSecretPower === false && m.hasWeapon === true:
		assert.equal(attack, a, 'My battle skills combined with these weapons will do you in!!');
		break;

		case m.hasSecretPower === false && m.hasWeapon === false:
		assert.equal(attack, b, 'I will fight you with my bare hands!!');
		break;

		case m.hasSecretPower === true && m.hasWeapon === true:
		assert.equal(attack, c, 'With these secret powers you don\'t have a chance!!');
		break;

		case m.hasSecretPower === true && m.hasWeapon === false:
		assert.equal(attack, c, 'With these secret powers you don\'t have a chance!!');
		break;

		default:
		assert.equal(attack, b, 'DEFAULT CALLED');
	}
});

//*****************
QUnit.module ('superHero.prototype.counterAttack');
test('method counterAttack', function(assert) {

	var m = new SuperHero('testHero');
	var attack = m.attack();
	switch (attack) {

		case m.hasSecretPower === false && m.hasShield === true:
		assert.equal(attack, d, 'With this shield any weapon you try is just a toy!!');
		break;

		case m.hasSecretPower === false && m.hasShield === false:
		assert.equal(attack, b, 'I will fight you with my bare hands!!');
		break;

		case m.hasSecretPower === true && m.hasShield === true:
		assert.equal(attack, e, 'Ha! Your attack is no match for my secret powers!!');
		break;

		case m.hasSecretPower === true && m.hasShield === false:
		assert.equal(attack, e, 'Ha! Your attack is no match for my secret powers!!');
		break;

		default:
		assert.equal(attack, c, 'DEFAULT CALLED');
	}
});