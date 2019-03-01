const FIXED = {
    'x': 'wall',
    '!': 'lava'
};

const ACTORS = {
    'o': Coin,
    'v': Lava,
    '|': Lava,
    '=': Lava,
    '@': Player,
};

const MAX_STEP = 0.05;

function Level(numLevel) {
    // Propiedades básicas de un nivel
    if (!this.validateLevel(LEVELS[numLevel])) throw new Error('Wrong level design. You need a player and a coin.');
    this.heigth = LEVELS[numLevel].length;
    this.width = LEVELS[numLevel][0].length;
    this.mapa = LEVELS[numLevel];
    this.currentLevel = numLevel;
    this.grid = [];
    this.actors = [];
    // Construyo el nivel (escenario y actores)
    for (let y = 0; y < this.mapa.length; y++) {
        let auxRow = [];
        for (let x = 0; x < this.mapa[y].length; x++) {
            // Carga de nivel (elementos fijos o sin "vida")
            auxRow.push(FIXED[this.mapa[y][x]]);
            // Elementos especiales
            let Actor = ACTORS[this.mapa[y][x]];
            if (Actor) this.actors.push(new Actor(new Vector(x,y),this.mapa[y][x]));
        }
        this.grid.push(auxRow);
    }
    this.player = this.actors.filter(actor => actor.type === 'player')[0];
}

Level.prototype.update = function(step, keys) {
    while (step > 0) {
        let current = Math.min(step, MAX_STEP);
        this.actors.forEach(actor => {
            if (actor.type === 'player') actor.update(current, keys, this);
            else if (actor.type === 'lava') actor.update(current, this);
            else actor.update(current);
        });
        step -= current;
    }
}

Level.prototype.isFinished = function() {
    let finished = true;
    this.actors.forEach(actor => { if (actor.type === 'coin') finished = false; });
    if (this.player.lives === 0) {
        finished = true;
        this.status = 'lost';
    }
    return finished;
}

Level.prototype.validateLevel = function(map) {
    return  map.some(r => r.indexOf('@') !== -1) && 
            map.some(r => r.indexOf('o') !== -1);
}

Level.prototype.collisionCheck = function(position, size) {
    let xStart, xEnd, yStart, yEnd;
    xStart = Math.floor(position.x);
    xEnd = Math.ceil(position.x + size.x);
    yStart = Math.floor(position.y);
    yEnd = Math.ceil(position.y + size.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0 ) return 'wall';
    if (yEnd > this.heigth) return 'wall';

    for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {
            let fieldType = this.grid[y][x];
            if (fieldType) return fieldType;
        }
    }
}

Level.prototype.actorTouched = function (actor) {
    if (actor.type === 'lava' && this.status === false) {
        this.status = 'lost';
        this.finishDelay = 1;
        return 'lost';
    } else if (actor.type === 'coin') {
        this.actors = this.actors.filter(otherActor => otherActor !== actor);
        if (!this.actors.some(actor => actor.type === 'coin')) {
            this.status = 'won';
            this.finishDelay = 2;
            return 'won';
        }
    }
}