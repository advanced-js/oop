QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});


// ADD TESTS HERE
QUnit.test("create superheroes test", function(assert) {
	var spiderman = new SuperHero("Spider-Man", "Peter Parker", "shoot spider web");
	assert.strictEqual(spiderman.useSuperPower(), "Spider-Man uses super power shoot spider web", "Spider-Man was created correctly");
	var superman = new SuperHero("Superman", "Clark Kent", "super strength");
	assert.strictEqual(superman.useSuperPower(), "Superman uses super power super strength", "Superman was created correctly");
});

QUnit.test("team up test", function(assert) {
	assert.strictEqual(spiderman.teamUp(superman), "Spider-Man is teaming up with Superman", "Spider-Man teams up with Superman successfully");
});

