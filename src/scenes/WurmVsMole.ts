import Phaser from 'phaser'

export default class WurmVsMole extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    

    constructor()
	{
		super('mole-world')
	}


    preload() {
        this.load.image('background', 'assets/background.png')
        this.load.image('dude2', 'assets/ground.png')
        this.load.image('ground', 'assets/ground.png')
    
    }

    create() {
        this.add.image(960, 500, 'background')
    }

    update() {
        
    }

}