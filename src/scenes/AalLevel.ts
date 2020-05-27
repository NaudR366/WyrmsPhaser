import Phaser from 'phaser'

export default class AalLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor()
	{
		super('aal-world');
	}

    create() {

        this.add.image(751, 351, 'underwaterBackground');

        //platform
        this.platforms = this.physics.add.staticGroup();
        const ground = this.platforms.create(760, 750, 'grassPlatform') as Phaser.Physics.Arcade.Sprite;

        ground.setScale(4).refreshBody();

        this.platforms.create(20,100, 'grassPlatform');
        this.platforms.create(150,250, 'grassPlatform');
        this.platforms.create(1200,400, 'grassPlatform');

        //playa create
        this.player = this.physics.add.sprite(100, 450, 'aal');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        /*this.koffer = this.physics.add.group();
        this.physics.add.collider(this.koffer, this.platforms);*/

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