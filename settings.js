function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.mute()" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.unmute()" value="Unmute" /></div>'    
    
    });
}

function popupGame() {
    w2popup.open({
        title: 'Settings',
        body: '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="gameBGM.mute(); bonanzaMusic.mute()" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"><input type="button" onclick="gameBGM.unmute(); bonanzaMusic.unmute()" value="Unmute" /></div>' +   
              '<p></p>' +
              '<p></p>' +
              '<p align="center" style="font-family:Comic sans MS, cursive, sans-serif;color: orange; font-size:200%">Sound Effects</p>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.mute(); shapeWrong.mute(); meowKitty.mute(); bonanzaSound.mute(); fishSound.mute(); meowKitty3.mute()" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="shapeCorrect.unmute(); shapeWrong.unmute(); meowKitty.unmute(); bonanzaSound.unmute(); fishSound.unmute(); meowKitty3.unmute()" value="Unmute" /></div>' 
    
    });
}