

test("Superman Test", function() {
	var sm = new SuperHero("Superman");
	
	equal(typeof sm, "object", "Superman is a Object");
	equal(sm instanceof SuperHero, true, "Superman is an instanceof SuperHero");
	equal(sm.health, undefined, "private props inaccessable.");	

	equal(sm.name, "Superman", "Superman's name is 'Superman'");
	equal(sm.getHealth(), 100, "Health starts at 100");
	equal(sm.addHealth(-1), 99, "Health increment / decrement.");
	equal(sm.addHealth(1), 100, "Health increment / decrement.");
	
});

test("Superman befriends Captain Anonymous", function() {
	var sm = new SuperHero("Superman");
	var ca = new SuperHero();
	
	equal(typeof ca, "object", "Captain Anonymous is a Object");
	equal(ca instanceof SuperHero, true, "Superman is an instanceof SuperHero");
	equal(ca.health, undefined, "private props inaccessable.");

	equal(ca.name, "Captain Anonymous", "Captain Anonymous's name is 'Captain Anonymous'");
	equal(ca.getHealth(), 100, "Health starts at 100");
	equal(ca.addHealth(-1), 99, "Health increment / decrement.");
	equal(ca.addHealth(1), 100, "Health increment / decrement.");

	equal(sm.addFriend(ca), 1, "Adding friend returns superfriends.length.... 0 --> 1");
	equal(sm.getHealth(), 110, "Superman health boost : Health + 10% = 110");
	equal(ca.getHealth(), 110, "Captain Anonymous health boost : Health + 10% = 110");

	equal(sm.removeFriend(ca), 0, "Removing friend returns superfriends.length.... 1 --> 0");
	equal(ca.superfriends.length, 0, "works for BOTH participating friends.... 1--> 0");
	equal(sm.getHealth(), 99, "Superman health boost : Health:110 - 10% = 99");
	equal(ca.getHealth(), 99, "Captain Anonymous health boost : Health:110 - 10% = 99");

});

test("Aquaman Test", function() {
	var am = new AquaMan();
	
	equal(typeof am, "object", "Aquaman is a Object");
	equal(am instanceof SuperHero, true, "Aquaman is an instanceof SuperHero");
	equal(am.health, undefined, "private props inaccessable.");	

	equal(am.name, "Aquaman", "Aquaman's name is 'Aquaman'");
	equal(am.getHealth(), 100, "Health starts at 100");
	equal(am.addHealth(-1), 99, "Health increment / decrement.");
	equal(am.addHealth(1), 100, "Health increment / decrement.");

	equal(am.speakToSeaCreatures(), "Look, I'm speaking to sea creatures with my mind! Freaky!!!", "Aquaman speaks to sea creatures.")
});

test("Wonder Twins Test", function() {
	var wt = new WonderTwins();
	
	equal(typeof wt, "object", "Wonder Twins is a Object");
	equal(wt instanceof SuperHero, true, "Wonder Twins is an instanceof SuperHero");
	equal(wt.health, undefined, "private props inaccessable.");	

	equal(wt.name, "Wonder Twins", "Wonder Twins's name is 'Wonder Twins'");
	equal(wt.getHealth(), 100, "Health starts at 100");
	equal(wt.addHealth(-1), 99, "Health increment / decrement.");
	equal(wt.addHealth(1), 100, "Health increment / decrement.");

	equal(wt.wonderTwinPowersActivate(), "Shape of an eagle! Form of a bucket of water!", "Wonder Twins activate their powers.")
});

