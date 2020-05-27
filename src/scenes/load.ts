import Phaser from 'phaser'

export default class WurmLevel extends Phaser.Scene
{

    constructor()
    {
        super('load')
    }

    preload() {
        this.load.image('background', 'assets/background/menubg.png')
        this.load.image('start', 'assets/menubuttons/menustart.png')
        this.load.image('platform', 'assets/ground.png')
        this.load.spritesheet('worm', 'assets/worm.png', { 
            frameWidth: 65, frameHeight: 60
        })
    }

    create()
    {
        
    }
}