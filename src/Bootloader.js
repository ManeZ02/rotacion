class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('jugador', 'jugador.png');
        this.load.image('planeta', 'planeta.png');

        this.load.on("complete",()=>{
            this.scene.start("EscenaJuego");
        });
    }

    
}
export default Bootloader;