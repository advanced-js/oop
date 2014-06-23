// ADD TESTS HERE
//Tests when SuperHeroes use their natural abilities, they gain strength
test("Use Ability", function () {
    ok(SuperHero.prototype.useAbility, this.strength += 10);
});

//Tests when SuperHeroes are hit or injured, they lose strength
test("Attacked by another SuperHero", function () {
    ok(SuperHero.prototype.attacked, this.strength -= 10);
});
