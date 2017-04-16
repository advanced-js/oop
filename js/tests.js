QUnit.test("name test", function(assert) {
	var superhero = new SuperHero("Batman");
	assert.strictEqual(superhero.name, "Batman");
});

QUnit.test("attack test", function(assert) {
	var superhero = new SuperHero("Batman");
	var superheroOriginalLifeforce = superhero.lifeForce;
	var badGuy = new SuperHero("Black Widow");
	var badGuyOriginalLifeforce = badGuy.lifeForce;

	superhero.attack(badGuy);
	superhero.attack(badGuy);
	// Bad guy's lifeforce decreased
	assert.ok(badGuyOriginalLifeforce > badGuy.lifeForce);
	// Superhero's lifeforce also decreased
	assert.ok(superheroOriginalLifeforce > superhero.lifeForce);
	// But superhero's lifeforce decreased less than badGuy's lifeforce
	assert.ok((superheroOriginalLifeforce - superhero.lifeForce) < (badGuyOriginalLifeforce - badGuy.lifeForce));
});

QUnit.test("hide test", function(assert) {
	var invisibleSuperhero = new InvisibleSuperHero("Batman");
	invisibleSuperhero.hide();
	assert.strictEqual(invisibleSuperhero.visible, false);
});

QUnit.test("showYourself test", function(assert) {
	var invisibleSuperhero = new InvisibleSuperHero("Batman");
	invisibleSuperhero.hide();
	invisibleSuperhero.showYourself();
	assert.strictEqual(invisibleSuperhero.visible, true);
});

QUnit.test("heal test", function(assert) {
	var superhero = new SuperHero("Batman");
	var originalLifeforce = superhero.lifeForce;
	var badGuy = new SuperHero("Joker");
	badGuy.attack(superhero);
	badGuy.attack(superhero);
	superhero.heal();
	assert.strictEqual(superhero.lifeForce, originalLifeforce);
});

QUnit.test("youreDead test", function(assert) {
	var superhero = new SuperHero("Batman");
	superhero.youreDead();
	assert.strictEqual(superhero.name, "Ghost of Batman");
});

QUnit.test("killing a superhero test", function(assert) {
	var superhero = new SuperHero("Batman");
	var villain = new SuperHero("Dr. Octopus");

	for (i = 0; i < 20; i++) {
		villain.attack(superhero);
	}

	assert.ok(superhero.dead);
	assert.strictEqual(superhero.name, "Ghost of Batman");
});

QUnit.test("flyAway test", function(assert) {
	var flyingSuperhero = new FlyingSuperHero("Batman");
	flyingSuperhero.flyAway();
	assert.strictEqual(flyingSuperhero.moving, "flying");
});