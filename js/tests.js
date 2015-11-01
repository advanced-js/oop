var attack;
var counterAttack;

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
var f = 'GOOD AND EVIL BATTLE TO THE END!!!';
var g = 'EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!';
var h = 'GOOD TRUMPS EVIL AGAIN!!';

//Testing attack method with one instance of superHero: 'testHero'

QUnit.module ('superHero.prototype.attack');
QUnit.test('method attack', function(assert) {

	var m = new SuperHero('testHero');
	attack = m.attack();

	// console.log(Math.round(Math.random() * 18) % 2 === 0);
	// console.log(Math.round(Math.random() * 25) % 5 === 0);

	if
			(m.hasSecretPower === false && m.hasWeapon === true) {
			assert.strictEqual(attack, a, 'My battle skills combined with these weapons will do you in!!');

	} else if

		(m.hasSecretPower === false && m.hasWeapon === false) {
			assert.strictEqual(attack, b, 'I will fight you with my bare hands!!');

	} else if

		(m.hasSecretPower === true && m.hasWeapon === true) {
			assert.strictEqual(attack, c, 'With these secret powers you don\'t have a chance!!');

	} else

		{assert.strictEqual(attack, c, 'With these secret powers you don\'t have a chance!!');
	}

	// console.log("ATTACK FROM TEST: " + attack);

	});


//Testing counterAttack method with another instance of superHero: 'otherTestHero'
QUnit.module ('superHero.prototype.counterAttack');
QUnit.test('method counterAttack', function(assert) {


	var w = new SuperHero('otherTestHero');
	counterAttack = w.counterAttack();

		if

			(w.hasSecretPower === false && w.hasShield === true) {
				assert.equal(counterAttack, d, 'With this shield any weapon you try is just a toy!!');

			} else if

			(w.hasSecretPower === false && w.hasShield === false) {
				assert.equal(counterAttack, b, 'I will fight you with my bare hands!!');

			} else if

			(w.hasSecretPower === true && w.hasShield === true)
			{assert.equal(counterAttack, e, 'Ha! Your attack is no match for my secret powers!!');

		} else

			{assert.equal(counterAttack, e, 'Ha! Your attack is no match for my secret powers!!');
		}
		// console.log("COUNTERATTACK FROM TEST: " + counterAttack);
	});


//Testing outcome function:
QUnit.module ('Test of battleOutcome function');
QUnit.test('battleOutcome Function', function(assert) {
	var x = attack;
	var y = counterAttack;
	var battleOutcomeTest = battleOutcome(x, y);

	// console.log(x);
	// console.log(y);


if (x === a && y === d) {

	assert.strictEqual(battleOutcomeTest, f, 'GOOD AND EVIL BATTLE TO THE END!!!');

} else if

(x === b && y === d) {
		assert.strictEqual(battleOutcomeTest, g, 'EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!');

	} else if

	(x === c && y === d) {
		assert.strictEqual(battleOutcomeTest, h, 'GOOD TRUMPS EVIL AGAIN!!');

	} else if

	(x === a && y === b) {
		assert.strictEqual(battleOutcomeTest, h, 'GOOD TRUMPS EVIL AGAIN!!');

	} else if

	(x === b && y === b) {

		assert.strictEqual(battleOutcomeTest, f, 'GOOD AND EVIL BATTLE TO THE END!!!');

	} else if

	(x === c && y === b) {

		assert.strictEqual(battleOutcomeTest, h, 'GOOD TRUMPS EVIL AGAIN!!');

	} else if

	(x === a && y === e) {

		assert.strictEqual(battleOutcomeTest, g, 'EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!');

	} else if

	(x === b && y === e) {

		assert.strictEqual(battleOutcomeTest, g, 'EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!');

	} else {

		assert.strictEqual(battleOutcomeTest, f, 'GOOD AND EVIL BATTLE TO THE END!!!');

	}
		// console.log("BATTLEOUTCOME FROM TEST: " + battleOutcomeTest);

});

