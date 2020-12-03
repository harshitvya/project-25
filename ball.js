class Ball {
    constructor(x, y, r) {
        var g = {
            restitution: 0.3,
            friction: 0.3,
            density: 1.5
        }
        this.body = Bodies.rectangle(x, y, r, r, g);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
    }
}