const SPEED = 1;
const GRAVITY = 9;

function Player(position) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(0,-0.5)), new Vector(0.75,1.5), new Vector(0,0), 'player');
    this.lives = 3;
    this.score = 0;
}

Player.prototype = Object.create(Actor.prototype);
Player.prototype.constructor = Player;