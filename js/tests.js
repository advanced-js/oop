QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});
QUnit.test('save person test', function(assert){
    var superman = new SuperHero();
    superman.savePerson();
    assert.strictEqual(1, superman.getPeopleSaved(), 'save a person');
});
QUnit.test('set age test', function(assert){
    var spiderman = new SuperHero();
    spiderman.setAge(30);
    assert.strictEqual(30, spiderman.getAge(), 'age should update');
});


// ADD TESTS HERE
