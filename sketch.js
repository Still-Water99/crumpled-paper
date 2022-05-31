const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var balls_option;
var balls, ball_image;
var groundObj;
var leftSide, rightSide;
var dustbin;

function preload() {

}

function setup() {
    createCanvas(1500, 700);

    balls_option = {
        restitution: 0.3,
        friction: 0,
        density: 1.2
    }

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    groundObj = new Ground(width / 2, 670, width, 20);
    leftSide = new Ground(900, 600, 10, 120);
    rightSide = new Ground(1100, 600, 10, 120);
    ball = Bodies.circle(200, 200, 40, balls_option);
    World.add(world, ball);

    ball_image = loadImage("paper.png");

    Engine.run(engine);
    rectMode(CENTER);

}


function draw() {
    background(255);
    groundObj.show();
    leftSide.show();
    rightSide.show();
    image(ball_image, ball.position.x - 15, ball.position.y - 15, 40, 40);
    dustbin = createSprite(1000, 600, 210, 120);
    drawSprites();

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 300, y: -300 });
    }
}