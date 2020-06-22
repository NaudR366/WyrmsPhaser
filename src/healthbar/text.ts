import Phaser from 'phaser'

export default class textBubble extends Phaser.GameObjects.Graphics {

    //verhuiz dit naar level

    constructor(scene) {
        super(scene)

        /*this.x = x;
        this.y = y;
        let h = height;
        let w = width;
        let q_ = q;

        this.draw(x, y, w, h, q_)*/

        this.scene.physics.add.existing(this);
    }

    draw(x:number, y:number, width:number, height:number, q:string) {
        console.log("text bubble test")

        this.x = x;
        this.y = y;
        let h = height;
        let w = width;
        let padding = 10;
        let bbq = q;

        //bg
        this.fillStyle(0x000000);
        
        //outline
        this.lineStyle(4, 0x092384, 1);

        //shape
        this.strokeRoundedRect(0,0, w, h, 14);
        this.fillRoundedRect(0,0, w, h, 14);

        //text
        let text = this.scene.add.text(0,0, bbq, { fontFamily: 'Arial', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: w - (padding * 2) }} );
        let b = text.getBounds();

        text.setPosition(this.x + (w / 2) - (b.width / 2), this.y + (h / 2) - (b.height / 2));
    }
}