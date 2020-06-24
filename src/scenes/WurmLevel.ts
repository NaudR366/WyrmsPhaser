import Phaser from 'phaser'
import Worm from '~/players/worm'
import Mole from '~/enemies/mole'

export default class WurmLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private lava?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    private hpText?: Phaser.GameObjects.Text
    // private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group

    //create enemy
    private mole: Mole[] = []
    private colliderMole: Phaser.Physics.Arcade.Collider

    // private score = 0
    // private scoreText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    private widthBounds = 1500
    private heightBounds = 750

    constructor()
	{
        super('wurmWorld')
        
    }
    
    create() {

        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heightBounds)

        //set background sound
        this.sound.play("lava", {
            loop: true,
            volume: 0.5
        })

        this.sound.play("gamemusic", {
            loop: true,
            volume: 0.2
        })

        // //add lava
        this.lava = this.physics.add.staticGroup()

        // //create platforms
        this.platforms = this.physics.add.staticGroup()

        this.add.image(0, 0, "lavabg").setOrigin(0, 0);
		
		// stoneground
		this.platforms.create(67.1582665740762, 677.285413781711, "stoneground").visible = false
		
		// stoneground_1
		this.platforms.create(158.06479093273256, 677.5800701255883, "stoneground").visible = false
		
		// stoneground_1_1
		this.platforms.create(157.59493752464041, 708.9313181356833, "stoneground").visible = false
		
		// stoneground_1_1_1
		this.platforms.create(157.0183694466333, 737.6964128694597, "stoneground").visible = false
		
		// stoneground_1_1_1_1
		this.platforms.create(532.8529448881952, 694.1148715764208, "stoneground").visible = false
		
		// stoneground_1_1_1_1_1
		this.platforms.create(597.9671131707776, 666.9839463643647, "stoneground").visible = false
		
		// stoneground_1_1_1_1_2
		this.platforms.create(532.8529438152912, 725.99365234375, "stoneground").visible = false
		
		// stonegroundsmall
		this.platforms.create(167.53928234391134, 662.2899492483393, "stonegroundsmall").visible = false
		
		// stonegroundsmall_1
		this.platforms.create(201.45754802771182, 661.9969130956325, "stonegroundsmall").visible = false
		
		// stonegroundsmall_2
		this.platforms.create(660.4637287753798, 649.769010348779, "stonegroundsmall").visible = false
		
		// stonegroundsmall_2_1
		this.platforms.create(686.482979155465, 650.1240559938263, "stonegroundsmall").visible = false
		
		// stoneground_1_1_1_1_3
		this.platforms.create(637.3199234252189, 696.3607249180396, "stoneground").visible = false
		
		// stoneground_1_1_1_1_3_1
		this.platforms.create(637.3199385323849, 727.3683831970174, "stoneground").visible = false
		
		// stonegroundsmall_2_1_1
		this.platforms.create(685.3079402247866, 674.2124065281265, "stonegroundsmall").visible = false
		
		// stoneground_2
		this.platforms.create(1203.9968613898766, 695.0586389052869, "stoneground").visible = false
		
		// stoneground_2_1
		this.platforms.create(1203.5193452239018, 725.4039306640625, "stoneground").visible = false
		
		// stoneground_2_2
		this.platforms.create(1267.928460071486, 668.3273855632193, "stoneground").visible = false
		
		// stoneground_2_2_1
		this.platforms.create(1434.4005273831601, 678.099900737872, "stoneground").visible = false
		
		// stonegroundsmall_3
		this.platforms.create(1329.6197999503838, 649.9298050756648, "stonegroundsmall").visible = false
		
		// stonegroundsmall_3_1
		this.platforms.create(1354.0794853534335, 650.8905170734032, "stonegroundsmall").visible = false
		
		// stonegroundsmall_4
		this.platforms.create(882.3143142705977, 633.6366966244668, "stonegroundsmall").visible = false
		
		// stonegroundsmall_4_1
		this.platforms.create(917.3978623846077, 633.41796875, "stonegroundsmall").visible = false
		
		// stonegroundsmall_4_1_1
		this.platforms.create(951.900604236484, 634.4710472104043, "stonegroundsmall").visible = false
		
		// lava6
		this.lava.create(291.39278400238607, 713.2518720002512, "stoneground").visible = false
		
		// lava5
		this.lava.create(401.8497265735711, 714.0978598282505, "stoneground").visible = false
		
		// lava4
		this.lava.create(771.2364462133701, 711.5642331476189, "stoneground").visible = false
		
		// lava3
		this.lava.create(905.2825124320989, 712.4586124549442, "stoneground").visible = false
		
		// lava2
		this.lava.create(1040.0063341248424, 712.5028441532422, "stoneground").visible = false
		
		// lava
        this.lava.create(1175.5370709192957, 713.1575540300889, "stoneground").visible = false
    
        //this.plugins.installScenePlugin('WeaponPlugin',WeaponPlugin.WeaponPlugin,'weapons',this);

        //create player
        this.player = new Worm(this, 0, this.heightBounds - 200)

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.lava, this.handleLava, undefined, this)

        //create enemy
        this.mole.push(new Mole(this, 580, this.heightBounds - 200, 600))
        this.mole.push(new Mole(this, 1240, this.heightBounds - 200, 1260))
        this.mole[0].setScale(0.7)
        this.mole[1].setScale(0.7)
        this.physics.add.collider(this.mole, this.platforms)
        this.physics.add.collider(this.player, this.platforms)

        //create suitcase
        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 1450, y: this.heightBounds - 400,}
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)
        this.colliderMole = this.physics.add.collider(this.player, this.mole, this.handleHitMole, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

        //create hp
        this.hpText = this.add.text(16, this.heightBounds - 100, `Health: ${this.player.getHp()}`, {
            fontSize: '20px',
            fill: '#fff',
        })
        

        //create score
        // this.scoreText = this.add.text(16, 16, 'Score: 0', {
        //     fontSize: '32px',
        //     fill: '#fff',
        // })

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
            // this.sound.stopAll()
            this.sound.stopByKey('lava')
            this.sound.mute = true

        //go to next level
        setTimeout(() => {
            this.scene.start('mole-world')
        }, 2000);

    }

    handleLava() {
            this.player?.handleHit() 
    }

    handleHitMole() {
        this.player?.handleHit()
        this.colliderMole.active = false
        if(this.player && this.player.stealthMode == false) { 
            this.player.setSpriteColor(0xff0000)
        }
        setTimeout(() => {
            this.colliderMole.active = true
            if(this.player && this.player.stealthMode == false) {
                this.player.clearTint()
            }
        }, 1000)
    }

    update() {
        //update player life
        // let hp = this.player?.getHp()
        
        // if(hp == 0) {
        //     this.player?.destroy()
        //     this.sound.stopAll()
        //     this.scene.start('death')
        // }

        //update player life
        let hp = this.player?.getHp()

        if(this.player?.getHp) {
            this.hpText?.setText( `Health: ${this.player?.getHp()}`)
        }

        //hp text update
        this.hpText?.setX(this.player?.body.position.x)
        this.hpText?.setY(this.player?.body.bottom)
        
        if(hp == 0) {
            this.player?.destroy()
            this.sound.stopAll()
            this.scene.start('death')
        }
    }

}