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

        //load platforms
        this.load.image('grassPlatform', 'assets/grassplatforms/ground.png')
        this.load.image('stoneGround', 'assets/icegrounds/ground5.png')

        //load players
        this.load.spritesheet('worm', 'assets/players/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })
        this.load.image('aal', 'assets/players/aal.png');

        //load enemys
        this.load.spritesheet('mol', 'assets/enemys/mole.png',{frameWidth: 65, frameHeight: 57})

        //load pickups
        this.load.image('suitcase', 'assets/pickups/koffer.png')


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
        this.scene.start('menu')
    }
}