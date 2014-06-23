// ADD TESTS HERE
//Tests when SuperHeroes use their natural abilities, they gain strength

test("SuperGirl Subclass", function () {
    ok(SuperGirl.ability, this.strength == SuperMan.ability);
});

test("SheHulk Subclass", function () {
    ok(SheHulk.ability, this.strength == Hulk.ability);
});

test("War Machine Subclass", function () {
    ok(WarMachine.ability, this.strength == IronMan.ability);
});

test("Superclass SuperHero", function () {
    ok(mySuperHero.ability, this.strength == undefined);
});

test("SuperMan Kryptonized", function () {
    ok(SuperMan.kryptonized, this.strength == 1);
});

test("IronMan Artificial Heart Failure", function () {
    ok(IronMan.artificialHeartFailure, this.strength == 1);
});

test("Hulk Surprise attacked in Human Form", function () {
    ok(Hulk.brutallyAttackedInHumanForm, this.strength == 1);
});
