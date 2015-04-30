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

QUnit.test('superman.fly()', function() {
	equal(superman.fly(), "Yes, your superhero can fly!", "superhero.fly() outputs correct string!");
});

QUnit.test('superman.destroy()', function() {
	equal(superman.destroy(), "Yes, your superhero can destroy the enemy!", "superhero.destroy() outputs correct string!");
});
