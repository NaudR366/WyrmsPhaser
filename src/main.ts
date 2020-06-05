import Phaser, { NONE } from 'phaser'

import Load from './scenes/load'
import WurmVsMole from './scenes/WurmVsMole'
import AalLevel from './scenes/AalLevel'
import WurmLevel from './scenes/WurmLevel'
import Menu from './scenes/menu'
import Levels from './scenes/levelSelector'
import Ice from './scenes/iceWorld'
import Death from './scenes/deathscene'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: window.innerWidth,
		height: window.innerHeight,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 },
			debug: true,
		}
	},
	fps: {
        min: 10,
        target: 60,
        forceSetTimeOut: false,
        deltaHistory: 10
    },
	render: {
		pixelArt: true,
	},
	scene: [Load, Menu, Levels, WurmLevel, WurmVsMole, AalLevel, Ice, Death]
}

export default new Phaser.Game(config)
