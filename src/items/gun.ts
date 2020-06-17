import Phaser from 'phaser'

export default class Gun extends Phaser.GameObjects.Sprite {
    //guuuuuuun
    private damage: number;
    private cooldown: number;
    body: Phaser.Physics.Arcade.Body;

    constructor(scene, x, y, key = 'gun', frame?){
        super(scene, x, y, key, frame);
        this.scene.physics.world.enable(this as Phaser.GameObjects.Sprite);
    }
    
    shoot(...args: any[]) : undefined | number {
        return;
    }

    update(time: number, delta: number): void{
        //
    }
}

