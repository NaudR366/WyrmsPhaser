import Phaser, { DOWN } from 'phaser'
import Healthbar from '~/healthbar/healthbar'

export default class Worm extends Phaser.Physics.Arcade.Sprite {

    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private hp: number = 3
    // private healthbar: Healthbar
    public stealthMode: boolean = false
    // public healthText: Text

     public getHp() {
        return this.hp
    }

    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    setSpriteColor(hex: number) {
        this.tint = hex
    }

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


        //create hp bar
        // this.healthbar = new Healthbar(this, this.x, this.y)

        
    }

    create() {

    }

    update() {

        //create controller input
        // var pad = Phaser.typ

        // if(this.scene.input.gamepad.total) {
        //     pad = this.scene.input.gamepad.pad1
        // }
        
        //check keyboard inputs

        if(!this.cursors)
        {
             return
        }
    
        if(this.cursors?.left?.isDown && this.stealthMode == false)
        {
            this.setVelocityX(-230)
            this.anims.play('left',true)
        } 
        else if(this.cursors?.right?.isDown && this.stealthMode == false)
        {
            this.setVelocityX(230)
            this.anims.play('right',true)
        } else 
        {
         this.setVelocityX(0)
         this.anims.play('turn')
        }
    
        if (this.cursors.up?.isDown && this.body.touching.down && this.stealthMode == false) 
        {
             this.setVelocityY(-300)
             this.scene.sound.play('playerJump', {
                 volume: 0.1
             })
             
        }

        // if (this.cursors.down?.isDown && this.body.touching.down) 
        // {
        //     this.setVelocityX(0)
        //     this.anims.play('turn')
        //     this.alpha = 0.3
        //     this.stealthMode = true
             
        // }
        let arrowDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        if (Phaser.Input.Keyboard.JustDown(arrowDown)) {
            console.log("key down is losgelaten");

            this.stealthMode = !this.stealthMode

            if(this.stealthMode) {
                this.setVelocityX(0) 
                this.anims.play('turn')
                this.clearTint()
                this.alpha = 0.3
            } else {
                this.alpha = 1
                this.clearTint()
            }

        }
        // this.scene.input.keyboard.on("keyup", () => {
        //     if(Phaser.Input.Keyboard.KeyCodes.DOWN)
        //     console.log("key down is losgelaten");
            
        // })

        // this.scene.input.keyboard.once("keyup", () => {
        //     if(Phaser.Input.Keyboard.KeyCodes.SPACE) {
        //         console.log("key down is losgelaten");
        //     }
        // })
        // if (this.cursors.down?.isDown && this.body.touching.down) 
        // {
        //     this.alpha = 1
        //     this.stealthMode = false
        // }
        
    }

    handleHit() {
        if(this.hp == 0) {
            console.log("Game over")
            // this.destroy()
            return this.hp
        } else {
            if(this.stealthMode == false) {
            this.hp -= 1
            return this.hp
            }
        }
    }

    handleHeal() {
        if (this.hp < 3)
        this.hp = this.hp + 1

    }
}