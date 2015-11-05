
QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

QUnit.test("SuperHero Object", function(assert){

	ok(DrMohinderSuresh, 'Super hero is Dr. Mohinder Suresh');
	ok (DrMohinderSuresh.energy, 'Dr. Modiner \'s current energy level ');
	ok (ClaireBennet.energy, 'ClaireBennet energy level');
	assert.strictEqual(ClaireBennet.energy, 6, "ClaireBennet should have energy of 6 after the attack");
});