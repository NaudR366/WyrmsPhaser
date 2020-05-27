import Phaser from 'phaser'

export default class Menu extends Phaser.Scene
{

	constructor()
	{
		super('menu')
    }

    preload()
    {
        this.load.image('background', 'assets/background/menubg.png')
    }

    create()
    {
        this.add.image(0,0, "background").setOrigin(0)
    }

    update()
    {

    }
}