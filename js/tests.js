QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE
QUnit.test("SuperHero Name Drax", function(assert) {
  assert.equal(drax.hero_name, 'drax', "Drax Name is Drax");
});

QUnit.test("SuperHero Name Gamora", function(assert) {
  assert.equal(gamora.hero_name, 'gamora', "Gamora Name is Gamora");
});

QUnit.test("SuperHero Name Groot", function(assert) {
  assert.equal(groot.hero_name, 'groot', "Drax Name is Groot");
});
