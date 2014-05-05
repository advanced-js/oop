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

test("area method exists", function() {
    var radius = 2;
    var circ2 = new Circle( radius );
    ok( circ2.area );
})

test("area method works", function() {
    var radius1 = 2,
        radius2 = 400,
        radius3 = .001324,
        circ1 = new Circle( radius1 ),
        circ2 = new Circle( radius2 ),
        circ3 = new Circle( radius3 );
    ok( circ1.area() === Math.PI * Math.pow( radius1, 2 ) );
    ok( circ2.area() === Math.PI * Math.pow( radius2, 2 ) );
    ok( circ3.area() === Math.PI * Math.pow( radius3, 2 ) );
})

