
test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

test("Circle create", function() {
  var circle = new Circle(2)
  ok(circle.radius === 2, "circle created with radius 2");
});

test("Circle get Area", function() {
  var circle = new Circle(2)
  console.log(Number(circle.getArea()).toPrecision(4));
  //ok(Number(circle.getArea).toPrecision(4) === 12.57, "circle created with radius 2");
  ok(Math.abs(12.57 - Number(circle.getArea())) < 0.1, "circle area of radius 2 is correct");
});

// ADD TESTS HERE
