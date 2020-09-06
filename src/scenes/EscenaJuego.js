
class EscenaJuego extends Phaser.Scene {
    constructor() {
        super({key: 'EscenaJuego'});
    }

    init() {
        console.log('Scene: EscenaJuego');
    }

    create(){

        this.planeta = this.physics.add.sprite(this.sys.game.config.width/2,this.sys.game.config.height/2,"planeta");
        this.planeta.body.setCircle(256)

        this.jugador = this.physics.add.group();

        this.jugador.create(this.planeta.x+288,this.planeta.y,"jugador"); //288)
        this.jugador.children.entries.map((jugador)=>{
            jugador.body.setCircle(32)
            this.tweens.add({
                targets: jugador,
                angle: 360.0,
                duration: 1350,
                repeat: -1
              });
        });
        
    }
    update(){
        Phaser.Actions.RotateAroundDistance(this.jugador.getChildren(),{x:this.planeta.x,y:this.planeta.y},0.02,288);
    }
}

export default EscenaJuego;
