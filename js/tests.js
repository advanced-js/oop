test("Superman becomes Clark Kent", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  // action
  superman.disguise("Clark Kent");
  // assertion
  equal(superman.alias, "Clark Kent");;
});

test("Batman becomes Bruce Wayne", function() {
  // setup
  var batman = new CapedCrusader("Gotham");
  // action
  batman.disguise("Bruce Wayne");
  // assertion
  equal(batman.alias, "Bruce Wayne");;
});

test("Superman fights Batman", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  superman.name = "Superman";
  var batman = new CapedCrusader("Gotham");
  batman.name = "Batman";
  // action
  var fightResult = superman.fight(batman);
  // assertion
  equal(fightResult, "Superman punches Batman in the face!!");
});

test("Superman motivates Batman", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  superman.name = "Superman";
  var batman = new CapedCrusader("Gotham");
  batman.name = "Batman";
  // action
  var speech = superman.motivate(batman);
  // assertion
  equal(speech, "Don't be such a pansy, Batman! You have to protect Gotham!!");
});

test("Human Torch fights Superman", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  superman.name = "Superman";
  var humanTorch = new Elementalist("fire");
  humanTorch.name = "Human Torch";
  // action
  var htfight = humanTorch.useElement(superman);
  // assertion
  equal(htfight, "Human Torch uses the power of fire against Superman!");
});

test("Human Torch calls the Fantastic Four", function() {
  // setup
  var humanTorch = new Elementalist("fire", "Fantastic Four");
  humanTorch.name = "Human Torch";
  // action
  var htcall = humanTorch.callTeam();
  // assertion
  equal(htcall, "Human Torch calls the Fantastic Four for help!");
});

test("Superman compliments Batman", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  superman.name = "Superman";
  var batman = new CapedCrusader("Gotham");
  batman.name = "Batman";
  // action
  var compliment = superman.complimentCape(batman);
  // assertion
  equal(compliment, "Ahmahgah Batman, I loooove your cape.");
});

test("Clark Kent reveals identity", function() {
  // setup
  var superman = new CapedCrusader("Metropolis");
  superman.name = "Superman";
  // action
  superman.disguise("Clark Kent");
  var reveal = superman.revealIdentity();
  // assertion
  equal(reveal, "I know you think that I'm Clark Kent, but I'm really Superman!");
});
