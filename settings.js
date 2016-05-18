function popup() {
    w2popup.open({
        title: 'Settings',
        body: 'Background Music' +
              '<p></p>' +
              'Off <input type="range" id="bgmOnOff" max="1" min="0" step="0.01" onchange="changevolume(this.value)"/> On' +
              '<p></p>' +
              'Sound Effects' +
              '<p></p>' +
              'Off <input type="range" id="soundFXOnOff" max="1" min="0" step="0.01" onchange="changevolume(this.value)"/> On'       
    });
}

function changevolume(amount) {
    var audioObject = document.getElementsByTagName('audio')[0];
        audioObject.volume = amount;
}

