test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

// SuperHero testing
test("Superman is born", function() {
    var superman = new SuperHero("Superman");
    equal(superman.name, "Superman");
    equal(superman.hp, 100, "hp correctly initialized");
    equal(superman.str, 10, "str correctly initialized");
    equal(superman.dex, 10, "dex correctly initialized");
    equal(superman.def, 10, "def correctly initialized");
});

test("Superman transforms", function() {
    var superman = new SuperHero("Superman");
    superman.transform(100);
    equal(superman.hp, 100*100, "hp correctly multiplied");
    equal(superman.str, 10*100, "str correctly multiplied");
    equal(superman.dex, 10*100, "dex correctly multiplied");
    equal(superman.def, 10*100, "def correctly multiplied");
});

test("Superman attacks Bruce Banner", function() {
    var superman = new SuperHero("Superman");
    superman.transform(100);
    var bruce = new SuperHero("Bruce Banner");
    superman.attack(bruce);
    equal(bruce.hp, 100, "hp unchanged, Superman doesn't attack civilians!");
});

test("Superman attacks Hulk", function() {
    var superman = new SuperHero("Superman");
    superman.transform(100);
    var hulk = new SuperHero("Hulk");
    hulk.transform(500);
    superman.attack(hulk);
    equal(hulk.hp, 500*100-10*100, "Hulk took a hit for smashing things.");
});


// subclass testing
test("Superman flies!", function() {
    var superman = new FlightHero("Superman");
    equal(superman.name, "Superman");
    equal(superman.hp, 100, "hp correctly initialized");
    equal(superman.str, 10, "str correctly initialized");
    equal(superman.dex, 10, "dex correctly initialized");
    equal(superman.def, 10, "def correctly initialized");
    equal(superman.flight, true, "he can fly");
});

test("Superman transforms", function() {
    var superman = new FlightHero("Superman");
    superman.transform(100);
    equal(superman.hp, 100*100, "hp correctly multiplied");
    equal(superman.str, 10*100, "str correctly multiplied");
    equal(superman.dex, 10*100, "dex correctly multiplied");
    equal(superman.def, 10*100, "def correctly multiplied");
    equal(superman.flight, true, "he still flies");
});

test("Superman attacks Bruce Banner", function() {
    var superman = new FlightHero("Superman");
    superman.transform(100);
    var bruce = new SuperHero("Bruce Banner");
    superman.attack(bruce);
    equal(bruce.hp, 100, "hp unchanged, Superman doesn't attack civilians!");
});

test("Superman attacks Hulk", function() {
    var superman = new FlightHero("Superman");
    superman.transform(100);
    var hulk = new SuperHero("Hulk");
    hulk.transform(500);
    superman.attack(hulk);
    equal(hulk.hp, 500*100-10*100, "Hulk took a hit for smashing things.");
});

test("Aquaman can breathe underwater!", function() {
    var aquaman = new WaterHero("Aquaman");
    equal(aquaman.name, "Aquaman");
    equal(aquaman.waterbreathing, true, "he is a fish!");
});