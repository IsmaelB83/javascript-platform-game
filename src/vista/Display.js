const SCALE = 20;

// Inicializa el display gráfico del juego
function Display(parent, grid) {
    this.wrap = parent.appendChild(this.createElement('div','game'));
    this.wrap.appendChild(this.renderLevel(grid));
    this.actorsLayer = null;
}

// Renderiza un frame del juego
Display.prototype.render = function(actors) {
    if (this.actorsLayer) {
        this.wrap.removeChild(this.actorsLayer);
    }
    this.actorsLayer = this.wrap.appendChild(this.renderActors(actors));
}

// Renderizado del fondo estático
Display.prototype.renderLevel = function(grid) {
    let auxTable = this.createElement('table', 'background');
    auxTable.style.width = grid[0].length * SCALE + 'px';
    for (let y = 0; y < grid.length; y++) {
        let rowTable = this.createElement('tr','background');
        rowTable.style.height = SCALE + 'px';
        for (let x = 0; x < grid[y].length; x++) {
            rowTable.appendChild(this.createElement('td',grid[y][x]));
        }
        auxTable.appendChild(rowTable);
    }
    return auxTable;
}

// Renderizado de los actores dinámicos del juego
Display.prototype.renderActors = function(actors) {
    let actorsWrap = this.createElement('div');
    for (let i = 0; i < actors.length; i++) {
        const actor = actors[i];
        let actorDiv = this.createElement('div', `actor ${actor.type}`);
        actorDiv.style.width = actor.size.x * SCALE + 'px';
        actorDiv.style.height = actor.size.y * SCALE + 'px';
        actorDiv.style.left = actor.position.x * SCALE + 'px';
        actorDiv.style.top = actor.position.y * SCALE + 'px';
        actorsWrap.appendChild(actorDiv);
    }
    return actorsWrap;
}

// Elimina el wrap del HTML
Display.prototype.clear = function() {
    this.wrap.parentNode.removeChild(this.wrap);
    this.wrap = this.actorsLayer = null;    
} 

// Función auxiliar para crear un elemento HTML con clase CSS asociada
Display.prototype.createElement = function (htmlType, cssClass) {
    let element = document.createElement(htmlType);
    if (cssClass) element.className = cssClass;
    return element;
}
