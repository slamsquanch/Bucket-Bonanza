function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"><input type="button" onclick="titleBGM.mute()" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="titleBGM.unmute()" value="Unmute" /></div>'    
    
    });
}

function popupGame() {
    w2popup.open({
        title: 'Settings',
        body: '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"><input type="button" onclick="gameBGM.volume(0.0); bonanzaMusic.volume(0.0)" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="gameBGM.volume(1.0); bonanzaMusic.volume(1.0)" value="Unmute" /></div>' +   
              '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Sound Effects</p>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="shapeCorrect.volume(0.0); shapeWrong.volume(0.0); meowKitty.volume(0.0); bonanzaSound.volume(0.0); fishSound.volume(0.0); meowKitty3.volume(0.0)" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="shapeCorrect.volume(1.0); shapeWrong.volume(1.0); meowKitty.volume(1.0); bonanzaSound.volume(0.5); fishSound.volume(0.2); meowKitty3.volume(1.0)" value="Unmute" /></div>' 
    
    });
}