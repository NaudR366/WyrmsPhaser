import Phaser from 'phaser'

export default class AalLevel extends Phaser.Scene {

    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    private koffer?: Phaser.Physics.Arcade.Group
    private levelCompleteText?: Phaser.GameObjects.Text

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

        this.platforms.create(500,100, 'grassPlatform');
        this.platforms.create(450,450, 'grassPlatform');
        this.platforms.create(1000,600, 'grassPlatform');

        //playa create
        this.player = this.physics.add.sprite(100, 450, 'aal');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.koffer = this.physics.add.group();

        this.koffer = this.physics.add.group({
            key: 'suitcase',
            setXY: {x: 400, y: 100,}
        });

        //create camera
        this.cameras.main.setBounds(0, 0, this.game.renderer.width, this.game.renderer.height, false);
        this.cameras.main.startFollow(this.player, true)
        this.cameras.main.setZoom(1.5)

        this.physics.add.collider(this.koffer, this.platforms)
        this.physics.add.overlap(this.player, this.koffer, this.handleCollectSuitcase, undefined, this)

    }
    //function for collecting suitcase
    private handleCollectSuitcase(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject){
        const suitcase = s as Phaser.Physics.Arcade.Image
        suitcase.disableBody(true, true)
  
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
            this.scene.start('aal-world')
        }, 3000);
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