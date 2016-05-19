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
	shapeCorrect.play();
}

/*****************************/
/*Plays the "incorrect" sound*/
/*decrements a life          */
/*****************************/
function incorrectCatch() {
	decrementLives();
	shapeWrong.play();
}
