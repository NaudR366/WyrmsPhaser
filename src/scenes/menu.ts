import Phaser, { Game } from 'phaser'
import Worm from '~/players/worm'

export default class Menu extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    private play?: Phaser.Physics.Arcade.StaticGroup
    private levelSelect?: Phaser.Physics.Arcade.StaticGroup
    private exit?: Phaser.Physics.Arcade.StaticGroup
    private score = 0

    private widthBounds = 1400
    private heigthBounds = 600

	constructor()
	{
        super('menu')
    }

    create()
    {
        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heigthBounds)

        //create background
        this.add.image(this.widthBounds /2,this.heigthBounds / 2, "blueCave").setDisplaySize(this.widthBounds, this.heigthBounds)

        //add music
        this.sound.play("menuMusic", {
            loop: true,
            volume: 0.5
        })

        //create platform
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0,this.heigthBounds, 'grassPlatform')
        this.platforms.create(800,this.heigthBounds, 'grassPlatform')
        this.platforms.create(400,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1200,this.heigthBounds, 'grassPlatform')
        this.platforms.create(1400,this.heigthBounds, 'grassPlatform')

        //create play button
        this.play = this.physics.add.staticGroup()
        this.play.create(this.widthBounds / 2 - 200, this.heigthBounds - 150, 'start')

        //create level select button
        this.levelSelect = this.physics.add.staticGroup()
        this.levelSelect.create(this.widthBounds / 2, this.heigthBounds - 150, 'levels')

        //create exit button
        this.exit = this.physics.add.staticGroup()
        this.exit.create(this.widthBounds / 2 + 200, this.heigthBounds - 150, 'exit')

        //create player
        this.player = new Worm(this, 0, this.heigthBounds - 100)

        //create controls text
        this.add.text(10,this.heigthBounds - 270, "Controls", {
            fontSize: '30px',
            fill: '#fff',
                })

        this.add.text(10,this.heigthBounds - 240, "To move use the arrow keys", {
            fontSize: '25px',
            fill: '#fff',
                })

        //set collisions
        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.play, this.handlePlay, undefined, this)
        this.physics.add.collider(this.player, this.levelSelect, this.handleSelect, undefined, this)
        this.physics.add.collider(this.player, this.exit, this.handleExit, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heigthBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)
        
    }

    private handlePlay()
    {   
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('wurmWorld')
    }

    private handleSelect()
    {
        this.scene.start('levels')
    }

    private handleExit() {
        window.location.href = 'https://hr-cmgt.github.io/arcade-server/'
    }

    update()
    {
        
    }
}