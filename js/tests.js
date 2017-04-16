QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");
});

var cartman = new Cartman();
var kyle = new Kyle();

QUnit.test("Cartman's first message", function(assert) {
  assert.strictEqual(cartman.talks(), "Kyle...");
});

QUnit.test("Kyle's first message", function(assert) {
  assert.strictEqual(kyle.talks(), "What Cartman?!");
});

QUnit.test("Cartman's second message", function(assert) {
  assert.strictEqual(cartman.talks(), "Don't do this Kyle!");
});

QUnit.test("Kyle's second message", function(assert) {
  assert.strictEqual(kyle.talks(), "Don't tell me what to do!");
});

QUnit.test("Cartman's third message", function(assert) {
  assert.strictEqual(cartman.talks(), "I am warning you Kyle!");
});

QUnit.test("Kyle's third message", function(assert) {
  assert.strictEqual(kyle.talks(), "You can't stop me!");
});

cartman = new Cartman();
kyle = new Kyle();
QUnit.test("Everything", function(assert) {
  assert.strictEqual(cartman.talks(), "Kyle...");
  assert.strictEqual(kyle.talks(), "What Cartman?!");
  assert.strictEqual(cartman.talks(), "Don't do this Kyle!");
  assert.strictEqual(kyle.talks(), "Don't tell me what to do!");
  assert.strictEqual(cartman.talks(), "I am warning you Kyle!");
  assert.strictEqual(kyle.talks(), "You can't stop me!");
});
// ADD TESTS HERE
