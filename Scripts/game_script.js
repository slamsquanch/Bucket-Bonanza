/*******************************/
/****** ONLOAD FUNCTION  *******/
/*******************************/
onload= function() {
	lives = 3;	//initial amount of lives
	score = 0;	//beginning player score
    background();  //for the game sky
	mittins();	//adds mittins
	sideClouds(); //adds clouds
	pauseIcon() // adds the pause icon
	displayTargetText()// displays the word target
    bucketControls();	//sets up the buckets
    var objectTimer = setInterval('createObject();', 1500);
    var timer = setInterval('move();', 25);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	randomBucketReq(); // randomizes buckets initial requirement
	displayTarget() // displays target
    speechBubble();	// displays speech bubble hint
	var pause = document.querySelector(".pauseIcon");	

	
	
    // Pauses and plays the game when the pause icon is clicked
    pause.onclick=function() {
		if (timer == null) {
			timer = setInterval('move();', 25);
			objectTimer = setInterval('createObject();', 1000);
		} else {
			clearInterval(timer);
			timer = null;
			clearInterval(objectTimer);
			objectTimer = null;
		}
    }
}







