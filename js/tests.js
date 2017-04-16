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
QUnit.test('get age test', function(assert){
    var ironMan = new SuperHero();
   assert.strictEqual(20, ironMan.getAge(), 'should return age');
});
QUnit.test('attack test', function(assert){
    var batman = new SuperHero();
    var joker = new SuperHero();
    batman.attack(joker);
    assert.strictEqual(99, joker.getHealth(), 'attack should decrease health');
});
QUnit.test('heal test', function(assert){
    var batman = new SuperHero();
    var healMan = new HealerHero();
    batman.attack(healMan);
    assert.strictEqual(99, healMan.getHealth(), 'attack should decrease health');
    healMan.heal();
    assert.strictEqual(100, healMan.getHealth(), 'heal should restore health');
});
QUnit.test('destroy test', function(assert){
    var batman = new SuperHero();
    var joker = new SuperVillian();
    batman.attack(joker);
    assert.strictEqual(99, joker.getHealth(), 'attack should decrease health');
    joker.destroy(8);
    assert.strictEqual(-8, joker.getPeopleSaved(), 'heal should restore health');
});

