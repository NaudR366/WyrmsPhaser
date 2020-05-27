import Phaser from 'phaser'

//import HelloWorldScene from './scenes/HelloWorldScene'
//import WurmLevel from './scenes/WurmLevel'
import AalLevel from './scenes/AalLevel'
import WurmVsMole from './scenes/WurmVsMole'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 },
			debug: true,
		}
	},
<<<<<<< HEAD
	scene: [WurmVsMole]
=======
	scene: [AalLevel]
>>>>>>> 1dabdff261417851568c5d8f8cf2b83dd902614a
}

export default new Phaser.Game(config)
