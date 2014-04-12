test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

// ADD TESTS HERE
test("circle test", function() {
	var circle = new Circle(1);
	deepEqual(circle.radius, 1, "radius passed");
	deepEqual(circle.getArea(), Math.PI, "getArea passed");
});