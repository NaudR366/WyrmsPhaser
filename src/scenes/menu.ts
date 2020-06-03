import Phaser, { Game } from 'phaser'

export default class Menu extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private levelSelect?: Phaser.Physics.Arcade.StaticGroup
    private score = 0

    private widthBounds = 1400
    private heigthBounds = 600

	constructor()
	{
        super('menu')

    }

    create()
    {
        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heigthBounds)

        //create background
        this.add.image(this.widthBounds /2,this.heigthBounds / 2, "blueCave").setDisplaySize(this.widthBounds, this.heigthBounds)

        //add music
        this.sound.play("menuMusic", {
            loop: true,
            volume: 0.5
        })

        //create platform
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0,this.heigthBounds, 'grassPlatform')
        this.platforms.create(800,this.heigthBounds, 'grassPlatform')
        this.platforms.create(400,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1200,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1400,this.heigthBounds, 'grassPlatform')

        //create play button
        this.play = this.physics.add.staticGroup()
        this.play.create(this.widthBounds / 2 - 200, this.heigthBounds - 150, 'start')

        //create level select button
        this.levelSelect = this.physics.add.staticGroup()
        this.levelSelect.create(this.widthBounds / 2, this.heigthBounds - 150, 'levels')

        //create exit button

        //create player
        this.player = this.physics.add.sprite(0, this.heigthBounds - 100, 'worm')
        this.player.setBounce(0.1)
        this.player.setCollideWorldBounds(true)

        //create controls text
        this.add.text(10,this.heigthBounds - 270, "Controls", {
            fontSize: '30px',
            fill: '#fff',
                })

        this.add.text(10,this.heigthBounds - 240, "To move use the arrow keys", {
            fontSize: '25px',
            fill: '#fff',
                })

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

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heigthBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)
        
    }

    private handleFullscreen() {
        if(this.scale.isFullscreen == false) {
            console.log("test")
            this.scale.startFullscreen()
        }
    }

    private handlePlay()
    {
        this.sound.stopAll()
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

             //play jump sound
             this.sound.play('playerJump', {
                volume: 0.5
            })
        }

        if (!this.player?.body.touching.down) {
            this.player?.anims.play('turn')
        }
    }
}