function Actor(position, size, speed, type) {
    this.position = position.add(new Vector(0.1,0));
    this.size = size;
    this.speed = speed;
    this.type = type;
}

Actor.prototype.update = function(step) {        
    if (this.speed.x !==0 || this.speed.y !== 0) {
        this.position.add(this.speed);
    }
}