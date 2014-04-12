//Test Class and its properties
test("test Class", function() {
	//Test the area method
	function areaTest(then){
		deepEqual(then.getArea(), (3.14 * Math.pow(then.radius, 2)), "Area passed" );
	};
	
	areaTest(new Circle(50));
});

//Test and instance of the Circle class and its area
test("test area of instance", function() {
	var circleTest = new Circle(50);
	deepEqual(circleTest.getArea(), (3.14 * Math.pow(circleTest.radius, 2)), "Area passed" );
});

