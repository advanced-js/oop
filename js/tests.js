// QUnit.test("hello test", function(assert) {
//   assert.strictEqual(1 + 1, 2, "One plus one is two");
// });

// ADD TESTS HERE

test('superman.SuperHeroInfo()', function() {
	equal(superman.name, "Superman", "Superhero Name");
	equal(superman.birthPlace, "Crypton", "Superhero Name");
	equal(line1, "Name: Superman</br>");
	equal(line2, "Alias: Clark</br>")
	equal(line3, "Birth Place: Crypton</br>")
});