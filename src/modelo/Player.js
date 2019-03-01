const SPEED = 15;
const GRAVITY = 28;
const JUMPSPEED = 15

function Player(position) {
    // Call constructor of the superclass
    Actor.call(this, position.add(new Vector(0,-0.5)), new Vector(0.75,1.5), 'player');
    this.lives = 3;
    this.speed = new Vector(0,0);
    this.score = 0;
}

Player.prototype = Object.create(Actor.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(step, keys, level) {
    this.moveX(step, keys, level);
    this.moveY(step, keys, level);
}

Player.prototype.moveX = function (step, keys, level) {   
    this.speed.x = 0;
    if (keys['LEFT']) this.speed.x -= SPEED;
    if (keys['RIGHT']) this.speed.x += SPEED;
    let motion = new Vector(this.speed.x * step, 0);
    let aux = this.position.add(motion);
    let obstacle = level.collisionCheck(aux,this.size);
    if (obstacle) {
        if (level.actorTouched(obstacle) === 'lost') {
            this.lives--;
            this.position = this.respawnPosition;        
        }
    } else {
        this.position = aux;
    }
}

Player.prototype.moveY = function (step, keys, level) {
    this.speed.y += step * GRAVITY;
    let motion = new Vector(0, this.speed.y * step);
    let aux = this.position.add(motion);
    let obstacle = level.collisionCheck(aux,this.size);
    if (obstacle) {
        if (level.actorTouched(obstacle) === 'lost') {
            this.lives--;
            this.position = this.respawnPosition;        
        }
        if (keys['JUMP'] && this.speed.y > 0) this.speed.y = -JUMPSPEED;
    } else {
        this.position = aux;
    }
}

Player.prototype.die = function() {
    this.lives--;
    this.position = this.respawnPosition.clone();
}