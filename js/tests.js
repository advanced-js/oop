

// ADD TESTS HERE

QUnit.test("hulk and flash are born", function(assert) {
	var hulk = new SuperHero("Bruce Banner", "The Hulk", 34, "Superhuman Strength");
	assert.strictEqual(hulk.talk(),"I'm Bruce Banner, I'm 34 yrs old, and my alter ego is The Hulk!", "Hulk is talking correctly.");
	assert.strictEqual(hulk.newPower("Resistance to Injury"), "My new power is Resistance to Injury!", "Hulk's power was changed correctly.");
	var flash = new SuperHero("Barry Allen", "The Flash", 26, "Superhuman Speed");
	assert.strictEqual(flash.talk(), "I'm Barry Allen, I'm 26 yrs old, and my alter ego is The Flash!", "Flash is talking correctly.");
	assert.strictEqual(flash.newPower("Invisibility"), "My new power is Invisibility!", "Flash's power was changed correctly.");
});


QUnit.test("bragging test", function(assert) {
	assert.strictEqual(flash.brag(hulk), "Barry Allen is bragging to Bruce Banner that he is the better super hero!", "Flash is definitely bragging to the Hulk!");
});
