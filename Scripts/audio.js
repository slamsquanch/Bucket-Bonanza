/**************************/
/*This script contains all*/
/*variables for audio     */
/**************************/

var titleBGM = new Howl({
    urls: ["sounds/titlescreenBGM.mp3"],
    loop: true
    
});

var gameBGM = new Howl({
    urls: ["sounds/BGM.mp3"],
    loop: true,
    buffer: true
});

var shapeCorrect = new Howl({
    urls: ["sounds/Correct.mp3"]
    
});

var shapeWrong = new Howl({
    urls: ["sounds/Wrong.mp3"]
    
});

var fishSound = new Howl({
    urls: ["sounds/lifeup.mp3"],
    volume: 0.2
    
});

var pressButton = new Howl({
    urls: ["sounds/Button.mp3"]
});

var meowKitty = new Howl({
    urls: ["sounds/Meow.mp3"]
});

var meowKitty2 = new Howl({
    urls: ["sounds/Meow2.mp3"]    
});

var meowKitty3 = new Howl({
    urls: ["sounds/Meow3.mp3"]
    
})

var bonanzaSound = new Howl({
    urls: ["sounds/BucketComplete.mp3"],
    volume: 0.5    
});

var bonanzaMusic = new Howl({
    urls: ["sounds/Bonanza.mp3"]
});
