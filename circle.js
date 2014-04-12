var Circle = function(radius){ 
 this.radius = radius;
 
 this.area = function(){ 
   return Math.pow(this.radius,2)*3.14;
 }; 
}; 

var circle1 = new Circle(1); 