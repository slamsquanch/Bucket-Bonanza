/**********************/
/*This script contains*/
/*all functions that  */
/*do a "check"        */
/**********************/

// Function to determine which lane the bucket is currently in, returns the marginLeft percentage.
function bucketLane() {
	var bucketArray = document.querySelectorAll(".bucket");	
	var currentWidth=window.innerWidth;
		if(currentWidth>800){
			if (bucketArray[0].location == 1)
				return 32;
			if (bucketArray[1].location == 1)
				return 60;
			if (bucketArray[2].location == 1)
				return 47;
		}
		else{
			if (bucketArray[0].location == 1)
				return 5;
			if (bucketArray[1].location == 1)
				return 78;
			if (bucketArray[2].location == 1)
				return 40;
		}
}

/************************/
/*Checks if the falling */
/*shapes reach the limit*/
/*of the game and       */
/*removes them if true  */
/************************/
function checkLimits(){
    var objectArray = document.querySelectorAll(".fallingObject");
	for (var i = 0; i < objectArray.length; i++){
        if (parseInt(objectArray[i].style.top) > 80) {
            objectArray[i].parentNode.removeChild(objectArray[i]);
        }
    }
}

/**********************************************/
/*Checks if object caught is acceptable or not*/
/*if correct a change to what the bucket      */
/*accepts happens.  Used for combining shapes.*/
/*If incorrect decrements life                */
/**********************************************/
function checkMixedShapes(value1, value2, fallingObject){	
	if (fallingObject.shape == value1) {
		shapeCorrect.play();
		setBucketShapeValue(value2);
		fallingObject.parentNode.removeChild(fallingObject);				
	} else if (fallingObject.shape == value2) {
		shapeCorrect.play();
		setBucketShapeValue(value1);
		fallingObject.parentNode.removeChild(fallingObject);		
	} else if (fallingObject.shape != value1 || fallingObject.shape != value2) {
		decrementLives();
		fallingObject.parentNode.removeChild(fallingObject);
		shapeWrong.play();
	}
}

/************************/
/*Checks if the falling */
/*shape hit a bucket    */
/************************/
//depending on if the shape is correct or fails a different function is called
function checkHit() {
	var objectArray = document.querySelectorAll(".fallingObject");
	var thoseBuckets = document.querySelectorAll(".bucket");
	for (i = 0; i < 3; i++) {
		if (thoseBuckets[i].location == 1) {
			var myBucket = thoseBuckets[i];
		}
	}
	for (var i = 0; i < objectArray.length; i++) {
		//accepts the corret target shape
		//window.alert(objectArray[i].style.top);	
		if ((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft)== bucketLane()) &&
			(objectArray[i].shape == myBucket.shape)) {
				objectArray[i].parentNode.removeChild(objectArray[i]);
				correctCatch();
                meowKitty3.play();
				
		//If it is a fish then increment life
		} else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft)== bucketLane()) &&
			((objectArray[i].shape == 22)))) {			
				objectArray[i].parentNode.removeChild(objectArray[i]);
				fishCatch();
                fishSound.play();

		//If the bucket catches a rainbow star
		} else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape == 23)))) {
				objectArray[i].parentNode.removeChild(objectArray[i]);
				if (firstCatch == 1)
					bonanzaCatch();
				else {
					bModeCatch();
				}
				
		//if it is a boot decrement a life
		} else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft)== bucketLane()) &&
			((objectArray[i].shape == 21)))){
				objectArray[i].parentNode.removeChild(objectArray[i]);
				incorrectCatch();
				
		//checks if target is a mixed color
		} else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((myBucket.shape > 8 && myBucket.shape < 18)))) {
				acceptMixedShapes(objectArray[i], myBucket);

		//If a shape is caught that is NOT the target shape, decrement a life
		} else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&	
			((objectArray[i].shape != myBucket.shape)))) {
				objectArray[i].parentNode.removeChild(objectArray[i]);
				incorrectCatch();
			       
		}

	}
}

/**********************************/
/*Checks what mixed color shape   */
/*the bucket is accepting and     */
/*calls the corrisponding function*/
/**********************************/
function acceptMixedShapes(fallingObject, myBucket) {
	var targetNum = myBucket.shape;

	/**************/
	/*Green circle*/
	/**************/
	if(targetNum == 9) {
		checkMixedShapes(0,6, fallingObject);
	}
	/**************/
	/*Green square*/
	/**************/
	else if (targetNum == 10) {
		checkMixedShapes(1,7, fallingObject);
	}
	/****************/
	/*Green triangle*/
	/****************/
	else if (targetNum == 11) {
		checkMixedShapes(2,8, fallingObject);
	}
	/****************/
	/*Orange circle**/
	/****************/
	else if (targetNum == 12) {
		checkMixedShapes(3,6, fallingObject);
	}
	/****************/
	/*Orange square**/
	/****************/
	else if (targetNum == 13) {
		checkMixedShapes(4,7, fallingObject);
	}
	/******************/
	/*Orange triangle**/
	/******************/
	else if (targetNum == 14) {
		checkMixedShapes(5,8, fallingObject);;
	}
	/******************/
	/***Purple circle**/
	/******************/
	else if (targetNum == 15) {
		checkMixedShapes(0,3, fallingObject);
	}
	/******************/
	/***Purple square**/
	/******************/
	else if (targetNum == 16) {
		checkMixedShapes(1,4, fallingObject);
	}
	/******************/
	/**Purple triangle*/
	/******************/
	else if (targetNum == 17) {
		checkMixedShapes(2,5, fallingObject);
	}	
	/***************/
	/**Black Circle*/
	/***************/
	// not yet implemented
}