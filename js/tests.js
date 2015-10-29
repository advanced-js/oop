QUnit.test("SuperHero Object", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

QUnit.test("superHero object", function(assert) {
	var x = new SuperHero("Superman", "God");
 	assert.strictEqual(x.title, "Superman");
 	assert.strictEqual(x.power, "God");
 	// assert.strictEqual(x.attack(a), a -=10);
 });
