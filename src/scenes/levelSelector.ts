import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class Level extends Phaser.Scene
{

    //set world bounds
    private widthBounds = 1400
    private heigthBounds = 600


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    // private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private back?: Phaser.Physics.Arcade.StaticGroup
    private level1?: Phaser.Physics.Arcade.StaticGroup
    private level2?: Phaser.Physics.Arcade.StaticGroup
    private level3?: Phaser.Physics.Arcade.StaticGroup
    private level4?: Phaser.Physics.Arcade.StaticGroup

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
        this.platforms.create(0,this.heigthBounds, 'grassPlatform')
        this.platforms.create(800,this.heigthBounds, 'grassPlatform')
        this.platforms.create(400,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1200,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1400,this.heigthBounds, 'grassPlatform')


        //create player
        this.player = new Worm(this, 0, this.heigthBounds - 200)

        //create back button
        this.back = this.physics.add.staticGroup()
        this.back.create(this.widthBounds / 2 - 300, this.heigthBounds - 200, 'start')

        //level 1 select button
        this.level1 = this.physics.add.staticGroup()
        this.level1.create(this.widthBounds / 2 - 200,this.heigthBounds - 200, 'Wurm')
        
        //level 2 select button
        this.level2 = this.physics.add.staticGroup()
        this.level2.create(this.widthBounds / 2 - 100,this.heigthBounds - 200, 'WvM')

        //level 3 select button
        this.level3 = this.physics.add.staticGroup()
        this.level3.create(this.widthBounds / 2,this.heigthBounds - 200, 'Aal')

        //level 4 select button
        this.level4 = this.physics.add.staticGroup()
        this.level4.create(this.widthBounds / 2 + 100,this.heigthBounds - 200, 'iceworld')
        
        //set collisions
        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.back, this.handleBack, undefined, this)
        this.physics.add.collider(this.player, this.level1, this.handleLevel1, undefined, this)
        this.physics.add.collider(this.player, this.level2, this.handleLevel2, undefined, this)
        this.physics.add.collider(this.player, this.level3, this.handleLevel3, undefined, this)
        this.physics.add.collider(this.player, this.level4, this.handleLevel4, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heigthBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.8)
    }

    private handleBack()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('menu')
    }

    private handleLevel1()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('wurmWorld')
    }

    private handleLevel2()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('mole-world')
    }

    private handleLevel3()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('aal-world')
    }

    private handleLevel4()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('iceWorld')
    }

    update() {

    }
}