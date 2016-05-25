/************************/
/*This file contains all*/
/*functions for diabling*/
/*mobile functionalities*/
/************************/



//Source code :http://stackoverflow.com/questions/8071603/safari-ipad-1-how-to-disable-zoom-centering-on-double-tap-but-keep-pinch-zoom/8199905#8199905

var catcher = function(evt) {
    if (evt.touches.length >= 2)
        evt.preventDefault();
};
