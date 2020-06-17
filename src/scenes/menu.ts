import Phaser, { Game } from 'phaser'
import Worm from '~/players/worm'
import Mole from '~/enemies/mole'
import Healthbar from '~/healthbar/healthbar'
import textBubble from '~/healthbar/text'

export default class Menu extends Phaser.Scene
{


    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player? : Worm
    private healthbar? : Healthbar
    // private mole?: Phaser.Physics.Arcade.Sprite
    private play?: Phaser.Physics.Arcade.StaticGroup
    private levelSelect?: Phaser.Physics.Arcade.StaticGroup
    private exit?: Phaser.Physics.Arcade.StaticGroup
    // private score = 0
    private playb? 
    private levels? 
    private credits? 

    private widthBounds = 1500
    private heigthBounds = 750
    private bkey

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

        // add music
        this.sound.play("menuMusic", {
            loop: true,
            volume: 0.5
        })

        //create platform
        this.platforms = this.physics.add.staticGroup()
        
        // stonegroundsmall
		this.platforms.create(17, 589.390739179897, "stonegroundsmall").visible = false;
		this.platforms.create(26.6958023494819, 590.2070627603003, "stonegroundsmall").visible = false;
		this.platforms.create(59.98490848210746, 608.6440863403545, "stonegroundsmall").visible = false;
		this.platforms.create(73.81269397405082, 609.1562263801152, "stonegroundsmall").visible = false;
		this.platforms.create(304.4878914518224, 585.0381095494772, "stonegroundsmall").visible = false;
		this.platforms.create(326.1270959863266, 585.0381095494772, "stonegroundsmall").visible = false;
		this.platforms.create(381.5030485175165, 585.0381095494772, "stoneground").visible = false;
		this.platforms.create(137.37473875258988, 725.5206735477857, "stoneground").visible = false;
		this.platforms.create(225.97813862155732, 757.222824938849, "stoneground").visible = false;
		this.platforms.create(74.04435729980469, 642.2243041992188, "stonegroundsmall").visible = false;
		this.platforms.create(76.44001007080078, 659.5590593079369, "stonegroundsmall").visible = false;
		this.platforms.create(93.41734704135101, 678.8306347364897, "stonegroundsmall").visible = false;
		this.platforms.create(305.45964240458414, 608.6113859831399, "stonegroundsmall").visible = false;
		this.platforms.create(305.45963619703195, 642.2469242042893, "stonegroundsmall").visible = false;
		this.platforms.create(306.26048709398367, 673.4799783366343, "stonegroundsmall").visible = false;
		this.platforms.create(434.3157997039665, 615.2342930651805, "stonegroundsmall").visible = false;
		this.platforms.create(469.0508293001438, 645.41395245346, "stonegroundsmall").visible = false;
		this.platforms.create(502.64704807609013, 646.5527637121224, "stonegroundsmall").visible = false;
		this.platforms.create(501.5081783174523, 680.1489639942631, "stonegroundsmall").visible = false;
		this.platforms.create(530.5765647640275, 701.5087290534539, "stonegroundsmall").visible = false;
		this.platforms.create(562.586955039507, 702.0422493030538, "stonegroundsmall").visible = false;
		this.platforms.create(574.3241047890181, 703.1092545515536, "stonegroundsmall").visible = false;
		this.platforms.create(572.5709868255791, 737.2792427569264, "stonegroundsmall").visible = false;
		this.platforms.create(644.2223153994955, 757.0993502549971, "stoneground").visible = false;
		this.platforms.create(727.2434849405007, 758.0285055864935, "stonegroundsmall").visible = false;
		this.platforms.create(714.6746829452258, 701.8908173688791, "stonegroundsmall").visible = false;
		this.platforms.create(715.9451134280023, 668.2985635165994, "stonegroundsmall").visible = false;
		this.platforms.create(713.2962634383898, 628.6946374831383, "stonegroundsmall").visible = false;
		this.platforms.create(740.3602428027116, 599.9956410929057, "stonegroundsmall").visible = false;
		this.platforms.create(743.175021335666, 583.8103840017044, "stonegroundsmall").visible = false;
		this.platforms.create(782.6429994018025, 552.6513461722238, "stonegroundsmall").visible = false;
		this.platforms.create(783.5217013482693, 521.0168009621096, "stonegroundsmall").visible = false;
		this.platforms.create(782.6430053710938, 506.95700734147243, "stonegroundsmall").visible = false;
		this.platforms.create(815.5956156536415, 507.8357408108534, "stonegroundsmall").visible = false;
		this.platforms.create(849.8663572819169, 510.6547071871935, "stonegroundsmall").visible = false;
		this.platforms.create(850.4802835928382, 527.5079514811358, "stonegroundsmall").visible = false;
		this.platforms.create(850.4802777397977, 560.3156070909475, "stonegroundsmall").visible = false;
		this.platforms.create(851.2438473857288, 594.2993744572788, "stonegroundsmall").visible = false;
		this.platforms.create(862.2307679575262, 604.0434011485879, "stonegroundsmall").visible = false;
		this.platforms.create(863.1709003109481, 636.9589454832362, "stonegroundsmall").visible = false;
		this.platforms.create(849.1468164059594, 670.5166754864698, "stonegroundsmall").visible = false;
		this.platforms.create(876.6941481765764, 690.5511011880429, "stonegroundsmall").visible = false;
		this.platforms.create(904.2415031681369, 692.0536563749159, "stonegroundsmall").visible = false;
		this.platforms.create(939.8026242849425, 720.6027600385123, "stonegroundsmall").visible = false;
		this.platforms.create(972.8594452334044, 674.0226783356085, "stonegroundsmall").visible = false;
		this.platforms.create(996.9007910159156, 675.0244399527886, "stonegroundsmall").visible = false;
		this.platforms.create(1041.7714870666061, 686.8384134370917, "stonegroundsmall").visible = false;
		this.platforms.create(1075.6272056073167, 684.1299471213, "stonegroundsmall").visible = false;
		this.platforms.create(1114.8997689732666, 651.6285019194125, "stonegroundsmall").visible = false;
		this.platforms.create(1116.9310195553041, 633.3464593595834, "stonegroundsmall").visible = false;
		this.platforms.create(1152.1410120651667, 634.0235595703125, "stonegroundsmall").visible = false;
		this.platforms.create(1179.9025622835125, 623.8668948367563, "stonegroundsmall").visible = false;
		this.platforms.create(1184.3306658340039, 567.6973933559522, "stonegroundsmall").visible = false;
		this.platforms.create(1185.996618356496, 592.0425462567896, "stonegroundsmall").visible = false;
		this.platforms.create(1220.3851318359375, 569.3942260742188, "stonegroundsmall").visible = false;
		this.platforms.create(1255.3719514390666, 571.4767411767093, "stonegroundsmall").visible = false;
		this.platforms.create(1292.407715884439, 565.9363806752391, "stonegroundsmall").visible = false;
		this.platforms.create(1317.660155209311, 565.5982872935109, "stonegroundsmall").visible = false;
		this.platforms.create(1313.9786676316294, 584.4624262795991, "stonegroundsmall").visible = false;
		this.platforms.create(1312.56787109375, 617.6144253076324, "stonegroundsmall").visible = false;
		this.platforms.create(1313.273277167858, 651.4718875258402, "stonegroundsmall").visible = false;
		this.platforms.create(1312.567915599714, 683.9185210666401, "stonegroundsmall").visible = false;
		this.platforms.create(1345.7199975173746, 722.0081185946369, "stonegroundsmall").visible = false;
		this.platforms.create(1380.9881446100403, 722.0080969838328, "stonegroundsmall").visible = false;
		this.platforms.create(1411.3186282484965, 693.0882289809988, "stonegroundsmall").visible = false;
		this.platforms.create(1430.3634353380075, 659.2308505712739, "stonegroundsmall").visible = false;
		this.platforms.create(1429.6581203572061, 623.2573822536724, "stonegroundsmall").visible = false;
		this.platforms.create(1471.2745567029276, 587.9892123876801, "stonegroundsmall").visible = false;
		this.platforms.create(1469.158447265625, 577.4087969473704, "stonegroundsmall").visible = false;
        

