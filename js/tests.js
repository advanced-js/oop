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

//kid hero tests
test("Dash and Violet are ready to rumble", function() {
	var dash = new kidHero("Dash");
	var violet = new kidHero("Violet");
	equal(dash.name, "Dash", "Meet Dash");
	equal(dash.health, 40, "Full health");
	equal(dash.strength, 5, "Full strength");
	equal(violet.name, "Violet", "Meet Violet");
	equal(violet.health, 40, "Full health");
	equal(violet.strength, 5, "Full strength");
});

test("Dash eats his sister's milkshake and she punches him in retaliation", function() {
	var dash = new kidHero("Dash");
	var violet = new kidHero("Violet");
	dash.eat();
	equal(dash.health, 50, "Dash eats a milkshake and gains 10 HP");
	violet.punch(dash);
	equal(dash.health, 45, "Dash loses 5 HP");
	equal(violet.health, 39, "Violet loses 1 HP");
});

test("Jack Jack is ready to rumble", function() {
	var jackJack = new shapeshifter("Jack Jack", 2);
	equal(jackJack.name, "Jack Jack", "Meet Jack Jack");
	equal(jackJack.strength, 9, "Jack Jack has 9 strength");
	equal(jackJack.defense, 7, "7 defense");
	equal(jackJack.speed, 5, "5 speed");
});

asyncTest("Jack Jack absorbs Violet's traits, hurting her and helping him in the process", function() {
	var jackJack = new shapeshifter("Jack Jack", 2);
	var violet = new kidHero("Violet");
	equal(violet.health, 40, "Violet starts at 40 HP");
	jackJack.absorb(violet);
	setTimeout(function() { 	
    	equal(jackJack.strength, 5, "after 2 sec, Jack Jack has 5 strength");
		equal(jackJack.defense, 10, "10 defense");
		equal(jackJack.speed, 10, "10 speed");
		equal(violet.health, 35, "after 2 sec, Violet's loses 5 HP");
		start();
  	}, 2500);
});