QUnit.test("hello test", function(assert) {
  assert.strictEqual(1 + 1, 2, "One plus one is two");

  Batman.compareCareers(Ironman);
  assert.equal(Batman.coolness, 10, "Batman's career beats Ironman's");

  Ironman.compareActivity(Batman);
  assert.equal(Ironman.coolness, -15, "Ironman's activity hours are lame");

});


