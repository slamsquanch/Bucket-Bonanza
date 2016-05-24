/*******************************/
/****** ONLOAD FUNCTION  *******/
/*******************************/
var bonanzaBool;
var lives;
var score;
var firstCatch;

onload= function() {
	var elm = document.body; 
	var windowWidth = window.innerWidth;
	if(windowWidth > 800){
		largeBackround();
	}
	lives = 3;	//initial amount of lives
	score = 0;	//beginning player score
	bonanzaBool = 0;  //determine if bonanza mode should be on
	firstCatch = 1;	//determine if a player has caught first star
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
	sizeCheck();//adjusts everything to the size of the screen 
	
	
	
    // Pauses and plays the game when the pause icon is clicked
    pause.onclick=function() {
		var resume = document.getElementById("resumeButton");
		resume.onclick=function(){
			timer = setInterval('move();', 25);
			objectTimer = setInterval('createObject();', 1000);
		}
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
	var bucketDisable = document.querySelectorAll(".bucket");
	elm.addEventListener('touchstart', catcher, true);
	for(i = 0 ; i < 3; i++){
		if(bucketDisable[i] != null){
			bucketDisable[i].addEventListener('touchstart', catcher, true);
		}
	}
}







