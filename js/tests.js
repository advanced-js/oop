QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE
QUnit.test("SuperHero value check", function(assert){
	//Check that each superhero instance contains all four expected arguments
	
	//Sample of defective SuperHero instance
	//var dudMan = new SuperHero('Dud Man','nopowers');
	
	SuperHero.allInstances.forEach(function(entry) {
		assert.notEqual(entry.power, undefined, "Power Entered for " + entry.superName;
		assert.notEqual(entry.weakness, undefined, "Weakness Entered for " + entry.superName);
		assert.notEqual(entry.secretName, undefined, "Secret Name Provided for " + entry.superName);
		assert.notEqual(entry.superName, undefined, "Super Name Provided for " + entry.superName);
	});
});

/*
//No longer need the below sample - as of V4, "wolverine" is thrown into the ocean & is the new sample to be tested at 0 health
//Sample of dead Super Hero (attacked 4 times = 0 health)
//Changing the number of times sampleman is attacked to less than 4 will net a failed result according to the sample assertations in this comment block
var sampleman = new SuperHero('Sample Man','Mr. Sample','Passing Tests','Bugs');
sampleman.faceOff(flash);
sampleman.faceOff(flash);
sampleman.faceOff(flash);
sampleman.faceOff(flash);
*/

SuperHero.allInstances.forEach(function(entry) {
		if (entry.health === 0)  {
			QUnit.test("Confirm SuperHero death at zero health", function(assert){
									assert.equal(entry.alive, false, entry.superName + " alive status is set to false when health is at 0")
			});
		}
});


SuperHero.allInstances.forEach(function(entry) {
	if (typeof entry.healingPowers !== "undefined" && entry.healingPowers && entry.health > 15 && entry.alive) {
		QUnit.test("Check the math on subclass healer types", function(assert){
			var expectedHealth = entry.health - 15;
			entry.faceOff(flash);
			assert.equal(entry.health, expectedHealth, entry.superName + " is a healer type and only took 15 points of damage instead of 25");
			//reset the health to its original before testing
		});
	}
});
