//menu is something that extended from the phaser library.
//uses the super keyword to call the constructor of the super class
//when we construct a menu object, we are going to use the 
//constructor of the parent scene object to construct it


//class Menus inherit Phaser.Scene, that is
//menu can be regarded as a Scene
class Menu extends Phaser.Scene {

    constructor(){
        super("menuScene");
        let tab = 10;
    }

    preload(){
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('taidao', './assets/taidao.jpeg');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize:'28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

    this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding,
         'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width / 2, game.config.height / 2, 'Use <-> arrow to move & (F) to fire',
        menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = "#00FF00";
    menuConfig.backgroundColor = '#000';
    this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding,
         'Press <- for Novice or -> for Expert', menuConfig)
        .setOrigin(0.5);
    //imported artwork
    this.add.image(320, 240, 'taidao');
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
}
    
    update(){

        if(Phaser.Input.Keyboard.JustDown(keyLEFT) || Phaser.Input.Keyboard.JustDown(keyA)){
            localStorage.setItem('selectedTime', 60);
            localStorage.setItem('spaceshipSpeed', 3);
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT) || Phaser.Input.Keyboard.JustDown(keyD)){
            localStorage.setItem('selectedTime', 5);
            localStorage.setItem('spaceshipSpeed', 4);
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        
    }

}