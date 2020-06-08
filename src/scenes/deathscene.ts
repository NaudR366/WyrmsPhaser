import Phaser from 'phaser'

export default class Death extends Phaser.Scene
{

    private widthBounds = 1400
    private heigthBounds = 600

    private spaceBar

	constructor()
	{
        super('death')
    }

    create()
    {
        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heigthBounds)

        //create background
        this.add.image(0, 0, "blueCave").setDisplaySize(this.game.renderer.width, this.game.renderer.height).setOrigin(0)

        //add music
        this.sound.play("deathMusic", {
            loop: true,
            volume: 0.5
        })

        //create death text
        this.add.text(this.game.renderer.width / 2,this.game.renderer.height / 2, "Game Over!", {
            fontSize: '30px',
            fill: '#fff',
            align: 'center'
                })

        this.add.text(this.game.renderer.width / 2,this.game.renderer.height / 2 + 50, "Press Spacebar to restart", {
            fontSize: '25px',
            fill: '#fff',
            align: 'center'
                })

        //create camera
        this.cameras.main.setBounds(0, 0, this.game.renderer.width, this.game.renderer.height, true);

        //create key
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            
    
    }

    private handlePlay()
    {   this.scene.stop()
        this.sound.stopAll()
        this.scene.start('load')
    }

    update()
    {
        if (Phaser.Input.Keyboard.JustDown(this.spaceBar))
        {
            console.log("spacebar pressed")
            this.handlePlay()
        } 
    }
}