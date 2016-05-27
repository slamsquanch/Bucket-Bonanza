/*************************/
/*This script contains   */
/*all the functions that */
/*increments difficulty  */
/*************************/

// Increases shape drop rate
function increaseDropRate() {
	dropPercent = dropPercent + 0.15;
}

// Increases rate at which shapes drop
function increaseShapeRate() {
	shapeCreate = shapeCreate - 50;
    objectTimer = setInterval('createObject();', shapeCreate);
	clearInterval(objectTimer);
}