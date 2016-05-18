/*******************************/
/****** ONLOAD FUNCTION  *******/
/*******************************/
onload= function(){
	lives = 3;
	score = 0;
    background();  //for the game sky
	mittins();	//adds mittins
	sideClouds(); //adds clouds
	pauseIcon() // adds the pause icon
	displayTargetText()// displays the word target
    bucketControls();	
    var objectTimer = setInterval('createObject();', 1500);
    var timer = setInterval('move();', 25);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	randomBucketReq(); // randomizes buckets initial requirement
	displayTarget() // displays target
    speechBubble();
	var pause = document.querySelector(".pauseIcon");	

	
	
    //object instead of window will require you to click on the circle itself
    pause.onclick=function(){
		if(timer == null){
		timer = setInterval('move();', 25);
		objectTimer = setInterval('createObject();', 1000);
     }
     else{
		clearInterval(timer);
		timer = null;
		clearInterval(objectTimer);
		objectTimer = null;
     }

     };
}







