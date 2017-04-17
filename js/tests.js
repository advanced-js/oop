QUnit.test("hello test", function(assert) {
    assert.strictEqual(1 + 1, 2, "One plus one is two");
});

// ADD TESTS HERE
QUnit.test("attack should decrease power level", function(assert) {
    var testHero = new SuperHero("testHero", "black"); 
    var testVillain = new SuperHero("testVillain", "gray"); 

    testVillain.attack(testHero);

    assert.strictEqual(testHero.powerLevel, 9, "hero.powerLevel is decreased by 1"); 

    // remove the new test objects from DOM? 
    $('#testHero').remove(); 
    $('#testVillain').remove(); 
});


QUnit.test("power up should increase power level", function(assert) {
    var testHero = new SuperHero("testHero", "black"); 

    testHero.powerUp();

    assert.strictEqual(testHero.powerLevel, 11, "hero.powerLevel increments by 1"); 

    // remove the new test objects from DOM? 
    $('#testHero').remove(); 
});


QUnit.test("power level 0 should change isHero status", function(assert) {
    var testHero = new SuperHero("testHero", "black"); 
    var testVillain = new SuperHero("testVillain", "gray"); 

    testHero.powerLevel = 1;
    testVillain.attack(testHero); 
    assert.strictEqual(testHero.isHero, false, "hero.isHero is false"); 

    // remove the new test objects from DOM? 
    $('#testHero').remove(); 
    $('#testVillain').remove(); 
});