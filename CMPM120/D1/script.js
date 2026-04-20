//Intro Scene---------------------------------------------------------
class StudioIntro extends Phaser.Scene {
    constructor() {
        super('studiointro');
    }
    preload() {}
    create() {
        this.textObjectKama = this.add.text(
            250,     // x
            200,    // y
            "KAMA",
            { font: "100px Arial", color: "#f9f7f5" }
        );

        this.textObjectStudios = this.add.text(
            250,    //x
            280,    //y
            "Studios",
            {font: "85px Arial", color: "#f9f7f5"}

        );

        this.tweens.add({
            targets: [this.textObjectKama, this.textObjectStudios],
            alpha: 0,            // fade to fully transparent
            duration: 5000,      // over 5 seconds
            ease: 'Linear',
            repeat: -1,          // forever
        });

        this.input.on('pointerdown', () => this.scene.start('library'));
    }
    update() {}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor:0x141613,
    scene: [StudioIntro],
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor:0x141613,
    scene: [Library],
}

let game = new Phaser.Game(config);

//Body/Library Scene---------------------------------------------------------------
class Library extends Phaser.Scene{
    constructor() {
        super('library');
    }
    preload() {}
    create() {}
    update() {}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor:0x141613,
    scene: [Library],
}