import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class IceWorld extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
	private suitcase?: Phaser.Physics.Arcade.Group
	private levelCompleteText?: Phaser.GameObjects.Text

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
		this.add.image(0, 0, "sky").setDisplaySize(this.widthBounds, this.heightBounds).setOrigin(0)
		
		//restart animations
		this.anims.resumeAll()

        //create platforms
        this.platforms = this.physics.add.staticGroup()
		// iceground1
		this.platforms.create(64, 2448, "iceground1");
		
		// iceground2
		this.platforms.create(192, 2448, "iceground2");
		
		// ground2_1
		this.platforms.create(320, 2448, "iceground2");
		
		// stoneground5
		this.platforms.create(448, 2448, "stoneground5");
		
		// ground1_1
		this.platforms.create(448, 2320, "iceground1");
		
		// ground5_1
		this.platforms.create(576, 2448, "stoneground5");
		
		// ground2_2
		this.platforms.create(576, 2320, "iceground2");
		
		// ice
		this.platforms.create(704, 2448, "ice");
		
		// ice_1
		this.platforms.create(832, 2448, "ice");
		
		// ground1_2
		this.platforms.create(848, 2160, "iceground1");
		
		// iceground3
		this.platforms.create(976, 2160, "iceground3");
		
		// ice_2
		this.platforms.create(960, 2448, "ice");
		
		// ice_3
		this.platforms.create(1088, 2448, "ice");
		
		// ground5_2
		this.platforms.create(1216, 2448, "stoneground5");
		
		// ground5_2_1
		this.platforms.create(1216, 2320, "stoneground5");
		
		// ground1_3
		this.platforms.create(1216, 2192, "iceground1");
		
		// ground5_2_2
		this.platforms.create(1344, 2448, "stoneground5");
		
		// ground5_2_1_1
		this.platforms.create(1344, 2320, "stoneground5");
		
		// ground2_3
		this.platforms.create(1344, 2192, "iceground2");
		
		// ground5_2_2_1
		this.platforms.create(1472, 2448, "stoneground5");
		
		// ground5_2_1_1_1
		this.platforms.create(1472, 2320, "stoneground5");
		
		// ground2_3_1
		this.platforms.create(1472, 2192, "iceground2");
		
		// ground5_2_2_2
		this.platforms.create(1600, 2448, "stoneground5");
		
		// ground5_2_1_1_2
		this.platforms.create(1600, 2320, "stoneground5");
		
		// ground2_3_2
		this.platforms.create(1600, 2192, "iceground2");
		
		// ground5_2_2_2_1
		this.platforms.create(1728, 2448, "stoneground5");
		
		// ground3_1
		this.platforms.create(1728, 2320, "iceground3");
		
		// ground1_3_1
		this.platforms.create(1952, 2048, "iceground1");
		
		// ground2_3_3
		this.platforms.create(2080, 2048, "iceground2");
		
		// ice_4
		this.platforms.create(1856, 2448, "ice");
		
		// ice_1_1
		this.platforms.create(1984, 2448, "ice");
		
		// ice_2_1
		this.platforms.create(2112, 2448, "ice");
		
		// ice_3_1
		this.platforms.create(2240, 2448, "ice");
		
		// ground3_2
		this.platforms.create(2208, 2048, "iceground3");
		
		// ground1_3_1_1
		this.platforms.create(2464, 1900, "iceground1");
		
		// ground2_3_3_1
		this.platforms.create(2592, 1900, "iceground2");
		
		// ground3_2_1
		this.platforms.create(2720, 1900, "iceground3");
		
		// ice_4_1
		this.platforms.create(2368, 2448, "ice");
		
		// ice_1_1_1
		this.platforms.create(2496, 2448, "ice");
		
		// ice_2_1_1
		this.platforms.create(2624, 2448, "ice");
		
		// ice_3_1_1
		this.platforms.create(2752, 2448, "ice");
		
		// ground5_2_3
		this.platforms.create(2880, 2448, "stoneground5");
		
		// ground5_2_1_2
		this.platforms.create(2880, 2320, "stoneground5");
		
		// ground1_3_2
		this.platforms.create(2880, 2192, "iceground1");
		
		// ground2_3_4
		this.platforms.create(3008, 2192, "iceground2");
		
		// ground5_2_1_1_3
		this.platforms.create(3008, 2320, "stoneground5");
		
		// ground5_2_2_3
		this.platforms.create(3008, 2448, "stoneground5");
		
		// ground5_2_2_1_1
		this.platforms.create(3136, 2448, "stoneground5");
		
		// ground5_2_1_1_1_1
		this.platforms.create(3136, 2320, "stoneground5");
		
		// ground2_3_1_1
		this.platforms.create(3136, 2192, "iceground2");
		
		// ground2_3_2_1
		this.platforms.create(3264, 2192, "iceground2");
		
		// ground5_2_1_1_2_1
		this.platforms.create(3264, 2320, "stoneground5");
		
		// ground5_2_2_2_2
		this.platforms.create(3264, 2448, "stoneground5");
		
		// ground5_2_3_1
		this.platforms.create(3392, 2448, "stoneground5");
		
		// ground5_2_1_2_1
		this.platforms.create(3392, 2320, "stoneground5");
		
		// ground5_2_1_1_3_1
		this.platforms.create(3520, 2320, "stoneground5");
		
		// ground5_2_2_3_1
		this.platforms.create(3520, 2448, "stoneground5");
		
		// ground5_2_2_1_1_1
		this.platforms.create(3648, 2448, "stoneground5");
		
		// ground5_2_1_1_1_1_1
		this.platforms.create(3648, 2320, "stoneground5");
		
		// ground5_2_1_1_2_1_1
		this.platforms.create(3776, 2320, "stoneground5");
		
		// ground5_2_2_2_2_1
		this.platforms.create(3776, 2448, "stoneground5");
		
		// ground5_2_1_2_1_1
		this.platforms.create(3392, 2080, "stoneground5");
		
		// ground5_2_3_1_1
		this.platforms.create(3392, 2208, "stoneground5");
		
		// ground5_2_2_3_1_1
		this.platforms.create(3520, 2208, "stoneground5");
		
		// ground5_2_1_1_3_1_1
		this.platforms.create(3520, 2080, "stoneground5");
		
		// ground5_2_1_1_1_1_1_1
		this.platforms.create(3648, 2080, "stoneground5");
		
		// ground5_2_2_1_1_1_1
		this.platforms.create(3648, 2208, "stoneground5");
		
		// ground5_2_2_2_2_1_1
		this.platforms.create(3776, 2208, "stoneground5");
		
		// ground5_2_1_1_2_1_1_1
		this.platforms.create(3776, 2080, "stoneground5");
		
		// ground5_2_1_2_1_1_1
		this.platforms.create(3392, 1824, "stoneground5");
		
		// ground5_2_3_1_1_1
		this.platforms.create(3392, 1952, "stoneground5");
		
		// ground5_2_2_3_1_1_1
		this.platforms.create(3520, 1952, "stoneground5");
		
		// ground5_2_1_1_3_1_1_1
		this.platforms.create(3520, 1824, "stoneground5");
		
		// ground5_2_1_1_1_1_1_1_1
		this.platforms.create(3648, 1824, "stoneground5");
		
		// ground5_2_2_1_1_1_1_1
		this.platforms.create(3648, 1952, "stoneground5");
		
		// ground5_2_2_2_2_1_1_1
		this.platforms.create(3776, 1952, "stoneground5");
		
		// ground5_2_1_1_2_1_1_1_1
		this.platforms.create(3776, 1824, "stoneground5");
		
		// ground1_3_1_1_1
		this.platforms.create(2944, 1796, "iceground1");
		
		// ground2_3_3_1_1
		this.platforms.create(3072, 1796, "iceground2");
		
		// ground3_2_1_1
		this.platforms.create(3200, 1796, "iceground3");
		
		// ground1_3_1_1_2
		this.platforms.create(3392, 1696, "iceground1");
		
		// ground2_3_3_1_2
		this.platforms.create(3520, 1696, "iceground2");
		
		// ground3_2_1_2
		this.platforms.create(3776, 1696, "iceground3");
		
		// ground2_3_3_1_2_1
		this.platforms.create(3648, 1696, "iceground2");
		
		// ice_3_1_1_1
		this.platforms.create(4800, 2448, "ice");
		
		// ice_2_1_1_1
		this.platforms.create(4672, 2448, "ice");
		
		// ice_1_1_1_1
		this.platforms.create(4544, 2448, "ice");
		
		// ice_4_1_1
		this.platforms.create(4416, 2448, "ice");
		
		// ice_3_1_2
		this.platforms.create(4288, 2448, "ice");
		
		// ice_2_1_2
		this.platforms.create(4160, 2448, "ice");
		
		// ice_1_1_2
		this.platforms.create(4032, 2448, "ice");
		
		// ice_4_2
		this.platforms.create(3904, 2448, "ice");
		
		// ice_3_1_1_1_1
		this.platforms.create(4928, 2448, "ice");
		
		// ground1_3_1_1_1_1
		this.platforms.create(4096, 1936, "iceground1");
		
		// ground2_3_3_1_1_1
		this.platforms.create(4224, 1936, "iceground2");
		
		// ground3_2_1_1_1
		this.platforms.create(4352, 1936, "iceground3");
		
		// ground1_3_1_1_1_1_1
		this.platforms.create(4672, 2160, "iceground1");
		
		// ground2_3_3_1_1_1_1
		this.platforms.create(4800, 2160, "iceground2");
		
		// ground3_2_1_1_1_1
		this.platforms.create(4928, 2160, "iceground3");
		
		// ice_3_1_1_1_1_1
		this.platforms.create(5056, 2448, "ice");

        //create player
		this.player = new Worm(this, 0, this.heightBounds - 200)

		this.physics.add.collider(this.player, this.platforms)
		
		//create suitcase
		this.suitcase = this.physics.add.group({
			key: 'suitcase',
			setXY: {x: 4928, y: this.heightBounds - 600}
		})
		
		this.physics.add.collider(this.suitcase, this.platforms)
		this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.2)

	}
	
	    //function for collecting suitcase
		private handleCollectSuitcase(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject)
		{
			const suitcase = s as Phaser.Physics.Arcade.Image
			suitcase.disableBody(true, true)
			// this.score += 100
			// this.scoreText?.setText(`Score: ${this.score}`)
	
			//create Level completed text
			this.levelCompleteText = this.add.text(500, 300, 'Level Completed', {
				fontSize: '60px',
				fill: '#fff',
					}).setScrollFactor(0)
	
				//pause animations
				this.physics.pause()
				this.anims.pauseAll()
				this.sound.mute = true
	
			//go to next level
			setTimeout(() => {
				this.scene.start('menu')
			}, 2000);
	
		}

    update() {

    }
}