

test("Superman Test", function() {
	var sm = new SuperHero("Superman");
	
	equal(typeof sm, "object", "Superman is a Object");
	equal(sm instanceof SuperHero, true, "Superman is an instanceof SuperHero");
	equal(sm.health, undefined, "private props inaccessable.");	//equal(sm.superfriends, undefined, "private props inaccessable.");

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
	equal(ca.health, undefined, "private props inaccessable.");	//equal(ca.superfriends, undefined, "private props inaccessable.");

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
























/*
test("sm", function() {
	equal(typeof(sm), "object", "Superman is a Object");
});
test("sm.name", function() {
	equal(sm.name, undefined, "name if private");
});

test("sm.getName()", function() {
	equal(sm.getName(), "Superman", "Superman is named 'Superman'");
});
test("ww.getName()", function() {
	equal(ww.getName(), "Captain Anonymous", "Wonder Woman is a 'Captain Anonymous'");
});

test("sm.getHealth()", function() {
	equal(sm.getHealth(), 100, "Health starts at 100");
});


test("sm.doTeamwork(ww)", function() {
	equal(sm.doTeamwork(ww), "Let's work together, Captain Anonymous");
});

// ADD TESTS HERE
*/