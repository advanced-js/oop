var Circle = function(radius){ 
 this.radius = radius; 
 this.getArea = function(){ 
   return radius * radius * Math.PI;
   }; 
}; 

var circle = new Circle(1); 
circle.getArea();

//console.log(circle.getArea());