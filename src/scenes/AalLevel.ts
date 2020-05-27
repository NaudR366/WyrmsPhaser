import Phaser from 'phaser'

export default class AalLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor()
	{
		super('aal-world');
	}


    preload() {

        this.load.image('background', 'assets/bg_aal.png');
        this.load.image('koffer', 'assets/koffer.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('aal', 'assets/aal.png');
        //this.load.image('enemy', 'assets/aa_enemy.png');
    }

    create() {

        this.add.image(960, 500, 'background');

        //platform
        this.platforms = this.physics.add.staticGroup();
        const ground = this.platforms.create(760, 750, 'ground') as Phaser.Physics.Arcade.Sprite;

        ground.setScale(4).refreshBody();

        this.platforms.create(800,100, 'ground');
        this.platforms.create(50,250, 'ground');
        this.platforms.create(1200,550, 'ground');

        //playa create
        this.player = this.physics.add.sprite(100, 450, 'aal');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if(!this.cursors){
            return;
        }

        if(this.cursors?.left?.isDown){
            this.player?.setVelocityX(-260);
        } else if(this.cursors?.right?.isDown){
            this.player?.setVelocityX(260);
        } else{
            this.player?.setVelocityX(0);
        }

        if(this.cursors.up?.isDown && this.player?.body.touching.down){
            this.player.setVelocityY(-360);
        }
    }
}