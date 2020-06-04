import Phaser from 'phaser'

export default class Worm extends Phaser.Physics.Arcade.Sprite {

    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

    constructor(scene, x : number, y: number, texture = 'worm') {
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

    update() {
        //check keyboard inputs
        if(!this.cursors)
        {
             return
        }
    
        if(this.cursors?.left?.isDown)
        {
            this.setVelocityX(-260)
            this.anims.play('left',true)
        } 
        else if(this.cursors?.right?.isDown)
        {
            this.setVelocityX(260)
            this.anims.play('right',true)
        } else 
        {
         this.setVelocityX(0)
         this.anims.play('turn')
        }
    
        if (this.cursors.up?.isDown && this.body.touching.down) 
        {
             this.setVelocityY(-360)
             this.scene.sound.play('playerJump', {
                 volume: 0.5
             })
        }
    }
}