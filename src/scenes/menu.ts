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
        //create background
        this.add.image(0,0, "background").setOrigin(0).setDepth(0);

        //create play button


        //create level select button
    }

    update()
    {

    }
}