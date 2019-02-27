const LEVELS = [
    ["                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                  xxx           ",
     "                                                   xx      xx    xx!xx          ",
     "                                    o o      xx                  x!!!x          ",
     "                                                                 xx!xx          ",
     "                                   xxxxx                          xvx           ",
     "                                                                            xx  ",
     "  xx                                      o o                                x  ",
     "  x                     o                                                    x  ",
     "  x                                      xxxxx                             o x  ",
     "  x          xxxx       o                                                    x  ",
     "  x   @      x  x                                                xxxxx       x  ",
     "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
     "                              x   x                  x     x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              xxxxx                  xxxxxxx                    ",
     "                                                                                ",
     "                                                                                "],
    ["                                      x!!x                        xxxxxxx                                    x!x  ",
     "                                      x!!x                     xxxx     xxxx                                 x!x  ",
     "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
     "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
     "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
     "                                                xx!x         x     o   o                                    xx!x  ",
     "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
     "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
     "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
     "                                                              xx!!!!!!!!!!!xx            v                        ",
     "                                                               xxxx!!!!!xxxx                                      ",
     "                                               x     x            xxxxxxx        xxx         xxx                  ",
     "                                               x     x                           x x         x x                  ",
     "                                               x     x                             x         x                    ",
     "                                               x     x                             xx        x                    ",
     "                                               xx    x                             x         x                    ",
     "                                               x     x      o  o     x   x         x         x                    ",
     "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
     "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
     "             xx       xx        x o x          x    xx               x   x   x               x                    ",
     "     @       x         x        x   x          x     x               x   x   x               x                    ",
     "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
     "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
     "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
     "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
    ["                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                        o                                                                     ",
     "                                                                                                              ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                       xxx                                                                    ",
     "                                       x x                 !!!        !!!  xxx                                ",
     "                                       x x                 !x!        !x!                                     ",
     "                                     xxx xxx                x          x                                      ",
     "                                      x   x                 x   oooo   x       xxx                            ",
     "                                      x   x                 x          x      x!!!x                           ",
     "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
     "                                     xx   xx      x   x      x                                                ",
     "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
     "                                      x   x           x                    x!!!x                              ",
     "                                      x   x           x                     xxx                               ",
     "                                     xx   xx          x                                                       ",
     "                                      x   x= = = =    x            xxx                                        ",
     "                                      x   x           x           x!!!x                                       ",
     "                                      x   x    = = = =x     o      xxx       xxx                              ",
     "                                     xx   xx          x                     x!!!x                             ",
     "                              o   o   x   x           x     x                xxv        xxx                   ",
     "                                      x   x           x              x                 x!!!x                  ",
     "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
     "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
     "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
     "                             xx           xx                                         xxx                      ",
     "  xxx                         x     x     x                                         x!!!x                xxx  ",
     "  x x                         x    xxx    x                                          xxx                 x x  ",
     "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
     "  x                           x           x                              x   x                             x  ",
     "  x                           xx          x                              x x x                             x  ",
     "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
     "  x                xxx             o o    x                              x         xxx                     x  ",
     "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
     "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
     "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
     "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
     "                                                                                                              ",
     "                                                                                                              "],
  ];

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

function Level(nivel) {
    // Propiedades básicas de un nivel
    if (!this.validateLevel(LEVELS[nivel])) throw new Error('Wrong level design. You need a player and a coin.');
    this.heigth = LEVELS[nivel].length;
    this.width = LEVELS[nivel][0].length;
    this.mapa = LEVELS[nivel];
    this.currentLevel = nivel;
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
            if (Actor) {
                this.actors.push(new Actor(new Vector(x,y),this.mapa[y][x]));
            }
        }
        this.grid.push(auxRow);
    }
    
}

Level.prototype.isFinished = function() {
    let finished = true;
    this.actors.forEach(actor => { if (actor.type === 'coin') finished = false; });
    return finished;
}

Level.prototype.validateLevel = function(map) {
    return  map.some(r => r.indexOf('@') !== -1) && map.some(r => r.indexOf('o') !== -1);
}

Level.prototype.collisionCheck = function(position, size) {
    let xStart, xEnd, yStart, yEnd;
    xStart = Math.floor(position.x);
    xEnd = Math.ceil(position.x);
    yStart = Math.floor(position.y);
    yEnd = Math.ceil(position.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0 ) return 'wall';
    if (yEnd > this.heigth) return 'wall';
}