test("circle radius", function() {
  ok(circle1.hasOwnProperty('radius'), "No radius");
});

test("new circle radius", function() {
  ok(circle1.radius == 3), "Radius not set";
});

test("circle area", function() {
  ok(circle1.getArea() === 3.14159265359*(circle1.radius*circle1.radius), "Area not working");
});

test("circle not DeepEqual", function() {
  notDeepEqual(circle1, circle2), "Yes DeepEqual";
})


// ADD TESTS HERE
