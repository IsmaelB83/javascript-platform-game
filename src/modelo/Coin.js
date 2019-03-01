const WOBBLESPEED = 10;
const WOBBLEDISTANCE = 0.025;

function Coin(position) {
    Actor.call(this, position.add(new Vector(0.25,0.30)), new Vector(0.5,0.5), 'coin');
    this.wobble = Math.PI * 2 * Math.random();
}

Coin.prototype = Object.create(Actor.prototype);
Coin.prototype.constructor = Coin;

Coin.prototype.update = function(step) {
    this.wobble += step * WOBBLESPEED;
    let wobblePosition = Math.sin(this.wobble) * WOBBLEDISTANCE;
    this.position = this.respawnPosition.add(new Vector(0, wobblePosition)).clone();
}