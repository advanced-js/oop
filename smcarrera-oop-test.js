// JavaScript Document
// ADD TESTS HERE

QUnit.test("Test Methods: superhero1 toString", function(assert) {
  assert.strictEqual(superhero1.toString(), "Super Hero / superman / can fly / lois lane / earth / Capes: 1");
});

QUnit.test("Test Inheritance: superhero1 name", function(assert) {
  assert.strictEqual(superhero1.name, "superman");
});

QUnit.test("Test Inheritance: superhero2 name", function(assert) {
  assert.strictEqual(superhero2.name, "batman");
});


QUnit.test("Test Method Interaction: superhero1 attacks superhero2", function(assert) {
  assert.strictEqual( Attack(superhero1, superhero2), "superman would beat batman in a fight");
});

QUnit.test("Test Method Interaction: superhero2 attacks superhero1", function(assert) {
  assert.strictEqual( Attack(superhero2, superhero1), "superman would beat batman in a fight");
});


QUnit.test("Test Encapsulation/Sub Class: Walk function", function(assert) {
  assert.strictEqual(superhero2.walk(), "I am walking!");
});

QUnit.test("Test Encapsulation/Sub Class: Universe", function(assert) {
  assert.strictEqual(superhero2.world, "gotham");
});
