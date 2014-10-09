QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

QUnit.test("Do we know who is who?", function(assert) {
  assert.strictEqual(superMan.name, "superman", "superman has the right name");
  assert.strictEqual(doctorEvil.name, "doctorevil", "doctor evil has the right name");
});

QUnit.test("Did good win over evil?", function(assert) {
  assert.strictEqual(superMan.alive, true, "superman is alive");
  assert.strictEqual(doctorEvil.alive, false, "drevil is dead");
});
