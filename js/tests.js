QUnit.test("superHero object", function(assert) {
  var BuffySummers = new Superhero("Buffy", 50, "Angel", true, "I\'m Buffy, the vampire slayer");
  assert.strictEqual(BuffySummers.loveInterest, "Angel", "gets created and assigns string attribute correctly");
  assert.strictEqual(BuffySummers.isLoveRequited, true, "assigns boolean attribute correctly");
  //I don't think I'd have to test all of these; once I know that two data types have been successfully assigned I'm happy
});

QUnit.test("fightScene function", function(assert) {
  var DrHorrible = new Superhero("Dr. Horrible", 10, "Penny", false, "I\'ve got a PhD in Horribleness.");
  var CaptainHammer = new Superhero("Captain Hammer", 11, "Penny", true, "*These* are not the hammer.");
  assert.strictEqual(DrHorrible.strength, 10, "Strength gets assinged correctly.");
  DrHorrible.fightSceneAgainst(CaptainHammer);
  assert.strictEqual(DrHorrible.strength, 9, "results in strength loss after losing a fight");
  assert.strictEqual(CaptainHammer.strength, 11, "results in no strength loss after winning a fight");

});



QUnit.test("loveScene function", function(assert) {
  var BlackWidow = new Superhero("Black Widow", 1000, "Hawkeye", true, "something russian idk");
  var LoveSceneStr = BlackWidow.LoveScene();
  assert.strictEqual(LoveSceneStr, "Black Widow approaches Hawkeye and (after obtaining consent) kisses them, and whispers \"something russian idk.\"" , "returns love scene string correctly");
});

QUnit.test("subclass Batman numParents", function(assert) {
  assert.strictEqual(Batman.prototype.numParents(), 0 , "Batman doesn't have any parents (they were killed)");
});

QUnit.test("subclass Batman Director function", function(assert) {
  var recentMovies = Batman.prototype.Director(2013);
  var earlyNinetiesMovies = Batman.prototype.Director(1990);
  assert.strictEqual(recentMovies, "Christopher Nolan" , "The Dark Knight movies were directed by");
  assert.strictEqual(earlyNinetiesMovies, "Tim Burton" , "Batman Begins and such");

});