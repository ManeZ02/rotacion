import EscenaJuego from './scenes/EscenaJuego.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "rotacion por tweens",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 700,
        height: 700,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: false,
    physics: {
        default: "arcade",
        "arcade":{
            debug:true,
            debugBodyColor: 0xffffff
        }
        
    },
    scene: [Bootloader, EscenaJuego]
};

new Phaser.Game(config);