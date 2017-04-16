QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

QUnit.test("Emma Stone and Michelle Williams have the same prototype", function(assert) {
  assert.equal(emmaStone.prototype, michelleWilliams.prototype);
});

QUnit.test("Michelle Williams lost a life", function(assert) {
  assert.equal(michelleWilliams.lives, 2);
});
