//Test Class and its properties
test("test Class", function() {
	//Test the property radius is returned correctly
	function propertyTest(circle){
		deepEqual(circle.radius, radius, "Radius passed" );
	}

	//Test the area method
	function areaTest(circle){
		deepEqual(circle.getArea(), (3.14 * Math.pow(circle.radius, 2)), "Area passed" );
	}
	
	var radius = 50;
	var circleTest = new Circle(radius);

	propertyTest(circleTest);
	areaTest(circleTest);
});

//Test an instance of the Circle class and its area
test("test area of instance", function() {
	var circleTest = new Circle(50);
	deepEqual(circleTest.getArea(), (3.14 * Math.pow(circleTest.radius, 2)), "Area passed" );
});

