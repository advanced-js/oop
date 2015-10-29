QUnit.test("SuperHero initialization with params", function(assert){
  var expected_name = "Name";
  var expected_power = "Power";
  var sh = new SuperHero(expected_name, expected_power);
  assert.strictEqual(sh.name, expected_name, "name property matches '" + expected_name + "'.");
  assert.strictEqual(sh.power, expected_power, "power property matches '" + expected_power + "'.");
  assert.strictEqual(sh.hp, 100, "hp property is 100.");
});

QUnit.test("SuperHero initialization without params", function(assert){
  var sh = new SuperHero();
  assert.strictEqual(sh.name, undefined, "name property is undefined");
  assert.strictEqual(sh.power, undefined, "power property is undefined");
  assert.strictEqual(sh.hp, 100, "hp property is 100.");
});

QUnit.test("setPower test 1", function(assert){
  var expected_power = "Foobar";
  var sh = new SuperHero();
  sh.setPower(expected_power);
  assert.strictEqual(sh.power, expected_power, "power property was set to '" + expected_power + "'.");
});

QUnit.test("setPower test 2", function(assert){
  var expected_power = "Carwoo";
  var sh = new SuperHero();
  sh.setPower(expected_power);
  assert.strictEqual(sh.power, expected_power, "power property was set to '" + expected_power + "'.");
});

QUnit.test("setName test 1", function(assert){
  var expected_name = "Vargoo";
  var sh = new SuperHero();
  sh.setName(expected_name);
  assert.strictEqual(sh.name, expected_name, "name property was set to '" + expected_name + "'.");
});

QUnit.test("setName test 2", function(assert){
  var expected_name = "Jarboo";
  var sh = new SuperHero();
  sh.setName(expected_name);
  assert.strictEqual(sh.name, expected_name, "name property was set to '" + expected_name + "'.");
});

QUnit.test("getHit test 1", function(assert){
  var sh = new SuperHero();
  var hitAmt = 75;
  sh.getHit(hitAmt);
  assert.strictEqual(sh.hp, 25, "HP went down to 25.");
});

QUnit.test("getHit test 2", function(assert){
  var sh = new SuperHero();
  var hitAmt = 50;
  sh.getHit(hitAmt);
  assert.strictEqual(sh.hp, 50, "HP went down to 50.");
});

QUnit.test("getHit test 3", function(assert){
  var sh = new SuperHero();
  var hitAmt = 125;
  sh.getHit(hitAmt);
  assert.strictEqual(sh.hp, -25, "HP went down to -25.");
});

QUnit.test("attack test 1", function(assert){
  var sh1 = new SuperHero();
  var sh2 = new SuperHero();
  sh1.attack(sh2, 25);
  assert.strictEqual(sh2.hp, 75, "SuperHero1 attacked SuperHero2 for 25 HP.");
});
