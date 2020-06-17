import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class IceWorld extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
	private player? : Worm
	private hpText?: Phaser.GameObjects.Text
	private suitcase?: Phaser.Physics.Arcade.Group
	private levelCompleteText?: Phaser.GameObjects.Text
	private damageBlock2?: Phaser.Physics.Arcade.StaticGroup

    // private score = 0
    // private scoreText?: Phaser.GameObjects.Text
    // private levelCompleteText?: Phaser.GameObjects.Text

    private widthBounds = 2500
    private heightBounds = 750

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
		this.damageBlock2 = this.physics.add.staticGroup()
		
		// stonegroundsmall
		this.platforms.create(87.68258666992188, 437.1197070482576, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1
		this.platforms.create(127.17024993896484, 436.7888965013826, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1
		this.platforms.create(253.20614624023438, 584.2630786302889, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1
		this.platforms.create(266.11895751953125, 584.6524829271639, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1
		this.platforms.create(399.3536682128906, 582.9200610521639, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1
		this.platforms.create(514.3336181640625, 530.4881762865389, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1
		this.platforms.create(583.3521118164062, 530.1925830248201, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1
		this.platforms.create(676.2096557617188, 530.2124194506014, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1
		this.platforms.create(713.42529296875, 529.1488208177889, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1
		this.platforms.create(700.9304809570312, 396.5183581713045, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_1
		this.platforms.create(742.3392333984375, 399.7955493334139, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2
		this.platforms.create(696.7280883789062, 329.8628100756014, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1
		this.platforms.create(737.2575073242188, 333.1306933763826, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1
		this.platforms.create(737.816162109375, 281.1664599779451, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1
		this.platforms.create(739.8609008789062, 226.3717059496248, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2
		this.platforms.create(736.68212890625, 579.6470507982576, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1
		this.platforms.create(736.68212890625, 650.1044482591951, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1
		this.platforms.create(738.9549560546875, 716.0161914232576, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_1
		this.platforms.create(775.0078735351562, 367.3545703295076, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2
		this.platforms.create(827.4547729492188, 367.47325319083575, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1
		this.platforms.create(852.9388427734375, 378.157884538492, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1
		this.platforms.create(770.79296875, 559.0345630052889, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1
		this.platforms.create(813.3596801757812, 559.2235278490389, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1
		this.platforms.create(850.772705078125, 560.0211352709139, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1
		this.platforms.create(927.0902099609375, 588.5276660326326, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1_1
		this.platforms.create(944.9033813476562, 588.5276049974764, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1_1_1
		this.platforms.create(765.9066772460938, 641.5285815599764, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1_1_1_1
		this.platforms.create(783.9618530273438, 641.5285815599764, "stonegroundsmall").visible = false;
		
		// stoneground
		this.platforms.create(882.178466796875, 699.7669848802889, "stoneground").visible = false;
		
		// stoneground_1
		this.platforms.create(969.8028564453125, 700.1140918138826, "stoneground").visible = false;
		
		// stonegroundsmall_2
		this.platforms.create(1265.735595703125, 674.4177417162264, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1_1
		this.platforms.create(734.7527465820312, 150.34761232169512, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1_1_1
		this.platforms.create(734.7527465820312, 75.26835054190995, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1_1_1_1
		this.platforms.create(768.2340087890625, 212.2372760179842, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1_1_1_1_1
		this.platforms.create(790.5548706054688, 213.25184816153887, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_2
		this.platforms.create(548.993896484375, 530.0380420091951, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_3
		this.platforms.create(739.3008422851562, 530.3702563646639, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1_1_2
		this.platforms.create(919.3395591636292, 428.2478023228534, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_1_1_1_1_1_2_1
		this.platforms.create(935.371761934514, 430.08820925270714, "stonegroundsmall").visible = false;
		
		// stoneground_1_1
		this.platforms.create(1111.384521484375, 529.1120166185701, "stoneground").visible = false;
		
		// stoneground_1_1_1
		this.platforms.create(1228.515380859375, 529.8125171068514, "stoneground").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2
		this.platforms.create(990.6298779208906, 322.57577636938674, "stonegroundsmall").visible = false;
		
		// stoneground_1_1_2
		this.platforms.create(1112.2235107421875, 278.003343522867, "stoneground").visible = false;
		
		// stoneground_1_1_2_1
		this.platforms.create(1159.6793212890625, 278.0033740404451, "stoneground").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1
		this.platforms.create(1379.0205078125, 272.5060595873201, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_1
		this.platforms.create(1443.005615234375, 509.1303882006014, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_1_1
		this.platforms.create(1474.3946533203125, 509.1303882006014, "stonegroundsmall").visible = false;
		
		// stoneground_1_1_2_2
		this.platforms.create(1127.908935546875, 167.47381776603106, "stoneground").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_2_1_1_1_1_1_1_1_1
		this.platforms.create(817.641357421875, 232.5321063402498, "stonegroundsmall").visible = false;
		
		// stoneground_1_1_1_1
		this.platforms.create(1685.3604736328125, 501.2148608568514, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1
		this.platforms.create(1799.6951904296875, 502.2177905443514, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1
		this.platforms.create(1839.8126220703125, 293.60704225333575, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1
		this.platforms.create(1952.062744140625, 294.775804460367, "stoneground").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_2
		this.platforms.create(1584.7874755859375, 215.629320085367, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_2_1
		this.platforms.create(1996.5269775390625, 445.9544848802889, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_2_1_1
		this.platforms.create(2147.70556640625, 391.7080249193514, "stonegroundsmall").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1
		this.platforms.create(2283.094970703125, 205.3237017992342, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1_1
		this.platforms.create(2359.617919921875, 206.78236573966387, "stoneground").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_2_1_1_2_1_2_1_1_2_2
		this.platforms.create(2446.198486328125, 206.4816913011873, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1
		this.platforms.create(1057.47900390625, 732.7072314623201, "stonegroundsmall").visible = false;

		// stoneground_2
		this.damageBlock2.create(72.57952117919922, 739.8051417264048, "stoneground").visible = false;
		
		// stoneground_2_1
		this.damageBlock2.create(209.0404510498047, 741.9808931662801, "stoneground").visible = false;
		
		// stoneground_2_1_1
		this.damageBlock2.create(342.9276480157877, 742.4073334303993, "stoneground").visible = false;
		
		// stoneground_2_1_1_1
		this.damageBlock2.create(477.32035547405155, 741.3057594158377, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1
		this.damageBlock2.create(610.6115122851323, 740.2041454385655, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1
		this.damageBlock2.create(1142.8244016994652, 751.7023207537055, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1
		this.damageBlock2.create(1280.1826319891936, 753.3047557799996, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1
		this.damageBlock2.create(1415.1639575277732, 753.3047628688395, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1
		this.damageBlock2.create(1556.0139833596036, 753.3047234122098, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(1692.4624696877286, 754.7719367440402, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(1823.0422785491571, 757.7062952837051, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(1959.7367926387055, 757.8334298412182, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(2096.7708225956635, 758.7916817943432, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(2240.5128358515944, 758.7916765769675, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(2386.1713251048855, 756.8751447618272, "stoneground").visible = false;
		
		// stoneground_2_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1
		this.damageBlock2.create(2463.5244134223108, 758.9656074025555, "stoneground").visible = false;

        //create player
		this.player = new Worm(this, 70, this.heightBounds - 500)

		this.physics.add.collider(this.player, this.platforms)
		
		//create suitcase
		this.suitcase = this.physics.add.group({
			key: 'suitcase',
			setXY: {x: 4928, y: this.heightBounds - 600}
		})

		//create hp
        this.hpText = this.add.text(16, this.heightBounds - 100, `Health: ${this.player.getHp()}`, {
            fontSize: '20px',
            fill: '#fff',
        })
		
		this.physics.add.collider(this.suitcase, this.platforms)
		this.physics.add.collider(this.player, this.damageBlock2, this.handleDamageBlock2, undefined, this)
		this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

	}
	handleDamageBlock2() {
        this.player?.handleHit() 
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
		
		this.hpText?.setX(this.player?.body.position.x)
        this.hpText?.setY(this.player?.body.bottom)

        if(this.player?.getHp) {
            this.hpText?.setText( `Health: ${this.player?.getHp()}`)
        }

		let hp = this.player?.getHp()
        
        if(hp == 0) {
            this.player?.destroy()
            this.sound.stopAll()
            this.scene.start('death')
        }
    }
}