var PLAY = 1;
var END = 0;
var gameState = 1;
var submarine, submarineImage;
var gameOverImage, gameOver;
var jewel1, jewel1image, jewel2, jewel2image, jewel3, jewel3image, jewel4, jewel4image
var jewel1group, jewel2group, jewel3group, jewel4group; //obstacleGroup 
//var survivalTime = 0;
var jewelCollected = 0;
var invisibleGround;
var bg0, backgroundImg;
var Torpedoes = 5;
var Ammo = 100

function preload() {
    backgroundImg = loadImage("seaBackground4x.jpg");
    submarineImage = loadImage("submarine(1).png");


}



function setup() {
    createCanvas(5800, 2500);

    //for background
    bg0 = createSprite(1900, 700, 600, 600);
    bg0.addImage("bg0", backgroundImg);
    //bg0.scale = 2.5;
    bg0.velocityX = -15

    //for submarine
    submarine = createSprite(1250, 660, 20, 20);
    submarine.addImage(submarineImage);
    submarine.scale = 2.5;

    //for reducing collision radius
    submarine.setCollider("rectangle", 0, -10, 500, 80)
        //submarine.debug = true;

    //for invisibleBedrock
    invisibleGround = createSprite(2250, 2050, 4500, 10)
    invisibleGround.visible = false;

}


function draw() {
    background(0);

    //for background
    if (bg0.x < 0) {
        bg0.x = bg0.width / 2;
    }

    //for submarine movement
    //for movement
    if (keyDown("d") && submarine.x < 1600 || keyDown(RIGHT_ARROW) && submarine.x < 1600) {
        submarine.x = submarine.x + 10;
    }

    if (keyDown("a") && submarine.x > 620 || keyDown(LEFT_ARROW) && submarine.x > 620) {
        submarine.x = submarine.x - 10;
    }
    if (keyDown("w") && submarine.y > 200 || keyDown(UP_ARROW) && submarine.y > 200) {
        submarine.y = submarine.y - 10;
    }
    if (keyDown("s") && submarine.y < 2050 || keyDown(DOWN_ARROW) && submarine.y < 2050) {
        submarine.y = submarine.y + 10;
    }
    //for collison of monkey
    submarine.collide(invisibleGround)

    drawSprites();
}