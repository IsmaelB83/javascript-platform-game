
var game;
initGame();

// Inicializa el juego
function initGame() {
    try {
        game = new Game(0);
        game.trackKeys();
        game.intervalId = setInterval(loop, 1000 / game.fps);
    } catch (error) {
        console.log(error);
    }
}

function loop() {
    game.update();
    game.render();
    if (game.finished() === true) {
        alert('Game is finished');
        clearInterval(game.intervalId);
    }
}