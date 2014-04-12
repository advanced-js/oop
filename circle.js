var Circle = function(radius){
	this.radius = radius;
	this.getArea = function(){
		return (3.14 * Math.pow(this.radius, 2));
	}
}

var myCircle = new Circle(20);