test("circle test", function() {
  var circle = new Circle(1);
  deepEqual(circle.radius, 1);
  ok( circle.getArea() === 3.141592653589793 );
});

// ADD TESTS HERE