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

//Testing attack method with one instance of superHero: 'testHero'

QUnit.module ('superHero.prototype.attack');
test('method attack', function(assert) {

	var m = new SuperHero('testHero');
	var attack = m.attack();
	switch (attack) {

		case m.hasSecretPower === false && m.hasWeapon === true:
		assert.strictEqual(attack, a, 'My battle skills combined with these weapons will do you in!!');
		break;

		case m.hasSecretPower === false && m.hasWeapon === false:
		assert.strictEqual(attack, b, 'I will fight you with my bare hands!!');
		break;

		case m.hasSecretPower === true && m.hasWeapon === true:
		assert.strictEqual(attack, c, 'With these secret powers you don\'t have a chance!!');
		break;

		case m.hasSecretPower === true && m.hasWeapon === false:
		assert.strictEqual(attack, c, 'With these secret powers you don\'t have a chance!!');
		break;

		default:
		assert.strictEqual(attack, c, 'DEFAULT CALLED');
	}
});

//Testing counterAttack method with another instance of superHero: 'otherTestHero'
QUnit.module ('superHero.prototype.counterAttack');
test('method counterAttack', function(assert) {

	var w = new SuperHero('otherTestHero');
	var counterAttack = w.counterAttack();
	switch (counterAttack) {

		case w.hasSecretPower === false && w.hasShield === true:
		assert.equal(counterAttack, d, 'With this shield any weapon you try is just a toy!!');
		break;

		case w.hasSecretPower === false && w.hasShield === false:
		assert.equal(counterAttack, b, 'I will fight you with my bare hands!!');
		break;

		case w.hasSecretPower === true && w.hasShield === true:
		assert.equal(counterAttack, e, 'Ha! Your attack is no match for my secret powers!!');
		break;

		case w.hasSecretPower === true && w.hasShield === false:
		assert.equal(counterAttack, e, 'Ha! Your attack is no match for my secret powers!!');
		break;

		default:
		assert.equal(counterAttack, e, 'DEFAULT CALLED');
	}
});

//Testing outcome function:
QUnit.module ('superHero.prototype.counterAttack');
test('method counterAttack', function(assert) {
	switch (battleOutcome(attack, counterAttack)) {
		case (x === a && y === d):
 return f;}
 else if (x === b && y === d){
 return g;}
 else if (x === c && y === d){
 return h;}
 
 else if (x === a && y === b){
 return h;}
 else if (x === b && y === b){
 return f;}
 else if (x === c && y === b){
 return h;}
 
 else if (x === a && y === e){
 return g;}
 else if (x === b && y === e){
 return g;}
 else if (x === c && y === e){
 return f;}
}
