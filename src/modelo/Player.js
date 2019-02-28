const SPEED = 1;
const GRAVITY = 9;

function Player(position) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(0,-0.5)), new Vector(0.75,1.5), new Vector(0,0), 'player');
    this.respawnPosition = position.clone();
    this.lives = 3;
    this.score = 0;
}

Player.prototype = Object.create(Actor.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(step, keys) {
    if (keys['ESCAPE']) this.lives = 0;
    if (keys['LEFT']) this.speed.x = -0.05;
    if (keys['RIGHT']) this.speed.x = 0.05;
    if (keys['JUMP']) this.speed.y = -0.05;
    Actor.prototype.update.call(this,step);
}

Player.prototype.die = function() {
    this.lives--;
    this.position = this.respawnPosition.clone();
}