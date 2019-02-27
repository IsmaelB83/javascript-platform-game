function Lava(position, lavaType) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(-0.1,0)), new Vector(1,1), new Vector(0,0), 'lava');
    switch (lavaType) {
        case '=':
            this.speed = new Vector(2,0);
            break;
        case '|':
            this.speed = new Vector(0,2);
            break;        
        case 'v':
            this.speed = new Vector(0,0.08);
            this.respawnPosition = new Vector(this.position.x, this.position.y);
            break;
    }
}

Lava.prototype = Object.create(Actor.prototype);
Lava.prototype.constructor = Lava;

Lava.prototype.update = function() {
    this.position = this.position.add(this.speed);
    if (this.position.y >= 15.1) {
        this.position = new Vector(this.respawnPosition.x, this.respawnPosition.y);
    }
}

