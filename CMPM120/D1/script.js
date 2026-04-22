//Intro Scene---------------------------------------------------------
class StudioIntro extends Phaser.Scene {
    constructor() {
        super('studiointro');
    }
    preload() {}
    create() {
       
        this.textObjectKama = this.add.text(
            250,     // x
            0,    // y
            "KAMA",
            { font: "100px Arial", color: "#f9f7f5" }
        );

        this.textObjectStudios = this.add.text(
            250,    //x
            400,    //y
            "Studios",
            {font: "85px Arial", color: "#f9f7f5"}

        );

        this.textObjectClick = this.add.text(
            500,
            500,
            "Click to continue",
            {font: "30px Arial", color: "#f9f7f5"}
        );

        this.tweens.add({
            targets: this.textObjectKama,
            x: 250,
            y: 200,
            duration: 1000,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObjectStudios,
            x: 250,
            y: 280,
            duration: 1000,
            ease: 'Linear',
        });

        this.input.on('pointerup', () => {
            this.tweens.add({
                targets: [this.textObjectKama, this.textObjectStudios, this.txtObjectClick],
                alpha: 0,            // fade to fully transparent
                duration: 1000,      // over 1 second
                ease: 'Linear',

                onComplete: () => {
                    this.scene.start('library');
                }
            });
        })

    }
    update() {}
}

//Body/Library Scene---------------------------------------------------------------
class Library extends Phaser.Scene{
    constructor() {
        super('library');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('Green Library', 'Green Library.jpg');
        this.load.audio('crowd noise', 'crowd noise.wav');
    }
    create() {
        this.imageObject = this.add.image(200, 250, 'Green Library');
        this.imageObject.setScale(1.2);
        
        const crowdNoise = this.sound.add('crowd noise', {loop: true});
        crowdNoise.play();
        
        let counter = 0;

        this.textObjectGME = this.add.text(
            500,     // x
            50,    // y
            "Good Morning Everyone!",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 300} }
        );
        this.textObjectGME.setAlpha(0);
        
        this.textObjectGME1 = this.add.text(
            500,     // x
            200,    // y
            "Thank you all for coming to the Green Library for my research presentation!",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 270} }
        );
        this.textObjectGME1.setAlpha(0);
        
        
        this.textObjectGME2 = this.add.text(
            500,     // x
            400,    // y
            "I promise it won't disappoint.",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 300}}
        );
        this.textObjectGME2.setAlpha(0);

        this.input.on('pointerup', () =>{
            if(counter == 0){
                this.textObjectGME.setAlpha(1);
                counter += 1;
            }else if(counter == 1){
                this.textObjectGME1.setAlpha(1);
                counter += 1;
            }else if(counter == 2){
                this.textObjectGME2.setAlpha(1);
                counter += 1;
            }else if(counter == 3){
                this.tweens.add({
                    targets: [this.textObjectGME, this.textObjectGME1, this.textObjectGME2, this.imageObject],
                    alpha: 0,            // fade to fully transparent
                    duration: 1000,      // over 1 second
                    ease: 'Linear',
                });

                this.tweens.add({
                    targets: crowdNoise,
                    volume: 0,
                    duration: 1000,

                    onComplete: () => {
                        console.log(crowdNoise);
                        crowdNoise.stop();
                        this.scene.start('presentation');
                    }
                });
            }

        })
    }
    update() {}
}

//Presentation scene below----------------------------------------------------------------------------
class Presentation extends Phaser.Scene{
    constructor() {
        super('presentation');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('WoodenPlatformGreen', 'WoodenPlatformGreen.jpg')
        this.load.audio('projectorSound', 'projectorSound.wav.wav');
    }
    create(){
        const platform = this.add.image(200, 250, 'WoodenPlatformGreen');
        platform.setCrop(20, 20, 400, 600);

        const projectorSound = this.sound.add('projectorSound', {volume: 0.5, loop: true});
        projectorSound.play();

        let counter = 0;

        this.textObjectPresent0 = this.add.text(
            400,     // x
            50,    // y
            "In this first drawing, there are several wooden structures surrounded by a forest. For those who don't know a forest is a dense growth of trees.",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 400} }
        );
        this.textObjectPresent0.setAlpha(0);

        this.textObjectPresent1 = this.add.text(
            400,     // x
            400,    // y
            "Yes, yes, I know its hard to believe but the ancient world used to have plants that could grow unsupervised.",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 400} }
        );
        this.textObjectPresent1.setAlpha(0);

        this.textObjectPresent2 = this.add.text(
            50,  //x
            50,   //y
            "This next image is the reason why we had you all sign those 10 page NDAs.",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 800} }
        );
        this.textObjectPresent2.setAlpha(0);

        this.textObjectPresent3 = this.add.text(
            50,  //x
            400,   //y
            "I'll give you all a moment to take it in.",
            { font: "30px Arial", color: "#f9f7f5", wordWrap: {width: 800} }
        );
        this.textObjectPresent3.setAlpha(0);

        this.input.on('pointerup', () =>{
            if(counter == 0){
                this.textObjectPresent0.setAlpha(1);
                counter += 1;
            }else if(counter == 1){
                this.textObjectPresent1.setAlpha(1);
                counter += 1;
            }else if(counter == 2){
                this.tweens.add({
                    targets: [this.textObjectPresent0, this.textObjectPresent1, platform],
                    alpha: 0,            // fade to fully transparent
                    duration: 1000,      // over 1 second
                    ease: 'Linear',

                });

                this.tweens.add({
                    targets: projectorSound,
                    volume: 0,
                    duration: 1000,
                });

                this.textObjectPresent2.setAlpha(1);
                counter += 1;
            }else if(counter == 3){
                this.textObjectPresent3.setAlpha(1);
                counter += 1;
            }else if(counter == 4){
                this.tweens.add({
                    targets: [this.textObjectPresent2, this.textObjectPresent3],
                    alpha: 0,            // fade to fully transparent
                    duration: 1000,      // over 1 second
                    ease: 'Linear',

                    onComplete: () => {
                        this.sound.stopAll();
                        this.scene.start('chairs');
                    }
                });

            }

        })
    }
    update(){}
}

