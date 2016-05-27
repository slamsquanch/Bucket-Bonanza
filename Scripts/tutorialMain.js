var num = 0; // Used to drop objects in order
var objectTimer; // Timer that drops objects
var timer; // Timer that moves objects
var stage; // Stage of the tutorial
var dropPercent = 1;

onload= function() {
	var windowWidth = window.innerWidth;
	if(windowWidth > 800){
		largeBackround();
	}
	stage = 1; // Beginning stage
	lives = 3;	//initial amount of lives
	score = 0;	//beginning player score
	bonanzaBool = 0;  //determine if bonanza mode should be on
	firstCatch = 1;	//determine if a player has caught first star
    background();  //for the game sky
	mittins();	//adds mittins
	sideClouds(); //adds clouds
	displayTargetText()// displays the word target
    bucketControls();	//sets up the buckets
	
	var windowWidth = window.innerWidth;
	if(windowWidth < 800){
		objectTimer = setInterval('sequenceDrop();', 2000);
		setTimeout(function() { instruction(stage); }, 2500);
	} else {
		setTimeout('removeKeyImages();', 5000);
		objectTimer = setInterval('sequenceDrop();', 5000);
		setTimeout(function() { instruction(stage); }, 5500);
	}
    timer = setInterval('move();', 25);
    var limitTimer = setInterval('checkLimits();', 1);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	setTarget(7); // Sets initial target to be a yellow square
	displayTarget() // displays target
    speechBubble();	// displays speech bubble hint
	sizeCheck();//adjusts everything to the size of the screen 
	
}