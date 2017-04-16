QUnit.test("OOP Tests", function(assert) {
	
	//TEST IF PRODUCTS ARE DEFINED
	var products = 'im a product';
	assert.ok(products, "products exist / are truthy");
	
	//MAKE A TEST FAIL
	assert.equal(1, 0, "one is equal to zero");

	//OOP TESTS
	assert.equal(batman.prototype, superman.prototype, "Batman and Superman have the same prototype");

	batman.attack(superman);
	assert.equal(superman.health, 90, "Superman was attacked by Batman");

	batman.giveMotivationalSpeech(superman);
	assert.equal(superman.health, 100, "Superman was given a motivational speech by Batman");
});
