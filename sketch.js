const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3, ball;
var ground;
var dustbin, db;

function preload() {
    dustbin = loadImage("dustbin.png");
}

function setup() {
    createCanvas(800, 500);

    engine = Engine.create();
    world = engine.world;

    var p = {
        isStatic: true
    }

    ball = new Ball(100, 100, 40, 40);

    rect1 = Bodies.rectangle(600, 460, 120, 20, p);
    rect2 = Bodies.rectangle(600 + 53, 390, 20, 50, p);
    rect3 = Bodies.rectangle(600 - 53, 390, 20, 50, p);
    World.add(world, rect1);
    World.add(world, rect2);
    World.add(world, rect3);

    db = createSprite(600, 390, 10, 10);
    db.addImage(dustbin);
    db.scale = 0.5;


    ground = Bodies.rectangle(400, 490, 800, 20, { isStatic: true });
    World.add(world, ground);

    Engine.run(engine);

}


function draw() {
    background(200);
    //Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 800, 20);
    rect(rect1.position.x, rect1.position.y, 120, 20);
    rect(rect2.position.x, rect2.position.y, 20, 150);
    rect(rect3.position.x, rect3.position.y, 20, 150);

    if (keyWentDown("up")) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 95, y: -90 });
    }

    drawSprites();
    ball.display();
}