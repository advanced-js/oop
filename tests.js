test("property read", function() {
  var circle = new Circle(1);
  ok(circle.radius === 1, "correct");
});

test("property set", function() {
  var circle = new Circle(2);
  circle.radius = 5;
  ok(circle.radius === 5, "correct");
});

test("area calculation", function() {
  var circle = new Circle(1);
  ok(circle.getArea() === 3.14, "correct");
});
