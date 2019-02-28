function Coin(position) {
    // Call constructor of the superclass
    Actor.call(this, position, new Vector(0.5,0.5), new Vector(0,0.025), 'coin');
    this.respawnPosition = position.clone();
}

Coin.prototype = Object.create(Actor.prototype);
Coin.prototype.constructor = Coin;

Coin.prototype.update = function(step) {
    Actor.prototype.update.call(this,step);
    if (this.respawnPosition.y < this.position.y - 0.5) { 
        this.position = this.respawnPosition.clone();
    }
}