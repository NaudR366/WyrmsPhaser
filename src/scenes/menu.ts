import Phaser from 'phaser'

export default class Menu extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	constructor()
	{
		super('menu')
    }

    preload()
    {
        this.load.image('background', 'assets/background/menubg.png')
        this.load.image('start', 'assets/menubuttons/menustart.png')
        this.load.image('platform', 'assets/ground.png')
        this.load.spritesheet('worm', 'assets/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })
    }

    create()
    {
        //create background
        this.add.image(0,0, "background").setOrigin(0).setDepth(0);

        //create platform
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0,670, 'platform').setOrigin(0)
        this.platforms.create(400,670, 'platform').setOrigin(0)
        this.platforms.create(800,670, 'platform').setOrigin(0)
        this.platforms.create(1200,670, 'platform').setOrigin(0)

        //create play button
        let play = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "start").setOrigin(0).setDepth(1);

        //create level select button

        //create exit button

        //set interactivity for buttons
        play.setInteractive();

        //create player
        this.player = this.physics.add.sprite(20, 600, 'worm')
        this.player.setBounce(0.1)
        this.player.setCollideWorldBounds(true)

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

        //set collisions
        this.physics.add.collider(this.player, this.platforms)

        //set keys
        this.cursors = this.input.keyboard.createCursorKeys()
        

        
    }

    update()
    {

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
    }
}