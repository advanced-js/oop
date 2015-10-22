QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// TESTS FOR SOLUTION PART 1

test('assertions', function (superName){
ok(this.superName = superName,'has property superName');
ok(true, 'has property secretPower');
ok(true, 'property isAlive is true');
ok(true, 'property hasWeapon is true');
ok(true, 'property hasShield is true');
})

test('conditional assertions', function (assert){
	assert.notEqual(false, true, "My weapons will save me");
	assert.equal(false, false, "Uh oh. This is going to be sticky");
	assert.equal(true, true, "You'll never Harm Me!!");
	assert.notEqual(true, false, "You'll never Harm Me!!");
});
