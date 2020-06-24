import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class Credits extends Phaser.Scene
{

    //set world bounds
    private widthBounds = 1500
    private heigthBounds = 750
    private door : Phaser.Physics.Arcade.StaticGroup


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    // private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private back?: Phaser.Physics.Arcade.StaticGroup
    private level1?: Phaser.Physics.Arcade.StaticGroup
    private level2?: Phaser.Physics.Arcade.StaticGroup
    private level3?: Phaser.Physics.Arcade.StaticGroup
    private level4?: Phaser.Physics.Arcade.StaticGroup

	constructor()
	{
		super('credits')
    }

    create()
    {

        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heigthBounds)

        //create background
        this.add.image(0, 0, "credits").setDisplaySize(this.widthBounds, this.heigthBounds).setOrigin(0)

        //restart animations
        this.anims.resumeAll()
        
        //add music
        this.sound.stopAll()
		this.sound.mute = false

        // add music
        this.sound.play("menuMusic", {
            loop: true,
            volume: 0.5
        })

        //create player
        this.player = new Worm(this, 0, this.heigthBounds - 200)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heigthBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.2)

        this.platforms = this.physics.add.staticGroup()
        this.door = this.physics.add.staticGroup()

		this.platforms.create(70.93248476262642, 756.9023252217256, "stoneground").visible = false;
		this.platforms.create(206.84425354003906, 757.6303100585938, "stoneground").visible = false;
		this.platforms.create(341.5343194722114, 758.751953125, "stoneground").visible = false;
		this.platforms.create(476.7969698590749, 759.3040771484375, "stoneground").visible = false;
		this.platforms.create(610.9569110585853, 760.1533813476562, "stoneground").visible = false;
		this.platforms.create(747.4270537270346, 760.1533203125, "stoneground").visible = false;
		this.platforms.create(882.8937756750084, 761.1567993164062, "stoneground").visible = false;
		this.platforms.create(1017.3570556640625, 761.0223804039238, "stoneground").visible = false;
		this.platforms.create(1154.015380859375, 761.1834017852224, "stoneground").visible = false;
		this.platforms.create(1288.2027179029114, 762.0859375, "stoneground").visible = false
		this.platforms.create(1417.262925654531, 762.754638671875, "stoneground").visible = false;
		this.door.create(1420.3618385545221, 672.9266190035758, "stonegroundsmall").visible = false;
        this.door.create(1415.2567916409555, 721.2949011771092, "stonegroundsmall").visible = false;
        
        this.physics.add.collider(this.player, this.door, this.handleDoor, undefined, this)
        this.physics.add.collider(this.player, this.platforms)
        
    }

    handleDoor() {
        location.reload()
    }

    update() {

    }
}