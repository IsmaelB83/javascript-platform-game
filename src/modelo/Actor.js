function Actor(position, size, speed, type) {
    this.position = position.add(new Vector(0.1,0));
    this.size = size;
    this.speed = speed;
    this.type = type;
}

Actor.prototype.update = function() {
    this.position = this.position.add(this.speed);
}