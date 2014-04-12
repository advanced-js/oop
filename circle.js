var Circle = function(radius) {
	this.radius = radius;
	this.getArea = function() {
		return this.radius * this.radius * Math.PI;
	}
}