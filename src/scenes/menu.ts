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
        this.load.image('start', 'assets/menubuttons/menustart.png')
    }

    create()
    {
        //create background
        this.add.image(0,0, "background").setOrigin(0).setDepth(0);

        //create play button
        let play = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 100, "start").setOrigin(0).setDepth(1);

        //create level select button

        //set interactivity for buttons
        play.setInteractive();

        
    }

    update()
    {

    }
}