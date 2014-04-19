var Circle = function(radius) {
 this.radius = radius;
 this.getArea = function() {
   return 3.14159265359*(radius*radius)
 };
}

var circle1 = new Circle(3);

var circle2 = new Circle(5);