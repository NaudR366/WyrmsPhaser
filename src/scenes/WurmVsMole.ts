import Phaser, { Loader } from 'phaser'

export default class WurmVsMole extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group
    private mole?: Phaser.Physics.Arcade.Sprite
    private moleX?
    private moleY?

    private score = 0
    private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    constructor()
	{
		super('mole-world')
	}

    create() {
        this.add.image(750, 330, 'blueCave')

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

        this.player = this.physics.add.sprite(100, 450, 'worm')
        this.player.setBounce(0.1)
        this.player.setCollideWorldBounds(true)

        this.moleX = 1000
        this.moleY = 450

        this.mole = this.physics.add.sprite(this.moleX, this.moleY, 'mol')
        this.mole.setBounce(0.1)
        this.mole.setCollideWorldBounds(true)

        //worm animation
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

        //mol animation
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
        

        this.physics.add.collider(this.mole, this.platforms)
        this.physics.add.collider(this.player, this.platforms)
     

        this.cursors = this.input.keyboard.createCursorKeys()

        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 1000, y: 200,}
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)
        this.physics.add.overlap(this.player, this.mole, this.handleCollectMole, undefined, this)

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
        this.scene.start('aal-world')
    }

    private handleCollectMole(player: Phaser.GameObjects.GameObject, m: Phaser.GameObjects.GameObject)
    {
        const mole = m as Phaser.Physics.Arcade.Sprite
        mole.disableBody(true, true)
        this.score += 25
        this.scoreText?.setText(`Score: ${this.score}`)
    }

    

    update() {
        
        //Player Controls
        if(!this.cursors)
        {
             return
        }
 
        if(this.cursors?.left?.isDown)
        {
            this.player?.setVelocityX(-260)
            this.player?.anims.play('left',true)
        } 
        else if(this.cursors?.right?.isDown)
        {
            this.player?.setVelocityX(260)
            this.player?.anims.play('right',true)
        } else 
        {
         this.player?.setVelocityX(0)
         this.player?.anims.play('turn')
        }
 
        if (this.cursors.up?.isDown && this.player?.body.touching.down) 
        {
             this.player.setVelocityY(-360)
        }
        

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