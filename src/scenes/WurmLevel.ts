import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private lava?: Phaser.Physics.Arcade.StaticGroup
    private player? : Phaser.Physics.Arcade.Sprite
    // private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group

    private score = 0
    private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    private widthBounds = 1600
    private heightBounds = 600

    constructor()
	{
        super('wurmWorld')
        
    }
    
    create() {

        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heightBounds)

        //set background
        this.add.image(0, 0, "cavebg").setDisplaySize(this.widthBounds, this.heightBounds).setOrigin(0)

        //set background sound

        //add lava
        this.lava = this.physics.add.staticGroup()
        this.lava.create(0, this.heightBounds, 'lava')
        this.lava.create(200, this.heightBounds, 'lava')
        this.lava.create(700, this.heightBounds, 'lava')
        this.lava.create(1400, this.heightBounds, 'lava')

        //create platforms
        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(50, this.heightBounds, 'stoneGround') as Phaser.Physics.Arcade.Sprite // spawn ground 

        ground
        .setScale(1)
        .refreshBody()
        
        this.platforms.create(400,this.heightBounds - 100, 'stoneGround') //1
        this.platforms.create(700,this.heightBounds - 200, 'stoneGround') // 2
        this.platforms.create(820,this.heightBounds - 200, 'stoneGround')
        this.platforms.create(820,this.heightBounds - 330, 'stoneGround')
        this.platforms.create(1200,this.heightBounds - 200, 'stoneGround')
        this.platforms.create(1320,this.heightBounds - 200, 'stoneGround')

        //create player
        this.player = new Worm(this, 0, this.heightBounds - 200)

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.lava)

        //create suitcase
        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 1300, y: this.heightBounds - 400,}
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)
        

        //create score
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff',
        })

    }

    //function for collecting suitcase
    private handleCollectSuitcase(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject)
    {
        const suitcase = s as Phaser.Physics.Arcade.Image
        suitcase.disableBody(true, true)
        this.score += 100
        this.scoreText?.setText(`Score: ${this.score}`)

        //create Level completed text
        this.levelCompleteText = this.add.text(500, 300, 'Level Completed', {
            fontSize: '60px',
            fill: '#fff',
                })

            //pause animations
            this.physics.pause();
            this.anims.pauseAll()

        //go to next level
        setTimeout(() => {
            this.scene.start('mole-world')
        }, 3000);

    }

    update() {

    }

}