QUnit.test("hit point test", function(assert) {
	var hero = new Superhero('name', 50, 100);
  assert.strictEqual(hero.hitPoints, 100);
  assert.strictEqual(hero.currentHitPoints, 100);
  assert.strictEqual(hero.toString(), 'name');
});

QUnit.test("damage ability test", function(assert) {
	var hero = new Superhero('name', 50, 100);
  assert.strictEqual(hero.dmgPoints, 50);
});

QUnit.test("hit point less than 0", function(assert) {
  throws(function() { var h = new Superhero('name', 50, -10);}, new Error('Health cannot be less than 0'));
});

QUnit.test("dmg ability less than 0", function(assert) {
  throws(function() { var h = new Superhero('name', -50, 0);}, new Error('Damage cannot be less than 0'));
});

QUnit.test("test attack", function(assert) {
	var hero1 = new Superhero('1', 50, 100);
	var hero2 = new Superhero('2', 50, 100);
	hero1.attack(hero2);
	assert.strictEqual(hero1.attack(hero1), false);
	assert.strictEqual(hero1.currentHitPoints, 100);
	assert.strictEqual(hero1.hitPoints, 100);
	assert.strictEqual(hero2.hitPoints, 100);
	assert.strictEqual(hero2.currentHitPoints, 50);
	assert.strictEqual(hero2.isDead(), false);
	assert.strictEqual(hero1.isDead(), false);
});

QUnit.test("test kill", function(assert) {
	var hero1 = new Superhero('1', 100, 100);
	var hero2 = new Superhero('2', 100, 100);
	hero1.attack(hero2);
	assert.strictEqual(hero1.currentHitPoints, 100);
	assert.strictEqual(hero1.hitPoints, 100);
	assert.strictEqual(hero2.hitPoints, 100);
	assert.strictEqual(hero2.currentHitPoints, 0);
	assert.strictEqual(hero2.isDead(), true);
	assert.strictEqual(hero1.isDead(), false);
	assert.strictEqual(hero2.attack(hero1), false);
});

QUnit.test("test revive", function(assert) {
	var hero1 = new Superhero('1', 100, 100);
	var hero2 = new Superhero('2', 100, 100);
	hero1.attack(hero2);
	assert.strictEqual(hero2.isDead(), true);
	hero2.revive();
	assert.strictEqual(hero2.isDead(), false);
	assert.strictEqual(hero2.currentHitPoints, 100);
});



// ADD TESTS HERE
