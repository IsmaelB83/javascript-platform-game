function Vector(x,y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
}

Vector.prototype.times = function(step) {
    let vector = this.clone();
    vector.x *= step;
    vector.y *= step;
    return vector;
}

Vector.prototype.clone = function() {
    return new Vector(this.x, this.y);
}