import Phaser from 'phaser'

export default class Healthbar extends Phaser.GameObjects.Graphics {

    private value : number
    private p: number

    constructor(scene, x, y) {
        super(scene)

        this.x = x
        this.y = y

        this.value = 100
        this.p = 76/ 100

        this.draw()

        this.scene.physics.add.existing(this);
    }

    decrease(amount) {
        this.value -= amount;

        if (this.value < 0)
        {
            this.value = 0;
        }

        this.draw();

        return (this.value === 0);
    }

    draw() {
        console.log("healthbar created")
        // this.clear()

        //bg
        this.fillStyle(0x000000);
        this.fillRect(this.x, this.y, 80, 16);

        //health
        this.fillStyle(0xffffff);
        this.fillRect(this.x + 2, this.y + 2, 76, 12);

        if (this.value < 30)
        {
            this.fillStyle(0xff0000);
        }
        else
        {
            this.fillStyle(0x00ff00);
        }

        var d = Math.floor(this.p * this.value);

        this.fillRect(this.x + 2, this.y + 2, d, 12);
    }
}