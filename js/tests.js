var spiderman = new oop.SuperHero('spiderman', 'spider skills', 3);
var batman = new oop.SuperHero();

QUnit.test("Test Init", function(assert) {
  assert.strictEqual(spiderman.getName(), 'spiderman', "Name is spiderman");
  assert.strictEqual(spiderman.getStrength(), 3, "Strength is 3");
  assert.strictEqual(spiderman.getPower(), 'spider skills', "Has spider skills");
});

QUnit.test("Test PowerUp", function(assert) {
  assert.strictEqual(spiderman.powerUp(), 4, "Strength increased from 3 to 4");
  assert.strictEqual(spiderman.powerUp(), 5, "Strength increased from 4 to 5");
});

QUnit.test("Test Defaults", function(assert) {
  assert.strictEqual(batman.getName(), 'batman', "Name is batman");
  assert.strictEqual(batman.getStrength(), 1, "Strength is 3");
  assert.strictEqual(batman.getPower(), 'money', "Has money");
});


