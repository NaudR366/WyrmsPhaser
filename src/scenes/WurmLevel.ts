import Phaser from 'phaser'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

    constructor()
	{
		super('wurm-world')
	}


    preload() {

        this.load.image('background', 'assets/background.png')
        this.load.image('ground', 'assets/ground.png')
        this.load.spritesheet('worm', 'assets/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })
    }

    create() {

        this.add.image(960, 500, 'background')

        //create platforms
        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(760, 750, 'ground') as Phaser.Physics.Arcade.Sprite
        
        ground
        .setScale(4)
        .refreshBody()

        this.platforms.create(900,300, 'ground')
        this.platforms.create(400,450, 'ground')
        this.platforms.create(1200,550, 'ground')

        //create player
        this.player = this.physics.add.sprite(100, 450, 'worm')
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

        this.cursors = this.input.keyboard.createCursorKeys()

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
        }
 
     } 
    }

}