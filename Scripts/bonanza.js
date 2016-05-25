/*********************************/
/*This script file contains all **/
/*functions that are used to     */
/*activate and deactivate        */
/* "Bonanza mode"                */
/*********************************/

/**************************/
/* Initiates Bonanza Mode */
/**************************/
function bonanza() {
    setUpBonanza();
    allStars();
    setTimeout(function() { bonanzaBool = 0; } , 15000); //Runs bonanza mode for x seconds
    setTimeout('newTarget();', 16501);
    setTimeout(function() { firstCatch = 1;
        bonanzaMusic.stop();
        gameBGM.unmute();}, 16500);
}


/***************************/
/* Sets bonanzaBool to be  */
/* true.  DO NOT CHANGE    */
/***************************/
function allStars() {
    bonanzaBool = 1;
}

/***************************/
/* Sets firstCatch to be   */
/* false.  DO NOT CHANGE   */
/***************************/
function endFirstCatch() {
    firstCatch = 0;
}

/*****************************/
/* Sets up a new target once */
/* bonanza mode has finished */
/*****************************/
function newTarget() {
    randomBucketReq();
    displayTarget();
    speechBubble();
}

/*****************************/
/* Initial requirements for  */
/* bonanza mode to run.      */
/*****************************/
function setUpBonanza() {
    gameBGM.mute();
    bonanzaMusic.play();
    endFirstCatch();
    displayTarget();
    var checkBubble = document.querySelector(".speechBubble");
    if (checkBubble != null)
        checkBubble.parentNode.removeChild(checkBubble);
}
