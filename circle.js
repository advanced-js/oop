// var Circle = ...


var Circle = function(r){
  this.radius = r;

  this.getArea = function(){
    return Math.PI(this.radius * this.radius);
  }

}


