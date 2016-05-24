function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = false" value="Unmute" /></div>'    
    
    });
}

function popupGame() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="gameBGM.muted = true; bonanzaMusic.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="gameBGM.muted = false; bonanzaMusic.muted = false" value="Unmute" /></div>' +   
              '<p align="center">Sound Effects</p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.muted = true; shapeWrong.muted = true; meowKitty.muted = true; bonanzaSound.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.muted = false; shapeWrong.muted = false; meowKitty.muted = false; bonanzaSound.muted = false" value="Unmute" /></div>' 
    
    });
}