        //Buttons blocks
        this.play = this.physics.add.staticGroup()
        this.play.create(364.95447466338436, 430.90068202088753, 'stonegroundsmall').visible = false

        this.levelSelect = this.physics.add.staticGroup()
        this.levelSelect.create(805.5901755112031, 387.6385635845812, 'stonegroundsmall').visible = false

        this.exit = this.physics.add.staticGroup()
        this.exit.create(1251.3335521876904, 448.1875305175781, "stonegroundsmall").visible = false;

        //create player
        this.player = new Worm(this, 0, this.heigthBounds -250)

        //create healthbar
        // this.healthbar = new Healthbar(this, this.player.x,this.player.y)
        // this.healthbar = new Healthbar(this, this.player.x, this.player.y)

        //create controls text
        this.add.text(10,this.heigthBounds - 330, "Controls", {
            fontSize: '30px',
            fill: '#fff',
                })

        this.add.text(10,this.heigthBounds - 300, "use the arrow keys/joystick to move", {
            fontSize: '25px',
            fill: '#fff',
                })

        this.add.text(10,this.heigthBounds - 270, "down arrow/joystick downwards to toggle stealth mode", {
            fontSize: '25px',
            fill: '#fff',
                })

        this.add.text(10,this.heigthBounds - 250, "B to go back to game select", {
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
        this.cameras.main.startFollow(this.player, false)
        this.cameras.main.setZoom(1.5)

        //create key
        this.bkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

         //add text bubble
        this.text(520, 520, 320, 160, '“HALLOEEE DOE HET EENS PL0X KTHNXBYE”');
        
    }

    private handlePlay()
    {   
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('wurmWorld')
    }

    private handleSelect()
    {
        this.scene.stop()
        this.sound.stopAll()
        this.scene.start('levels')
    }

    private handleExit() {
        window.location.href = 'https://hr-cmgt.github.io/arcade-server/'
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
        text.fillStyle(0x000000);
        
        //outline
        text.lineStyle(4, 0x092384, 1);

        //shape
        text.strokeRoundedRect(0,0, w, h, 14);
        text.fillRoundedRect(0,0, w, h, 14);

        //text
        let inhoud = this.add.text(0,0, bbq, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', align: 'center', wordWrap: { width: w - (padding * 2) }} );
        let b = inhoud.getBounds();

        text.setPosition(text.x + (w / 2) - (b.width / 2), text.y + (h / 2) - (b.height / 2));
    }

    update()
    {
        if (Phaser.Input.Keyboard.JustDown(this.bkey))
        {
            console.log("b pressed")
            this.handleExit()
        } 
    }
}