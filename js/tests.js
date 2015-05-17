QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE
QUnit.test("superhero's name", function(assert) {
  assert.strictEqual(superMan.name, "Superman", "SuperHero is Superman");
});

QUnit.test("superhero's ability", function(assert) {
  assert.strictEqual(superMan.ability, "superpower", "SuperHero's ability is superpower");
});

QUnit.test("superhero reads mind", function(assert) {
  assert.strictEqual(superMan.superPower(), "Superman can read minds with his ability superpower", "SuperHero can read minds with his ability superpower");
});
