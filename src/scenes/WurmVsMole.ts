import Phaser, { Loader } from 'phaser'
import Worm from '~/players/worm'
import Mole from '~/enemies/mole'

export default class WurmVsMole extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group
    private mole?: Mole
    private moleX?
    private moleY?
    private fadeCheck = true

    private score = 0
    private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    constructor()
	{
		super('mole-world')
	}

    create() {
        this.add.image(750, 330, 'blueCave')

        //restart animations
        this.anims.resumeAll()

        //unmute sound
        this.sound.mute = false

        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(780, 690, 'grassPlatform') as Phaser.Physics.Arcade.Sprite 
        ground
        .setScale(1)
        .refreshBody()

        this.platforms.create(1050,250, 'grassPlatform')
        this.platforms.create(550,400, 'grassPlatform')
        this.platforms.create(1200,540, 'grassPlatform')
        this.platforms.create(200,690, 'grassPlatform')
        this.platforms.create(400,690, 'grassPlatform')
        this.platforms.create(1000,690, 'grassPlatform')
        this.platforms.create(1400,690, 'grassPlatform')

        //create player
        this.player = new Worm(this, 0 , 100)

        this.moleX = 1000
        this.moleY = 450

        //create mole
        this.mole = new Mole(this, this.moleX, this.moleY)
        
        this.physics.add.collider(this.mole, this.platforms)
        this.physics.add.collider(this.player, this.platforms)

        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 1000, y: 200,}
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)
        this.physics.add.overlap(this.player, this.mole, this.handleCollectMole, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.game.renderer.width, this.game.renderer.height, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

        //create score
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff',
        })

        

    }

    private handleCollectSuitcase(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject)
    {
        const suitcase = s as Phaser.Physics.Arcade.Image
        suitcase.disableBody(true, true)
        this.score += 100
        this.scoreText?.setText(`Score: ${this.score}`)
        this.physics.pause();
        this.anims.pauseAll()
        //create Level completed text
        this.levelCompleteText = this.add.text(500, 300, 'Level Completed', {
            fontSize: '60px',
            fill: '#fff',
        })

        //go to next level
        setTimeout(() => {
            this.scene.start('aal-world')
        }, 3000);
    }

    private handleCollectMole(player: Phaser.GameObjects.GameObject, m: Phaser.GameObjects.GameObject)
    {
        const mole = m as Phaser.Physics.Arcade.Sprite
        mole.disableBody(true, true)
        this.score += 25
        this.scoreText?.setText(`Score: ${this.score}`)
        
    
    }

    

    update() {

        if(this.moleX > 1200 ){
            this.mole?.setVelocityX(-100)
            this.mole?.anims.play('leftmol', true)
            
        } else {
            this.mole?.setVelocityX(100)
            this.mole?.anims.play('rightmol', true)
            this.moleX = this.moleX += 1
        }
    }

}