function Lava(position, lavaType) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(-0.1,0)), new Vector(1,1), new Vector(0,0), 'lava');
    this.respawnPosition = new Vector(this.position.x, this.position.y);
    switch (lavaType) {
        case '=':
            this.speed = new Vector(1,0);
            break;
        case '|':
            this.speed = new Vector(0,1);
            break;        
        case 'v':
            this.speed = new Vector(0,0.05);
            break;
    }
}

Lava.prototype = Object.create(Actor.prototype);
Lava.prototype.constructor = Lava;

Lava.prototype.update = function(step) {
    Actor.prototype.update.call(this,step);
    if (this.position.y >= 15) { 
        this.position = this.respawnPosition.clone();
    }
}