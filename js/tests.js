

// MY FIRST TESTING ATTEMPT

QUnit.test("hulk and flash are born", function(assert) {
	var hulk = new SuperHero("Bruce Banner", "The Hulk", 34, "Superhuman Strength");
	assert.strictEqual(hulk.talk(),"I'm Bruce Banner, I'm 34 yrs old, and my alter ego is The Hulk!", "Hulk is talking correctly.");
	assert.strictEqual(hulk.newPower("Resistance to Injury"), "My new power is Resistance to Injury!", "Hulk's power was changed correctly.");
	var flash = new SuperHero("Barry Allen", "The Flash", 26, "Superhuman Speed");
	assert.strictEqual(flash.talk(), "I'm Barry Allen, I'm 26 yrs old, and my alter ego is The Flash!", "Flash is talking correctly.");
	assert.strictEqual(flash.newPower("Invisibility"), "My new power is Invisibility!", "Flash's power was changed correctly.");
});


QUnit.test("bragging test", function(assert) {
	assert.strictEqual(flash.brag(hulk), "Barry Allen is bragging to Bruce Banner that he is the better super hero!", "Flash is definitely bragging to the Hulk!");
});

//TESTING EXAMPLE TO FOLLOW FROM CLASS
var Person = function(first, last){ 
 this.first = first; 
 this.last = last; 
 
 this.fullName = function(){ 
   return this.first + ' ' + this.last + ''; 
 }; 
}; 
 
Person.prototype.title = function(){ 
 return 'Mr. ' + this.fullName(); 
}; 


test("fullName should work", function() {
  // setup
  var bruce = new Person("Bruce", "Wayne");
  // action
  var name = bruce.fullName();
  // assertion
  equal(name, "Bruce Wayne");
});
//END OF CLASS EXAMPLE

//TRY AGAIN WITH SAME FORMAT OF CLASS EXAMPLE ABOVE

var SuperHero = new Object();

var SuperHero = function(realname, character, age, power) {
    this.realname = realname;
    this.character = character;
    this.age = age + " yrs old";
    this.power = power;
};

SuperHero.prototype.talk = function() {
    console.log("I'm " + this.realname + ", I'm "+ this.age +", and my alter ego is " + this.character + "!");
};

test("the hulk can talk", function() {
  // setup
  var hulk = new SuperHero("Bruce Banner", "The Hulk", 34, "Superhuman Strength");
  // action
  var talk = hulk.talk();
  // assertion
  equal(talk, "I'm Bruce Banner, I'm 34 yrs old, and my alter ego is The Hulk!");
});