function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center">Background Music</p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = true" value="Mute" /></div>' +
              '<p></p>' +
              '<div align="center"> <input type="button" onclick="titleBGM.muted = false" value="Unmute" /></div>'    
    
    });
}

var titleBGM = new Audio('sounds/titleScreenBGM.mp3');

