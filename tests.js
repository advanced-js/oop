test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

test("string length", function() {
  var str = "abc";
  ok(str.length === 3, "is the correct length");
});

// ADD TESTS HERE FOR CIRCLE CLASS

test("circle test", function() {
var circle1 = new Circle(5);
deepEqual(circle1.radius, 5, "Got the radius");
// deepEqual(circle1.getArea(), Math.PI * 25, "Area method works, returns same value");
});
