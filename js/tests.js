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
QUnit.test('attack test', function(assert){
    var batman = new SuperHero();
    var joker = new SuperHero();
    batman.attack(joker);
    assert.strictEqual(99, joker.getHealth(), 'attack should decrease health');
});


// ADD TESTS HERE
