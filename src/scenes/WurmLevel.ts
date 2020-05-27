import Phaser from 'phaser'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup

    constructor()
	{
		super('wurm-world')
	}


    preload() {

        this.load.image('background', 'assets/background.png')
        this.load.image('ground', 'assets/ground.png')
    }

    create() {

        this.add.image(960, 500, 'background')

        //create platforms
        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(100, 200, 'ground') as Phaser.Physics.Arcade.Sprite
        
        ground
        .setScale(3)
        .refreshBody()

        this.platforms.create(800,100, 'ground')
        this.platforms.create(50,250, 'ground')
        this.platforms.create(750,220, 'ground')
    }

    update() {
    }

}