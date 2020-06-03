import Phaser from 'phaser'

import Load from './scenes/load'
import WurmVsMole from './scenes/WurmVsMole'
import AalLevel from './scenes/AalLevel'
import WurmLevel from './scenes/WurmLevel'
import Menu from './scenes/menu'
import Levels from './scenes/levelSelector'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 },
			debug: false,
		}
	},
	render: {
		pixelArt: true,
	},
	scene: [Load, Menu, Levels, WurmLevel, WurmVsMole, AalLevel]
}

export default new Phaser.Game(config)
