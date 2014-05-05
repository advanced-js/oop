var Circle = function(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * Math.pow( this.radius, 2 );
    }
};

