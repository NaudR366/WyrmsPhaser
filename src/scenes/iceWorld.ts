import Phaser from 'phaser'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group

    private score = 0
    private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    private widthBounds = 5000
    private heightBounds = 2500

    constructor()
	{
        super('iceWorld')
        
    }

    create() {
        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heightBounds)

        //set background
        this.add.image(0, 0, "blueCave").setDisplaySize(this.widthBounds, this.heightBounds).setOrigin(0)

        //create platforms
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0, this.heightBounds, 'iceGround')
        this.platforms.create(130, this.heightBounds, 'iceGround')

        //create player
        this.player = this.physics.add.sprite(0, this.heightBounds - 200, 'worm')
        this.player.setBounce(0.1)
        this.player.setCollideWorldBounds(true)

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

        this.physics.add.collider(this.player, this.platforms)

        //create controls
        this.cursors = this.input.keyboard.createCursorKeys()

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

    }

    update() {
        //check keyboard inputs
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
             this.sound.play('playerJump', {
                 volume: 0.5
             })
        }
    }
}