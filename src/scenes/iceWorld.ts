import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    // private suitcase?: Phaser.Physics.Arcade.Group

    // private score = 0
    // private scoreText?: Phaser.GameObjects.Text
    // private levelCompleteText?: Phaser.GameObjects.Text

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
        this.player = new Worm(this, 0, this.heightBounds - 200)

        this.physics.add.collider(this.player, this.platforms)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

    }

    update() {

    }
}