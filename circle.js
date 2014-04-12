var Circle = function(radius){ 
 this.radius = radius;
 
 this.area = function(){ 
   return Math.pow(this.radius,2)*3.14;
 }; 
}; 

var circle1 = new Circle(1); 

console.log('The radius of circle1 is ' + circle1.radius);
console.log('The area of circle1 is ' + circle1.area());