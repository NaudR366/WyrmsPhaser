import Phaser from 'phaser'

export default class Level extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private back?: Phaser.Physics.Arcade.StaticGroup
    private level1?: Phaser.Physics.Arcade.StaticGroup
    private level2?: Phaser.Physics.Arcade.StaticGroup
    private level3?: Phaser.Physics.Arcade.StaticGroup

	constructor()
	{
		super('levels')
    }

    create()
    {
        //create background
        this.add.image(0,0, "blueCave").setOrigin(0).setDepth(0);

        //create platform
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(800,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(400,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(1200,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(1400,this.game.renderer.height, 'grassPlatform')


        //create player
        this.player = this.physics.add.sprite(20, 600, 'worm')
        this.player.setBounce(0.1)
        this.player.setCollideWorldBounds(true)

        //create back button
        this.back = this.physics.add.staticGroup()
        this.back.create(this.game.renderer.width / 2 - 300, 550, 'start')

        //level 1 select button
        this.level1 = this.physics.add.staticGroup()
        this.level1.create(this.game.renderer.width / 2 - 200, 550, 'Wurm')
        
        //level 2 select button
        this.level2 = this.physics.add.staticGroup()
        this.level2.create(this.game.renderer.width / 2 - 100, 550, 'WvM')

        //level 3 select button
        this.level3 = this.physics.add.staticGroup()
        this.level3.create(this.game.renderer.width / 2 - 50, 550, 'Aal')
        
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
        this.physics.add.collider(this.player, this.back, this.handleBack, undefined, this)
        this.physics.add.collider(this.player, this.level1, this.handleLevel1, undefined, this)
        this.physics.add.collider(this.player, this.level2, this.handleLevel2, undefined, this)
        this.physics.add.collider(this.player, this.level3, this.handleLevel3, undefined, this)
        
        //set keys
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    private handleBack()
    {
        this.scene.start('menu')
    }

    private handleLevel1()
    {
        this.scene.start('wurmWorld')
    }

    private handleLevel2()
    {
        this.scene.start('mole-world')
    }

    private handleLevel3()
    {
        this.scene.start('aal-world')
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