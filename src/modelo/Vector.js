function Vector(x,y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
}

Vector.prototype.colision = function(other) {
    
}