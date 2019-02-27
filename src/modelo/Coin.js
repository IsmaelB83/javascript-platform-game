function Coin(position) {
    // Call constructor of the superclass
    Actor.call(this, position, new Vector(0.5,0.5), new Vector(0,0), 'coin');
    this.speed = new Vector(0,0.015);
    this.respawnPosition = new Vector(this.position.x, this.position.y);
}

Coin.prototype = Object.create(Actor.prototype);
Coin.prototype.constructor = Coin;

Coin.prototype.update = function() {
    this.position = this.position.add(this.speed);
    if (this.position.y > this.respawnPosition.y + 0.2 || this.position.y < this.respawnPosition.y - 0.2) {
        this.position = new Vector(this.respawnPosition.x, this.respawnPosition.y);
        let multiplier = Math.random() > 0.5 ? 1:-1;
        this.speed = new Vector(0,0.015*multiplier);
    }
}

