QUnit.test("hello test", function(assert) {
    assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE

//TEST FOR A FEW OF THE GUARDIANS OF THE GALAXY SUPER HERO NAMES
QUnit.test("SuperHero Name Drax", function(assert) {
    assert.strictEqual(drax.hero_name, 'drax', "Drax Name is Drax");
});

QUnit.test("SuperHero Name Gamora", function(assert) {
    assert.strictEqual(gamora.hero_name, 'gamora', "Gamora Name is Gamora");
});

QUnit.test("SuperHero Name Groot", function(assert) {
    assert.strictEqual(groot.hero_name, 'groot', "Drax Name is Groot");
});

//TEST THE X MEN CLAN FUNCTION
QUnit.test("X Men Wolverine Clan Test", function(assert) {
    assert.strictEqual(wolverine.getClan(), 'xmen', "Wolverine is in the xmen clan");
});

QUnit.test("X Men Rogue Clan Test", function(assert) {
    assert.strictEqual(rogue.getClan(), 'xmen', "Rogue is in the xmen clan");
});

//TEST AN ATTACK METHOD
QUnit.test("Wolverine attacks Gamora", function(assert) {
    wolverine.attack(gamora);
    assert.strictEqual(gamora.health, (100 - wolverine.strength), "Wolverine attacking Gamora should drop her health to 50");
});
