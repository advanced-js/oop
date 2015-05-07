QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

QUnit.test("Superhero has a name", function(assert) {
  var superMan = new SuperHero("Super Man", 100, true);
  assert.strictEqual(superMan.name, "Super Man", "Returns name");
});

QUnit.test("Superhero has a name", function(assert) {
  var superMan = new SuperHero("Super Man", 100, true);
  assert.strictEqual(superMan.energy, 100, "Returns Energy" );
});

QUnit.test("Superhero has a name", function(assert) {
  var superMan = new SuperHero("Super Man", 100, true);
  assert.strictEqual(superMan.giveReport(), "I'm Super Man, I currently have 100 percent of energy!", "Returns Report Message" );
});

QUnit.test("Superhero has a name", function(assert) {
  var batMan = new SuperHero("Bat Man", 80, false);
  assert.strictEqual(batMan.giveReport(), "I'm Bat Man, I currently have 80 percent of energy!", "Returns Report Message" );
});

QUnit.test("Superhero has a name", function(assert) {
  var superMan = new SuperHero("Super Man", 100, true);
  var batMan = new SuperHero("Bat Man", 80, false);
  batMan.attack(superMan);
  assert.strictEqual(superMan.energy, 95, "Atack function decreases energy" );
  assert.strictEqual(batMan.energy, 78, "Atack function decreases energy on self" );
});

QUnit.test("Superhero has a name", function(assert) {
  var superMan = new SuperHero("Super Man", 100, true);
  var batMan = new SuperHero("Bat Man", 80, false);
  batMan.drinkElixir();
  assert.strictEqual(batMan.energy, 100, "drinkElixir method returns energy to 100%" );
});

QUnit.test("Villain has a name", function(assert) {
  var goblin = new Villain("Goblin", 100, true);
  assert.strictEqual(goblin.name, "Goblin", "Villain has a name" );
});

QUnit.test("Villain has a name", function(assert) {
  var goblin = new Villain("Goblin", 100, true);
  goblin.energy = 0;
  goblin.comeBackFromDead();
  assert.strictEqual(goblin.energy, 50, "Villain comes back from dead" );
});

// ADD TESTS HERE
