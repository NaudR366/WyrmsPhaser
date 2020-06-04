import Phaser from 'phaser'

export default class Load extends Phaser.Scene
{
    constructor()
    {
        super('load')

    }

    preload() {
        //load backgrounds
        this.load.image('blueCave', 'assets/backgrounds/menubg.png')
        this.load.image('cavebg', 'assets/backgrounds/background.png')
        this.load.image('underwaterBackground', 'assets/backgrounds/bg_aal.png');

        //load menu buttons
        this.load.image('start', 'assets/menubuttons/menustart.png')
        this.load.image('levels', 'assets/menubuttons/levelselect.png')

        //load platforms
        this.load.image('grassPlatform', 'assets/grassplatforms/ground.png')

        //ice world platforms
        this.load.image('iceground1' , 'assets/icegrounds/ground1.png') // 1
        this.load.image('iceground2', 'assets/icegrounds/ground2.png') //2
        this.load.image('iceground3', 'assets/icegrounds/ground3.png') //3
        this.load.image('stoneground5', 'assets/icegrounds/ground5.png') //5
        this.load.image('ice', 'assets/icegrounds/ice.png') //ice

        //load players
        this.load.spritesheet('worm', 'assets/players/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })
        this.load.image('aal', 'assets/players/aal.png');

        //load enemys
        this.load.spritesheet('mol', 'assets/enemys/mole.png',{frameWidth: 65, frameHeight: 57})

        //load pickups
        this.load.image('suitcase', 'assets/pickups/koffer.png')

        //load misc
        this.load.image('lava', 'assets/misc/lavaground.png')

        //load sounds
        this.load.audio('menuMusic', 'assets/backgroundsounds/menuMusic.mp3')
        this.load.audio('playerJump', 'assets/playersounds/jump.wav')


        //create loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x00ff00
            }
        })

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
        })

        //when loaded
        this.load.on("complete", ()=>{
            console.log("Game Loaded")
        })
    }

    create()
    {
        //create worm animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('worm', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'worm', frame: 4 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('worm', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        // mol animation
        this.anims.create({
            key: 'leftmol',
            frames: this.anims.generateFrameNumbers('mol', {
                start: 0, end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turnmol',
            frames: [ { key: 'mol', frame: 7 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'rightmol',
            frames: this.anims.generateFrameNumbers('mol', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.start('menu')
    }
}