function popup() {
    w2popup.open({
        title: 'Settings',
        body: '<p align="center">Background Music</p>' +
              '<div align="center"> Off <input type="range" id="bgmOnOff" max="1" min="0" step="0.01" onchange="changevolume(this.value)"/> On</div>'       
    
    });
}

function changevolume(amount) {
    var audioObject = document.getElementsByTagName('audio')[0];
        audioObject.volume = amount;
}

