test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});

// ADD TESTS HERE
test("property read", function() {
 deepEqual(circle1.radius, 1, 'is the correct radius');
})
test("area check", function() {
 deepEqual(circle1.area(), 3.14, 'is the correct area');
})