test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

test("Mr. Incredible is ready to rumble", function() {
	var incredible = new SuperHero("Mr. Incredible");
	//it looks like I might have 2 names - why?
	equal(incredible.name, "Mr. Incredible", "Meet Mr. Incredible");
	equal(incredible.health, 100, "Full health");
	equal(incredible.defense, 10, "Full defense");
	equal(incredible.strength, 10, "Full strength");
	equal(incredible.speed, 10, "Full speed");
});

test("Elastigirl is ready to rumble", function() {
	var elastigirl = new SuperHero("Elastigirl");
	equal(elastigirl.name, "Elastigirl", "Meet Elastigirl");
	equal(elastigirl.health, 100, "Full health");
	equal(elastigirl.defense, 10, "Full defense");
	equal(elastigirl.strength, 10, "Full strength");
	equal(elastigirl.speed, 10, "Full speed");
});

test("Mr. Incredible boosts his defense", function() {
	var incredible = new SuperHero("Mr. Incredible");
	equal(incredible.defenseBoost(), 11, "+1 defense");
});

test("Elastigirl smiles", function() {
	var incredible = new SuperHero("Mr. Incredible");
	var elastigirl = new SuperHero("Elastigirl");
	elastigirl.smile(incredible);
	equal(incredible.defense, 8, "Mr. Incredible's defense goes down by 2");
	equal(incredible.speed, 6, "Mr. Incredible's slows down by 4");
});

test("Elastigirl throws a punch and Mr. Incredible loses 20HP!", function() {
	var incredible = new SuperHero("Mr. Incredible");
	var elastigirl = new SuperHero("Elastigirl");
	elastigirl.smile(incredible);
	elastigirl.punch(incredible);
	equal(incredible.health, 80, "Mr. Incredible loses 20HP!");
});

test("Elastigirl regrets hurting Mr. Incredible and gives him a hug", function() {
	var incredible = new SuperHero("Mr. Incredible");
	var elastigirl = new SuperHero("Elastigirl");
	elastigirl.smile(incredible);
	elastigirl.punch(incredible);
	elastigirl.hug(incredible);
	equal(incredible.health, 90, "Mr. Incredible regains 10HP!");
});