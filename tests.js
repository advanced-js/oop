test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});
test("circle test", function() {
  var cropCircle = new Circle(10);
  deepEqual(cropCircle.radius, 10, "Got the radius");
  deepEqual(cropCircle.getArea(), Math.PI * 100, "Got the area. Cool...");
});

// ADD TESTS HERE
