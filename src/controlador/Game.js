const KEY_CODES = {
	27: 'ESCAPE',
	37: 'LEFT',
	38: 'JUMP',
	39: 'RIGHT',
	13: 'LEVEL',
}

function Game(levelNumber) {
	this.fps = 50;
	this.level = new Level(levelNumber);
	this.display = new Display(document.getElementsByClassName('container')[0], this.level.grid);
	this.display.render(this.level.actors);
	this.player = this.level.actors.filter(actor => actor.type === 'player')[0];
}

Game.prototype.trackKeys = function() {
	let pressedKeys = {}
	function keyTrackEventListener(event) {
		if (KEY_CODES.hasOwnProperty(event.keyCode)) {
			let downPressed = event.type === 'keydown';
			pressedKeys[KEY_CODES[event.keyCode]] = downPressed;
			event.preventDefault();
		}
	}
	document.addEventListener('keydown', keyTrackEventListener);
	document.addEventListener('keyup', keyTrackEventListener);
	this.keys = pressedKeys;
}

Game.prototype.update = function() {
	// Izquierda y Derecha
	if (this.keys['LEFT'] === true)  {
		this.player.speed.x = -0.35;
	} else if (this.keys['RIGHT'] === true) {
		this.player.speed.x = 0.35;
	} else {
		this.player.speed.x = 0;
	}
	// Jump
	if (this.keys['JUMP'] === true) {
		this.player.jumping = true;
		this.player.speed.y = 0.35;
	} else {
		this.player.jumping = false;
		this.player.speed.y = 0;
	}
	// Chequeo de colisiones
	switch (this.level.collisionCheck(this.player.position, this.player.size)) {
		case 'wall': 
			this.player.speed = new Vector(0,0);
			break;
		case 'lava': alert('Has muerto');
			this.player.speed = new Vector(0,0);
			break;	
	}
	// Actualizar todos los actores
	this.level.actors.forEach(actor => {
		actor.update();
	});
}

Game.prototype.render = function() {
	this.display.render(this.level.actors);
}

Game.prototype.finished = function() {
	if (this.keys['ESCAPE'] === true) {
		return true;
	}
	return false;
}