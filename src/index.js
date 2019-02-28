const KEY_CODES = {
	27: 'ESCAPE',
	37: 'LEFT',
	38: 'JUMP',
	39: 'RIGHT',
	13: 'LEVEL',
}

let keys = this.trackKeys();

runGame(DOMDisplay);

function runGame (Display) {
    let keys = this.trackKeys();
	let level = new Level(0);
	runLevel(level, Display, status => {
		if (status === 'lost') console.log('Has perdido');
		else console.log('Has ganado');
	});
}

function runLevel (level, Display, callback) {
	let display = new Display(document.getElementsByClassName('container')[0],level.grid);
	runLoop(function (step) {
		level.update(step, keys);
		display.renderActors(level.actors);
		if (level.isFinished()) {
			display.clear();
			if (callback) callback(level.status);
			return false;
		}
	});
}

function runLoop (loopFunction) {
	let lastTime = null;
	function loop(time) {
		let stop = false;
		if (lastTime != null) {
			let step = Math.min(time - lastTime, 100) / 1000;
			stop = loopFunction(step) === false;
		}
		lastTime = time;
		if (!stop) requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);
}

function trackKeys () {
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
	return pressedKeys;
}