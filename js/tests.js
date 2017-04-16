QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

// Check to see if superman.name is equal


QUnit.test('superman.name', function(assert) {
	assert.strictEqual(superman.name, "Clark Kent", "Superman's name is Clark Kent");
});

QUnit.test('superman.age', function(assert) {
	assert.strictEqual(superman.age, 27, "Superman's age is 27");
});

QUnit.test('superman.fly() should return a string', function() {
	equal(superman.fly(), "Yes, your superhero can fly!", "superhero.fly() outputs correct string!");
});

QUnit.test('superman.fly() should decrease his energy', function() {
	// superman.fly();
	// equal(superman.energy, 99, "Energy was reduced");
	// equal(superman.energy, superman.energy - 1, "Energy was reduced");

	var previousEnergy = superman.energy;
	superman.fly();
	expect(superman.energy, previousEnergy - 1)


	equal(superman.energy, 98, "Energy was reduced by one again");
});

QUnit.test('superman.destroy()', function() {
	equal(superman.destroy(), "Yes, your superhero can destroy the enemy!", "superhero.destroy() outputs correct string!");
});

QUnit.test('SuperHero.prototype.attack()', function(assert) {
	assert.strictEqual(superman.attack, batman.attack, "Superman and Batman are attacking each other!");
});

QUnit.test("wannabeOne.name", function(assert) {
	assert.strictEqual(wannabeOne.name, "Gunther", "wannabeOne's name is Gunther");
});

QUnit.test("wannabeOne.age", function(assert) {
	assert.strictEqual(wannabeOne.age, 21, "wannabeOne's age is 21");
});

QUnit.test("wannabeOne.attack() should return a string", function() {
	equal(wannabeOne.attack(), "Attack the other superhero!", "wannabeOne.attack() outputs correct string!");
});

QUnit.test("wannabeOne.tookSteroids() should decrease his punkNess", function() {

	var previousPunkness = wannabeOne.punkNess;
	wannabeOne.tookSteroids();
	expect(wannabeOne.punkNess, previousPunkness - 1);

	equal(wannabeOne.punkNess, 9, 'wannabeOne\'s punkNess reduced by One');
});

QUnit.test("wannabeOne.claimingSelf() should return a string", function() {
	equal(wannabeOne.claimingSelf(), "I'm a punk", 'wannabeOne should return a string that says I\'m a punk');
});
