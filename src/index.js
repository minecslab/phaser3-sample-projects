import 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

function create() {
    // 0,0 is the center of the canvas - so 400,300 means upper left corner.
    this.add.image(400, 300, 'sky');
    //order is needed - if star is first addd it will be covered by sky. 
    this.add.image(400, 100, 'star');
    var logo = this.add.image(400, 150, 'logo');
    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
}

function update() {

}
