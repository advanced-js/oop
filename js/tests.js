QUnit.test("SuperHero Object", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

QUnit.test("superHero object", function(assert) {
	var x = new SuperHero("Superman", "God");
 	assert.strictEqual(x.title, "Superman");
 	assert.strictEqual(x.power, "God");
 	// assert.strictEqual(x.attack(), this.health);
 });

// QUnit.test("loveScene function", function(assert) {
//   var BlackWidow = new Superhero("Black Widow", 1000, "Hawkeye", true, "something russian idk");
//   var LoveSceneStr = BlackWidow.LoveScene();
//   assert.strictEqual(LoveSceneStr, "Black Widow approaches Hawkeye and (after obtaining consent) kisses them, and whispers \"something russian idk.\"" , "returns love scene string correctly");
// });