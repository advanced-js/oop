test("Superman becomes Clark Kent", function() {
  // setup
  var superman = new SuperHero("Superman", "Metropolis");
  // action
  superman.disguise("Clark Kent");
  // assertion
  equal(superman.name, "Clark Kent");;
});

test("Batman becomes Bruce Wayne", function() {
  // setup
  var batman = new SuperHero("Batman", "Gotham");
  // action
  batman.disguise("Bruce Wayne");
  // assertion
  equal(batman.name, "Bruce Wayne");;
});

test("Superman fights Batman", function() {
  // setup
  var superman = new SuperHero("Superman", "Metropolis");
  var batman = new SuperHero("Batman", "Gotham");
  // action
  var fightResult = superman.fight(batman);
  // assertion
  equal(fightResult, "Superman punches Batman in the face!!");
});

test("Superman motivates Batman", function() {
  // setup
  var superman = new SuperHero("Superman", "Metropolis");
  var batman = new SuperHero("Batman", "Gotham");
  // action
  var speech = superman.motivate(batman);
  // assertion
  equal(speech, "Don't be such a pansy, Batman! You have to protect Gotham!!");
});

