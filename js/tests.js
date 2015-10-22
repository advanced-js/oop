QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE
QUnit.test("side kick test", function(assert){
	assert.strictEqual(plane.sideKick, "Dead", "Planes side kick was dynamically changed to dead.")
	});

QUnit.test("costume test", function(assert){
	assert.strictEqual(car.costume, "cape", "Planes side kick was dynamically changed to dead.")
	});