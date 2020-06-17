import Phaser from 'phaser'

export default class Robot extends Phaser.Physics.Arcade.Sprite {

    private robot?
    private startX: number
    private endX: number

    constructor(scene, x : number, y: number, endX: number, texture = 'robot') {
        super(scene, x, y, texture)

        //give scene physics
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //set world physics
        this.setBounce(0.1)
        this.setCollideWorldBounds(true)

        this.startX = x
        this.endX = endX

        scene.events.on('update', this.update, this)

    }

    create() {
        
    }


    update() {

        if(this.x > this.endX ){
            this.setVelocityX(-50)
            this.anims.play('leftrobot', true)
            
        } else if(this.x <= this.startX) {
            this.setVelocityX(50)
            this.anims.play('rightrobot', true)
        }
        
    }
}