//Chairs scene-------------------------------------------------------------------------
class Chairs extends Phaser.Scene{
    constructor() {
        super('chairs');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('Chairs', 'LandscapeWithChairs.jpg');
        this.load.audio('crowdGasp', 'crowdGasp.wav');
        this.load.audio('projectorSound', 'projectorSound.wav.wav');
    }
    create(){
        const chairs = this.add.image(400, 300, 'Chairs');
        chairs.setScale(1.3);
        
        const crowdGasp = this.sound.add('crowdGasp');

        const projectorSound = this.sound.add('projectorSound', {volume: 0.5, loop: true});
        projectorSound.play();

        let counter = 0;

        this.textbox = this.add.rectangle(400, 500, 750, 100, 0xFFFFFF, 1);
        this.textbox.setAlpha(0);

        this.textObjectChair1 = this.add.text(
            50,  //x
            450,   //y
            "Behold! An unlicensed photo, clearly taken before the restrictions on photography took place.",
            { font: "30px Arial", color: "#000000", wordWrap: {width: 800} }
        );
        this.textObjectChair1.setAlpha(0);

        this.textObjectChair2 = this.add.text(
            50,  //x
            450,   //y
            "My team theorizes that this was taken before the movement to stop artificially generated photos.",
            { font: "30px Arial", color: "#000000", wordWrap: {width: 800} }
        );
        this.textObjectChair2.setAlpha(0);

        this.textObjectChair3 = this.add.text(
            50,  //x
            450,   //y
            "In those days any random person could take a photo.",
            { font: "30px Arial", color: "#020202", wordWrap: {width: 800} }
        );
        this.textObjectChair3.setAlpha(0);

        this.textObjectChair4 = this.add.text(
            50,  //x
            450,   //y
            "That's it for today's presentation!",
            { font: "30px Arial", color: "#020202", wordWrap: {width: 800} }
        );
        this.textObjectChair4.setAlpha(0);

        this.textObjectChair5 = this.add.text(
            50,  //x
            450,   //y
            "If you would like to learn more about the ancient world, please sign up to join the next research expedition",
            { font: "30px Arial", color: "#020202", wordWrap: {width: 800} }
        );
        this.textObjectChair5.setAlpha(0);

        this.input.on('pointerup', () =>{
            if(counter == 0){
                crowdGasp.play();
                counter += 1; 
            }else if(counter == 1){
                this.textObjectChair1.setAlpha(1);
                this.textbox.setAlpha(1);
                counter += 1;
            }else if(counter == 2){
                this.textObjectChair1.setAlpha(0);
                this.textObjectChair2.setAlpha(1);
                counter += 1;
            }else if(counter == 3){
                this.textObjectChair2.setAlpha(0);
                this.textObjectChair3.setAlpha(1);
                counter += 1;
            }else if(counter == 4){
                this.textObjectChair3.setAlpha(0);
                this.textObjectChair4.setAlpha(1);
                counter += 1;
            }else if(counter == 5){
                this.textObjectChair4.setAlpha(0);
                this.textObjectChair5.setAlpha(1);
                counter += 1;
            }else if(counter == 6){
                this.tweens.add({
                    targets: [this.textObjectChair5, this.textbox, chairs],
                    alpha: 0,            // fade to fully transparent
                    duration: 1000,      // over 1 second
                    ease: 'Linear',

                    
                    onComplete: () => {
                        console.log("tween complete!")
                        projectorSound.stop();
                        this.scene.start('start');
                    }
                });
                
            }

        })

    }
    update(){}
}

//Start Menu Scene----------------------------------------------------------------------------
class Start extends Phaser.Scene{

    constructor(){
        super('start');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('stars', 'stars.jpg');
    }
    create(){
        const stars = this.add.image(400, 300, 'stars');
        stars.setScale(1.3);
         this.textObjectChair4 = this.add.text(
            200,  //x
            200,   //y
            "Worlds Beyond",
            { font: "60px Arial", color: "#ffffff"}
        );

        this.textbox = this.add.rectangle(400, 500, 300, 100, 0xFFFFFF, 1);
        
        this.textObjectChair4 = this.add.text(
            270,  //x
            470,   //y
            "Sign up?",
            { font: "60px Arial", color: "#020000"}
        );

    }
    update(){}
}


//configuration stuff below ---------------------------------------------------------------------------
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor:0x141613,
    scene: [StudioIntro, Library, Presentation, Chairs, Start],
}


let game = new Phaser.Game(config);