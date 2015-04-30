QUnit.test("superHero assignment test", function(assert) {
  var BuffySummers = new Superhero("Buffy", 10, "The Master", "Angel", true, "I\'m Buffy, the vampire slayer");
  assert.strictEqual(BuffySummers.loveInterest, "Angel", "Superhero object gets created and assigns string attribute correctly");
  assert.strictEqual(BuffySummers.isLoveRequited, true, "assigns boolean attribute correctly");
  //I don't think I'd have to test all of these; once I know that two data types have been successfully assigned I'm happy
});

QUnit.test("fightScene test", function(assert) {
  var DrHorrible = new Superhero("Dr. Horrible", 10, "Captain Hammer", "Penny", false, "I\'ve got a PhD in Horribleness.");
  var CaptainHammer = new Superhero("Captain Hammer", 11, "Dr. Horrible", "Penny", true, "*These* are not the hammer.");
  assert.strictEqual(DrHorrible.strength, 10, "Strength gets assinged correctly.");
  DrHorrible.fightSceneAgainst(CaptainHammer);
  assert.strictEqual(DrHorrible.strength, 9, "strength loss after losing a fight");
  assert.strictEqual(CaptainHammer.strength, 11, "No strength loss after winning a fight");

});



QUnit.test("loveScene test", function(assert) {
  var BlackWidow = new Superhero("Black Widow", 1000, "The Patriarchy", "Hawkeye", true, "something russian idk");
  var LoveSceneStr = BlackWidow.LoveScene();
  assert.strictEqual(LoveSceneStr, "Black Widow approaches Hawkeye and (after obtaining consent) kisses them, and whispers \"something russian idk.\" \"Why do you do that? It's not sexy.\", Hawkeye responds." , "returns love scene string correctly");
});
