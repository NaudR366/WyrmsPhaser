import Phaser from 'phaser'

export default class Menu extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private levelSelect?: Phaser.Physics.Arcade.StaticGroup
    private score = 0

	constructor()
	{
        super('menu')

    }

    create()
    {
        //create background
        this.add.image(0,0, "blueCave").setOrigin(0).setDepth(0);

        //create controls text
        this.add.text(10,10, "Controls", {
            fontSize: '30px',
            fill: '#fff',
                })

        this.add.text(10,40, "To move use the arrow keys", {
            fontSize: '25px',
            fill: '#fff',
                })

        //create platform
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0,690, 'grassPlatform')
        this.platforms.create(400,690, 'grassPlatform')
        this.platforms.create(800,690, 'grassPlatform')
        this.platforms.create(1200,690, 'grassPlatform')
        this.platforms.create(1400,690, 'grassPlatform')

        //create play button
        this.play = this.physics.add.staticGroup()
        this.play.create(this.game.renderer.width / 2 - 200, 550, 'start')

        //create level select button
        this.levelSelect = this.physics.add.staticGroup()
        this.levelSelect.create(this.game.renderer.width / 2, 550, 'levels')

        //create exit button

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
        this.physics.add.collider(this.player, this.play, this.handlePlay, undefined, this)
        this.physics.add.collider(this.player, this.levelSelect, this.handleSelect, undefined, this)

        //set keys
        this.cursors = this.input.keyboard.createCursorKeys()
        

    }

    private handlePlay()
    {
        this.scene.start('wurmWorld')
    }

    private handleSelect()
    {
        this.scene.start('levels')
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

        if (!this.player?.body.touching.down) {
            this.player?.anims.play('turn')
        }
    }
}