/******************************/
/*This script contains all    */
/*funcations that are used   */
/*when a catch is made        */
/******************************/

/*****************************/
/*Plays the "correct" sound  */
/*Gives a new target         */
/*and updates the game screen*/
/*****************************/
function correctCatch() {
	shapeCorrect.play();
	randomBucketReq();
	displayTarget();
    speechBubble();
	updateScore();
}

/*****************************/
/*Plays the "correct" sound  */
/*increments a life          */
/*****************************/
function fishCatch() {
	incrementLives();
	fishSound.play();
}

/*****************************/
/*Plays the "incorrect" sound*/
/*decrements a life          */
/*****************************/
function incorrectCatch() {
	decrementLives();
	shapeWrong.play();
}

/*****************************/
/* Plays the horn sound on an*/
/* initial star catch        */
/* activating Bonanza Mode   */
/*****************************/
function bonanzaCatch() {
	bonanzaSound.play();
	updateScore();
	bonanza();
}

/*******************************/
/* Plays the "correct" sound   */
/* and updates score for each  */
/* star caught after the first.*/
/*******************************/
function bModeCatch() {
	shapeCorrect.play();
	updateScore();
}