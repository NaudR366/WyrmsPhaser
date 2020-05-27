import Phaser from 'phaser'

import Load from './scenes/load'
import WurmVsMole from './scenes/WurmVsMole'
import AalLevel from './scenes/AalLevel'
import WurmLevel from './scenes/WurmLevel'
import Menu from './scenes/menu'


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
	render: {
		pixelArt: true,
	},
	scene: [Load, Menu, WurmLevel, WurmVsMole, AalLevel]
}

export default new Phaser.Game(config)
