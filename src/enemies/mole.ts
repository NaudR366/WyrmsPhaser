import Phaser from 'phaser'

export default class Mole extends Phaser.Physics.Arcade.Sprite {

    private mole?

    constructor(scene, x : number, y: number, texture = 'mol') {
        super(scene, x, y, texture)

        //give scene physics
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //set world physics
        this.setBounce(0.1)
        this.setCollideWorldBounds(true)

        scene.events.on('update', this.update, this)

    }

    create() {
        
    }


    update() {
        if(this.x > 700 ){
            this.setVelocityX(-100)
            this.anims.play('leftmol', true)
            
        } else if(this.x == 0) {
            this.setVelocityX(100)
            this.anims.play('rightmol', true)
            this.x
             = this.x
        }
        
    }
}