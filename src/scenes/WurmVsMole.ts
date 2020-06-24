import Phaser, { Loader } from 'phaser'
import Worm from '~/players/worm'
import Mole from '~/enemies/mole'
import Healthbar from '~/healthbar/healthbar'

export default class WurmVsMole extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private damageBlock?: Phaser.Physics.Arcade.StaticGroup
    private player?: Worm
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private suitcase?: Phaser.Physics.Arcade.Group
    private mole: Mole[] = []
    private moleX?
    private moleY?
    private moleLives = 1
    private fadeCheck = false

    // private score = 0
    private hpText?: Phaser.GameObjects.Text
    private levelCompleteText?: Phaser.GameObjects.Text

    private widthBounds = 1500
    private heightBounds = 750
    private colliderMole: Phaser.Physics.Arcade.Collider
    // private healthbar: Healthbar

    // private startHp: number = this.player?.getX()


    constructor() {
        super('mole-world')
    }

    create() {

        this.physics.world.setBounds(0, 0, this.widthBounds, this.heightBounds)

        //restart animations
        this.anims.resumeAll()

        //unmute sound
        this.sound.mute = false

        this.platforms = this.physics.add.staticGroup()
        this.damageBlock = this.physics.add.staticGroup()

        //add music
        // this.sound.play("gamemusic", {
        //     loop: true,
        //     volume: 0.3
        // })


        // cristal_Level
        this.add.image(0, 0, "cave").setOrigin(0);

      // stoneground
		this.platforms.create(52.98955268179842, 611.1715542031992, "stoneground").visible = false;
		
		// stoneground_1
		this.platforms.create(179.6962011702972, 619.5092424580542, "stoneground").visible = false;
		
		// stonegroundsmall
		this.platforms.create(263.8553562717727, 619.5092424580542, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1
		this.platforms.create(295.17576985729676, 627.842159425406, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1
		this.platforms.create(297.37570538694195, 618.4406093103237, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1
		this.platforms.create(327.01219482284915, 617.4362548663773, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1
		this.platforms.create(349.82817992068385, 618.0484619140625, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1
		this.platforms.create(350.3083984429784, 631.65966796875, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1
		this.platforms.create(350.91184203786, 664.4905074282141, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1
		this.platforms.create(352.43885050560914, 685.1051880040592, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1
		this.platforms.create(351.6753462717346, 713.3549784526524, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1
		this.platforms.create(371.5265592584659, 728.6251383568729, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1_1_1_1_1_1_1_1
		this.platforms.create(399.0128572769963, 728.6251220703125, "stonegroundsmall").visible = false;
		
		// stoneground_2
		this.platforms.create(480.81049719310204, 728.3986039472449, "stoneground").visible = false;
		
		// stonegroundsmall_2
		this.platforms.create(660.408704277341, 727.2320815786645, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1
		this.platforms.create(694.3960461334897, 728.5190374279367, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1
		this.platforms.create(726.3354548457733, 729.298053166083, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1
		this.platforms.create(825.3540693232383, 713.86325934084, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1
		this.platforms.create(850.9771118164062, 702.794424830086, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1
		this.platforms.create(882.05908203125, 702.794420448254, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1
		this.platforms.create(902.1621923193162, 707.160360954137, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1
		this.platforms.create(986.1932933587083, 690.1503270992761, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1_1
		this.platforms.create(1020.2644703131667, 686.9728954094895, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1_1_1
		this.platforms.create(1053.9402590348698, 681.765996192073, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1_1_1_1
		this.platforms.create(1071.849853515625, 648.0552884391208, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1_1_1_2
		this.platforms.create(1108.1639404296875, 646.3662860184612, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_2_1_1_1_1_1_1_1_1_1_3
		this.platforms.create(1147.0532418404205, 646.3662719726562, "stonegroundsmall").visible = false;
		
		// stoneground_3
		this.platforms.create(1231.893494016632, 646.3567599735807, "stoneground").visible = false;
		
		// stoneground_3_1
		this.platforms.create(1284.7672498483848, 646.9002497306128, "stoneground").visible = false;
		
		// stoneground_4
        this.platforms.create(1419.75891669735, 678.3147584438677, "stoneground").visible = false;
        
        // stonegroundsmall
		this.damageBlock.create(585.470458984375, this.heightBounds, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1
		this.damageBlock.create(620.7197265625, this.heightBounds, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1
		this.damageBlock.create(774.979249340588, this.heightBounds, "stonegroundsmall").visible = false;
		
		// stonegroundsmall_1_1_1
		this.damageBlock.create(937.9589549816857, this.heightBounds, "stonegroundsmall").visible = false;

        //create player
        this.player = new Worm(this, 0, this.heightBounds - 200)

        this.moleX = 1100
        this.moleY = 450

        //create mole
        this.mole.push(new Mole(this, this.moleX, this.moleY, 1300))
        this.mole.push(new Mole(this, 200, this.moleY, 400))

        this.mole[0].setScale(1.4)

        this.physics.add.collider(this.mole, this.platforms)
        this.physics.add.collider(this.player, this.platforms)

        this.suitcase = this.physics.add.group({
            key: 'suitcase',
            setXY: { x: 1450, y: this.heightBounds - 200, }
        })

        this.physics.add.collider(this.suitcase, this.platforms)
        this.physics.add.overlap(this.player, this.suitcase, this.handleCollectSuitcase, undefined, this)
        this.physics.add.collider(this.player, this.damageBlock, this.handleDamageBlock, undefined, this)
        this.colliderMole = this.physics.add.collider(this.player, this.mole, this.handleHitMole, undefined, this)

        //create camera
        this.cameras.main.setBounds(0, 0, this.widthBounds, this.heightBounds, false);
        this.cameras.main.startFollow(this.player, false)
        this.cameras.main.setZoom(1.5)

        //create hp
        this.hpText = this.add.text(16, this.heightBounds - 100, `Health: ${this.player.getHp()}`, {
            fontSize: '20px',
            fill: '#fff',
        })

        //create text
        this.text(this.player.x, this.player.y - 225, 230, 150, "You use your Wyrm powers to make yourself invisible, however you can't move during this time.");

        // for(let i = 0; i < this.player.getHp(); i++) {
        //     this.add.image(this.startHp, this.player.getY(), 'heart')
        //     this.startHp += 200
        // }

    }

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
            this.sound.mute = true

        //go to next level
        setTimeout(() => {
            this.scene.start('aal-world')
        }, 2000);

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

    handleDamageBlock() {
        this.player?.handleHit() 
    }

    private text(x:number, y:number, width:number, height:number, q:string){
        
        console.log("text bubble test");

        let h = height;
        let w = width;
        let padding = 10;
        let bbq = q;
        let text = this.add.graphics({x: x, y: y});
        
        console.log(bbq);

        //bg
        text.fillStyle(0x898989); //0 maakt achtergrond transparant
        
        //outline
        text.lineStyle(2, 0x092384);

        //shape
        text.strokeRoundedRect(0,0, w, h, 14);
        text.fillRoundedRect(0,0, w, h, 14);

        //text
        let inhoud = this.add.text(0,0, bbq, {fontFamily: 'Comic Sans', fontSize: 20, color: '#ffffff', align: 'center', wordWrap: { width: w - (padding * 2) }} );
        let b = inhoud.getBounds();

        inhoud.setFontFamily('monospace');
        inhoud.setPosition(text.x + (w / 2) - (b.width / 2), text.y + (h / 2) - (b.height / 2)); 
        

        setTimeout(() => {
            text.setVisible(false);
            inhoud.setVisible(false);
        }, 6000);
    }

    update() {

        // let playerY = this.player?.body.position.y

        this.hpText?.setX(this.player?.body.position.x)
        this.hpText?.setY(this.player?.body.bottom)

        if(this.player?.getHp) {
            this.hpText?.setText( `Health: ${this.player?.getHp()}`)
        }

        // if(this.moleLives == 0){
        //     this.mole
        // }

        //update player life
        let hp = this.player?.getHp()
        
        if(hp == 0) {
            this.player?.destroy()
            this.sound.stopAll()
            this.scene.start('death')
        }
    }

}