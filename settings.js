function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = false" value="Unmute" /></div>'    
    
    });
}

function popupGame() {
    w2popup.open({
        title: 'Settings',
        body: '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="gameBGM.muted = true; bonanzaMusic.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="gameBGM.muted = false; bonanzaMusic.muted = false" value="Unmute" /></div>' +   
              '<p></p>' +
              '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Sound Effects</p>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.muted = true; shapeWrong.muted = true; meowKitty.muted = true; bonanzaSound.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.muted = false; shapeWrong.muted = false; meowKitty.muted = false; bonanzaSound.muted = false" value="Unmute" /></div>' 
    
    });
}