import Phaser from 'phaser'


export default class Aal extends Phaser.Physics.Arcade.Sprite {

    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private hp: number = 5

     public getHp() {
        return this.hp
    }

    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    constructor(scene, x : number, y: number, texture = 'aal') {
        super(scene, x, y, texture)

        //give scene physics
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //set world physics
        this.setBounce(0.1)
        this.setCollideWorldBounds(true)

        scene.events.on('update', this.update, this)

        //create controls
        this.cursors = this.scene.input.keyboard.createCursorKeys()
    }

    create() {

    }

    update() {
        //check keyboard inputs
        if(!this.cursors){
            return;
        }

        if(this.cursors?.left?.isDown){
            this.setVelocityX(-260);
        } else if(this.cursors?.right?.isDown){
            this.setVelocityX(260);
        } else{
            this.setVelocityX(0);
        }

        if(this.cursors.up?.isDown && this.body.touching.down){
            this.setVelocityY(-360);
        }
        
    }

    handleHit() {
        if(this.hp == 0) {
            console.log("Game over")
            // this.destroy()
            return this.hp
        } else {
            this.hp -= 1
            return this.hp
        }
    }
}