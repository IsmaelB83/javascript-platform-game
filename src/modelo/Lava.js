function Lava(position, lavaType) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(0.15,0)), new Vector(0.75,0.75), 'lava');
    switch (lavaType) {
        case '=':
            this.speed = new Vector(5,0);
            this.respawnPosition = null;
            break;
        case '|':
            this.speed = new Vector(-5,0);
            this.respawnPosition = null;
            break;        
        case 'v':
            this.speed = new Vector(0,5);
            break;
    }
}

Lava.prototype = Object.create(Actor.prototype);
Lava.prototype.constructor = Lava;

Lava.prototype.update = function(step, level) {
    let newPosition = this.position.clone().add(this.speed.times(step));
    if (!level.collisionCheck(newPosition, this.size)) {
        this.position = newPosition;
    } else {
        if (this.respawnPosition) this.position = this.respawnPosition.clone();
        else this.speed.x *= -1;
    }
}