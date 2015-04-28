QUnit.test("hello test", function(assert) {
	var Hulk = new SuperHero('The Incredible Hulk', 'rage', false);
	var Thor = new SuperHero('Thor', 'hammer', false);
	var Captain = new SuperHero('Captain America', 'patriotism', false);
	var IronMan = new SuperHero('Iron Man', 'tech', false);
	var Loki = new SuperHero('Loki', 'tesseract', true);

	assert.strictEqual(Captain.win(), 'Captain America saves the day!');
	assert.strictEqual(Thor.partnerWith(IronMan), 'Crime-fighting duo Thor and Iron Man!');
	assert.strictEqual(Hulk.attack(Loki), 'The Incredible Hulk has attacked Loki using rage');
	assert.strictEqual(Thor.teamUpWith(IronMan, Captain, Hulk), 'Thor has teamed up with Iron Man, Captain America and The Incredible Hulk');
});

// ADD TESTS HERE
