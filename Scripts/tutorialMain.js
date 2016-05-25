var num = 0;
var objectTimer;
var timer;
var stage;

onload= function() {
	var windowWidth = window.innerWidth;
	if(windowWidth > 800){
		largeBackround();
	}
	stage = 1;
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
	objectTimer = setInterval('sequenceDrop();', 3500);
    timer = setInterval('move();', 25);
	setTimeout(function() { instruction(stage); }, 4000);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	setTarget(7);
	displayTarget() // displays target
    speechBubble();	// displays speech bubble hint
	var pause = document.querySelector(".pauseIcon");
	sizeCheck();//adjusts everything to the size of the screen 
	
	pause.onclick = function() {
		if (timer == null) {
			timer = setInterval('move();', 25);
			objectTimer = setInterval('sequenceDrop();', 3500);
		} else {
			clearInterval(timer);
			timer = null;
			clearInterval(objectTimer);
			objectTimer = null;
		}
	}
}