import Phaser from 'phaser'
import Worm from '~/players/worm'

export default class Level extends Phaser.Scene
{

    //set world bounds
    private widthBounds = 1500
    private heightBounds = 750


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    private bkey
    // private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private play?: Phaser.Physics.Arcade.StaticGroup
    private back?: Phaser.Physics.Arcade.StaticGroup
    private level1?: Phaser.Physics.Arcade.StaticGroup
    private level2?: Phaser.Physics.Arcade.StaticGroup
    private level3?: Phaser.Physics.Arcade.StaticGroup
    private level4?: Phaser.Physics.Arcade.StaticGroup

	constructor()
	{
		super('levels')
    }

    create()
    {

        //set world bounderies
        this.physics.world.setBounds(0, 0, this.widthBounds, this.heightBounds)

        //create background
        this.add.image(0, 0, "levelselect").setDisplaySize(this.widthBounds, this.heightBounds).setOrigin(0)

        // add music
        this.sound.play("menuMusic", {
            loop: true,
            volume: 0.5
        })

        //create platform
        this.platforms = this.physics.add.staticGroup()
		// stoneground
		this.platforms.create(68.87357232506562, 730.6227635836152, "stoneground").visible = false;
		
		// stoneground_1
		this.platforms.create(204.7926961762617, 730.6038049647381, "stoneground").visible = false;
		
		// stoneground_1_1
		this.platforms.create(339.48828367286086, 730.5807953079312, "stoneground").visible = false;
		
		// stoneground_1_1_1
		this.platforms.create(474.46338461251287, 731.3988591192121, "stoneground").visible = false;
		
		// stoneground_1_1_1_1
		this.platforms.create(610.2565316222599, 732.2168603330172, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1
		this.platforms.create(744.348679651128, 732.7830662794954, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1
		this.platforms.create(880.0269904404903, 732.7830449240794, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1
		this.platforms.create(1015.705344458725, 732.7830766678716, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1
		this.platforms.create(1150.7211803755342, 733.3891630977741, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1_1
		this.platforms.create(1284.6255593395351, 733.8115375350808, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1_1_1
		this.platforms.create(1421.1401606764591, 733.8115455209838, "stoneground").visible = false;
		
		// stoneground_1_1_1_1_1_1_1_1_1_1_1
        this.platforms.create(1510.5079626024735, 735.2189451658236, "stoneground").visible = false;
        
        //level 1 button
        this.level1 = this.physics.add.staticGroup()

		this.level1.create(119.81754791049568, 510.0365025484618, "stoneground").visible = false;
		this.level1.create(255.14854384291175, 509.3342759682443, "stoneground").visible = false;
		this.level1.create(256.4648582324488, 475.43644512226246, "stoneground").visible = false;
		this.level1.create(121.13387983889412, 476.1386545949187, "stoneground").visible = false;
		this.level1.create(257.2531551678833, 445.4802240918148, "stoneground").visible = false;
		this.level1.create(121.92219203311762, 446.18243356447107, "stoneground").visible = false;
		this.level1.create(256.16074040447637, 412.1090267501491, "stoneground").visible = false;
        this.level1.create(120.82980778728889, 412.81123622280535, "stoneground").visible = false;
        
        //level 2 button
        this.level2 = this.physics.add.staticGroup()

		this.level2.create(502.52602730275544, 510.0364990234375, "stoneground").visible = false;
		this.level2.create(637.8570209550992, 509.33428955078125, "stoneground").visible = false;
		this.level2.create(639.1733203935758, 475.4364318847656, "stoneground").visible = false;
		this.level2.create(503.8423572588101, 476.1386413574219, "stoneground").visible = false;
		this.level2.create(639.9616199541226, 445.480224609375, "stoneground").visible = false;
		this.level2.create(504.63067207814606, 446.18243408203125, "stoneground").visible = false;
		this.level2.create(638.8692127275601, 412.1090393066406, "stoneground").visible = false;
        this.level2.create(503.53828773976716, 412.8112487792969, "stoneground").visible = false;
        
        //level 3 button
        this.level3 = this.physics.add.staticGroup()

		this.level3.create(883.7511419491753, 508.55313283489653, "stoneground").visible = false;
		this.level3.create(1019.082105083941, 507.8509233622403, "stoneground").visible = false;
		this.level3.create(1020.3984502987847, 473.95306569622466, "stoneground").visible = false;
		this.level3.create(885.067456646441, 474.6552751688809, "stoneground").visible = false;
		this.level3.create(1021.1867193417535, 443.99685842083403, "stoneground").visible = false;
		this.level3.create(885.855786724566, 444.6990678934903, "stoneground").visible = false;
		this.level3.create(1020.094312115191, 410.62567311809966, "stoneground").visible = false;
        this.level3.create(884.7634100155816, 411.3278825907559, "stoneground").visible = false;
        
        //level 4 button
        this.level4 = this.physics.add.staticGroup()

		this.level4.create(1243.1258016522065, 510.7180385853484, "stoneground").visible = false;
		this.level4.create(1378.456734269394, 510.01582911269213, "stoneground").visible = false;
		this.level4.create(1379.7730794842378, 476.1179714466765, "stoneground").visible = false;
		this.level4.create(1244.442085831894, 476.82018091933276, "stoneground").visible = false;
		this.level4.create(1380.5613485272065, 446.1617641712859, "stoneground").visible = false;
		this.level4.create(1245.230415910019, 446.86397364394213, "stoneground").visible = false;
		this.level4.create(1379.468941300644, 412.7905788685515, "stoneground").visible = false;
		this.level4.create(1244.1380697186128, 413.49278834120776, "stoneground").visible = false;


        //create player
        this.player = new Worm(this, 0, this.heightBounds - 100)

        this.player.setGravity(0, -200)
        
        //set collisions
        this.physics.add.collider(this.player, this.platforms)
        // this.physics.add.collider(this.player, this.back, this.handleBack, undefined, this)
        this.physics.add.collider(this.player, this.level1, this.handleLevel1, undefined, this)
        this.physics.add.collider(this.player, this.level2, this.handleLevel2, undefined, this)
        this.physics.add.collider(this.player, this.level3, this.handleLevel3, undefined, this)
        this.physics.add.collider(this.player, this.level4, this.handleLevel4, undefined, this)

        //create key
        this.bkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.8)
    }

    private handleBack()
    {
        // this.player?.destroy()
        // this.scene.stop()
        // this.sound.stopAll()
        // this.scene.switch('menu')
        location.reload()
    }

    private handleLevel1()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.sound.play("gamemusic", {
            loop: true,
            volume: 0.2
        })
        this.scene.start('wurmWorld')
    }

    private handleLevel2()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.sound.play("gamemusic", {
            loop: true,
            volume: 0.2
        })
        this.scene.start('mole-world')
    }

    private handleLevel3()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.sound.play("gamemusic", {
            loop: true,
            volume: 0.2
        })
        this.scene.start('aal-world')
    }

    private handleLevel4()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('iceWorld')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.bkey))
        {
            console.log("b pressed")
            this.handleBack()
        } 
    }
}