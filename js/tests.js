QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

QUnit.test("V1 Tests", function(assert) {
  assert.strictEqual(thor.name, "Thor", "Name Property");
  assert.strictEqual(batman.superShout(), "I am Super Batman", "Shout name Method");
  assert.strictEqual(thor.isAvenger, true, "Check if Avenger");
  assert.strictEqual(batman.isAvenger, false, "Check if Avenger");
});

QUnit.test("V2 Tests", function(assert) {
  //setup
  var hero1 = new SuperHero("hero1");
  var hero2 = new SuperHero("hero2");

  //tests
  assert.strictEqual(hero1.attack(hero2, 100), true, "Defeated");
  assert.strictEqual(hero2.attack(hero1, 90), false, "Alive");
});
