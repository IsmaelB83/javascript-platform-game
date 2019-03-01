function Actor(position, size, type) {
    this.position = position.clone()
    this.respawnPosition = position.clone();
    this.size = size;
    this.type = type;
}