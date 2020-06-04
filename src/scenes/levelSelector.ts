import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class Level extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
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
        this.platforms.create(0,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(800,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(400,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(1200,this.game.renderer.height, 'grassPlatform')
        this.platforms.create(1400,this.game.renderer.height, 'grassPlatform')


        //create player
        this.player = new Worm(this, 0, 60)

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
        this.level3.create(this.game.renderer.width / 2, 550, 'Aal')

        //level 3 select button
        this.level4 = this.physics.add.staticGroup()

        //level 4 select button
        this.level4.create(this.game.renderer.width / 2 + 100, 550, 'ice')
        
        //set collisions
        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.back, this.handleBack, undefined, this)
        this.physics.add.collider(this.player, this.level1, this.handleLevel1, undefined, this)
        this.physics.add.collider(this.player, this.level2, this.handleLevel2, undefined, this)
        this.physics.add.collider(this.player, this.level3, this.handleLevel3, undefined, this)
        this.physics.add.collider(this.player, this.level4, this.handleLevel4, undefined, this)
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