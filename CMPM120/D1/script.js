class StudioIntro extends Phaser.Scene {
    constructor() {
        super('studiointro');
    }
    preload() {}
    create() {}
    update() {}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x00ffff,
    scene: [StudioIntro],
}

let game = new Phaser.Game(config);