test("hello test", function() {
  ok(1 + 1 === 2, "Passed!");
});
// ADD TESTS HERE

test("class definition", function() {
    ok( circ1 = new Circle( 1 ) );
});

test("radius property", function() {
    var circ2 = new Circle( 2 );
    ok( circ2.radius );
    ok( circ2.radius === 2 )
})

test("area method", function() {
    var radius = 2;
    var circ2 = new Circle( radius );
    ok( circ2.area );
    ok( circ2.area() === Math.PI * Math.pow( radius, 2 ) );
})


