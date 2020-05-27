import Phaser from 'phaser'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group

    private score = 0
    private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    constructor()
	{
		super('wurmWorld')
	}


    preload() {

        // this.load.image('cavebg', 'assets/background/background.png')
        // this.load.image('stoneGround', 'assets/platform/ground5.png')
        // this.load.image('suitcase', 'assets/koffer.png')
        // this.load.spritesheet('worm', 'assets/worm.png', { 
        //     frameWidth: 65, frameHeight: 60
        // })
    }

    create() {

        //set background
        this.add.image(960, 500, 'cavebg')

        //create start point for platfom
        let platformX = 60

        //create platforms
        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(platformX, 750, 'stoneGround') as Phaser.Physics.Arcade.Sprite
        
        ground
        .setScale(1)
        .refreshBody()

        this.platforms.create(700,500, 'stoneGround')
        this.platforms.create(400,650, 'stoneGround')
        this.platforms.create(820,500, 'stoneGround')
        this.platforms.create(820,380, 'stoneGround')
        this.platforms.create(1200,550, 'stoneGround')
        this.platforms.create(1320,550, 'stoneGround')

        //create player
        this.player = this.physics.add.sprite(platformX, 450, 'worm')
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

        //create suitcase
        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 1300, y: 400,}
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)

        //create score
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff',
        })

    }

    //function for collecting suitcase
    private handleCollectSuitcase(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject)
    {
        const suitcase = s as Phaser.Physics.Arcade.Image
        suitcase.disableBody(true, true)
        this.score += 100
        this.scoreText?.setText(`Score: ${this.score}`)

        //stop all animations
        this.physics.pause();
        this.anims.pauseAll()

        //create Level completed text
        this.levelCompleteText = this.add.text(500, 300, 'Level Completed', {
            fontSize: '60px',
            fill: '#fff',
                })

        //go to next level
        this.scene.start('mole-world')
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