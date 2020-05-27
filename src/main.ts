import Phaser from 'phaser'
import WurmVsMole from './scenes/WurmVsMole'
//import HelloWorldScene from './scenes/HelloWorldScene'
//import WurmLevel from './scenes/WurmLevel'
import AalLevel from './scenes/AalLevel'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1500,
	height: 700,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 },
			debug: true,
		}
	},

	scene: [WurmVsMole]
}

export default new Phaser.Game(config)
