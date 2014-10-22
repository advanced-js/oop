// QUnit.test("hello test", function(assert) {
//   assert.strictEqual(1 + 1, 2, "One plus one is two");
// });

// ADD TESTS HERE

test('superhero info', function() {
	equal(superman.name, "Superman", "Superhero Name");
	equal(batman.name, "Batman", "Superhero Name");
	
});

test('spiderman intro', function() {
	equal(spiderman.introduce(spiderman.name), "Hello, I am Spiderman and I am here to save you!", "Spiderman Intro");
});

// 
test('superman vs. lex luthor', function() {
	equal(superman.fight(lexluthor), "Superman wins!", "Supehero fight")
});

test('superman vs. batman', function() {
	equal(superman.fight(batman), "no fight!", "Supehero fight")
});