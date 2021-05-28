import 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // we need this to use this.physics - flag that game will be  using arcade physics system.
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('logo', 'assets/logo.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
}

var platforms;

var player;

function create() {
    // 0,0 is the center of the canvas - so 400,300 means upper left corner.
    this.add.image(400, 300, 'sky');
    // you are using arcade physics system
    //create static physics group
    platforms = this.physics.add.staticGroup();
    //2 types of physics body:
    // 1. dynamic - one that can move around via forces such as velocity or accelration.
    //              - can bounce and collide with other objects and that collision is influenced by the mass of the
    //              body and other elements
    // 2. static - simply has position and size.

    // group - a group together similar objects and control them all as one single unit.
    //          - can also check for collision between groups and other game objects.

    // create ground
    // set scale 2 so that it will cover the whole width.
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    // add items to group
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{key: 'dude', frame: 4}],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
    this.physics.add.collider(player, platforms);
}

function update() {

}
