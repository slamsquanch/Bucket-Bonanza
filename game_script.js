/**
 * Created by Zac on 2016-05-09.
 */


/************************************/
/*Randomize what the bucket requires*/
/************************************/
 function randomBucketReq(){
	 var myBucket = document.querySelectorAll(".bucket");
	 var randomNum = Math.floor((Math.random() * 17) + 0);
	 //var randomNum = 9; //for testing purposes
	 for(i = 0; i < 3; i++){
		myBucket[i].shape = randomNum;
	 }
 }

/********************************************/
/*			Mittens displays target			*/
/********************************************/
// only at the top for testing purposes will be moved with background stuff later
function displayTarget(){
	// array will be 20 elements later
	var scrNames = new Array("graphics/blueCircle.png", "graphics/blueSquare.png",
        "graphics/blueTriangle.png", "graphics/redCircle.png", "graphics/redSquare.png", "graphics/redTriangle.png",
        "graphics/yellowCircle.png", "graphics/yellowSquare.png", "graphics/yellowTriangle.png", "graphics/greenCircle.png",
		"graphics/greenSquare.png", "graphics/greenTriangle.png", "graphics/orangeCircle.png", "graphics/orangeSquare.png",
		"graphics/orangeTriangle.png", "graphics/purpleCircle.png", "graphics/purpleSquare.png","graphics/purpleTriangle.png");
		
	var theBucket = document.querySelector(".bucket");
	var targetShape = document.createElement("img");
	targetShape.src = scrNames[theBucket.shape];
	targetShape.style = "position:absolute; top:26%";
	targetShape.style.marginLeft = "auto";
	targetShape.style.marginRight = "auto";
	targetShape.style.left = 0;
	targetShape.style.right = 0;
	targetShape.setAttribute ("width", "5%");
	targetShape.setAttribute ("height", "10%");
	document.body.appendChild(targetShape);	
}
 
 
function bucketControls() {
    var bucketLeft = document.createElement("IMG");
    var bucketRight = document.createElement("IMG");
    var bucketMid = document.createElement("IMG");

    /* Makes the left lane button/bucket placeholder*/
    bucketLeft.setAttribute("src", "graphics/invisible_bucket.png");
    /*bucketLeft.setAttribute("width", "20%");
     bucketLeft.setAttribute("height", "20%");*/
    bucketLeft.setAttribute("alt", "Transparent button-left");
    bucketLeft.setAttribute("id", "LeftPlace");
	bucketLeft.setAttribute("class", "bucket");
	bucketLeft.setAttribute("location", 0);
    bucketLeft.style.position = "absolute";
    bucketLeft.style.marginLeft = "31%"
    bucketLeft.style.marginTop = "36%";
    document.body.appendChild(bucketLeft);

    /* Makes the right lane button/bucket placeholder*/
    bucketRight.setAttribute("src", "graphics/invisible_bucket.png");
    /*bucketRight.setAttribute("width", "20%");
     bucketRight.setAttribute("height", "20%");*/
    bucketRight.setAttribute("alt", "Transparent button-right");
    bucketRight.setAttribute("id", "RightPlace");
	bucketRight.setAttribute("class", "bucket");
	bucketRight.setAttribute("location", 0);
    bucketRight.style.position = "absolute";
    bucketRight.style.marginLeft = "59%";
    bucketRight.style.marginTop = "36%";
    document.body.appendChild(bucketRight);

    /* Makes the Middle lane button/bucket placeholder*/
    bucketMid.setAttribute("src", "graphics/Bucket.png");
    /*bucketMid.setAttribute("width", "20%");
     bucketMid.setAttribute("height", "20%");*/
    bucketMid.setAttribute("alt", "Transparent button-mid");
    bucketMid.setAttribute("id", "MidPlace");
	bucketMid.setAttribute("class", "bucket");
	bucketMid.setAttribute("location", 0);
    bucketMid.style.position = "absolute";
    bucketMid.style.marginLeft = "45%";
    bucketMid.style.marginTop = "36%";
    document.body.appendChild(bucketMid);
	bucketMid.location = 1;

    /* Left lane click */
    bucketLeft.onclick=function() {
        this.src="graphics/Bucket.png";
        bucketRight.src="graphics/invisible_bucket.png";
        bucketMid.src="graphics/invisible_bucket.png";
		bucketLeft.location = 1;
		bucketRight.location = 0;
		bucketMid.location = 0;
    }

    /* Right lane click */
    bucketRight.onclick=function() {
        this.src="graphics/Bucket.png";
        bucketLeft.src="graphics/invisible_bucket.png";
        bucketMid.src="graphics/invisible_bucket.png";
		bucketLeft.location = 0;
		bucketRight.location = 1;
		bucketMid.location = 0;
    }

    /* Middle lane click */
    bucketMid.onclick=function() {
        this.src="graphics/Bucket.png";
        bucketLeft.src="graphics/invisible_bucket.png";
        bucketRight.src="graphics/invisible_bucket.png";
		bucketLeft.location = 0;
		bucketRight.location = 0;
		bucketMid.location = 1;
    }
}

/******************************************/
/*** RANDOMLY DROPPING SHAPES CODE HERE ***/
/******************************************/

function Object(imgSrc, element, timer){
    this.imgSrc =imgSrc;
    this.element= element;
    this.myTimer = timer;
}

//returns a random src name
function randomObject(){
    var scrNames = new Array("graphics/blueCircle.png", "graphics/blueSquare.png",
        "graphics/blueTriangle.png", "graphics/redCircle.png", "graphics/redSquare.png", "graphics/redTriangle.png",
        "graphics/yellowCircle.png", "graphics/yellowSquare.png", "graphics/yellowTriangle.png");
	// Added three new graphics to fall
	var boot = "graphics/boot.png";
	var fish = "graphics/fish.png";
	var star = "graphics/star.png";
    // if you wish to change the max and min for the random generator
    // change the 8 for max and the 0 for min.
    var randomNum = Math.floor((Math.random() * 9) + 0);
	
	// Weight system for falling objects
	var chance = Math.floor((Math.random() * 100) + 1);
    if (chance < 79) {
		return scrNames[randomNum];
	} else if (chance < 94) {
		return boot;
	} else if (chance < 99) {
		return fish;
	} else {
		return star;
	}
}

function randomLane(){
    var lanes = ["30%", "45%", "60%"];
    return lanes[Math.floor(Math.random() * 3)];
}

function createObject(){
    var imgSrc = randomObject();
    var element = document.createElement("img")
    /*element.setAttribute("width", "8%");
     element.setAttribute("height", "8%");*/
    element.style = "position:absolute; top:150%";
    element.style.marginLeft = randomLane();
    element.src = imgSrc;
	
	switch(imgSrc) {
		
		case "graphics/blueCircle.png":
			element.shape = 0;
			break;
			
		case "graphics/blueSquare.png":
			element.shape = 1;
			break;
				
		case "graphics/blueTriangle.png":
			element.shape = 2;
			break;			
			
		case "graphics/redCircle.png":
			element.shape = 3;
			break;
				
		case "graphics/redSquare.png":
			element.shape = 4;
			break;
				
		case "graphics/redTriangle.png":
			element.shape = 5;
			break;	
			
		case "graphics/yellowCircle.png":
			element.shape = 6;
			break;
				
		case "graphics/yellowSquare.png":
			element.shape = 7;
			break;
				
		case "graphics/yellowTriangle.png":
			element.shape = 8;
			break;
		case "graphics/boot.png":
			element.shape = 21;
			break;
		case "graphics/fish.png":
			element.shape = 22;
			break;
		case "graphics/star.png":
			element.shape = 23;
			break;
			
		default:
			break;
		
		}
	
    element.className = "fallingObject";
    var coolObject = new Object(imgSrc, element, null);
    document.body.appendChild(coolObject.element);
    return coolObject;
}

function move(){

    var objectArray = document.querySelectorAll(".fallingObject");
    for(var i = 0; i < objectArray.length; i++){
        objectArray[i].style.top = parseInt(objectArray[i].style.top) + 1 + "px";
    }
}
function checkLimits(){
    var objectArray = document.querySelectorAll(".fallingObject");
    for(var i = 0; i < objectArray.length; i++){
        if(parseInt(objectArray[i].style.top) > 750){
            objectArray[i].parentNode.removeChild(objectArray[i]);
        }
    }
}

/*****************************/
/*********** AUDIO ***********/
/*****************************/

var shapeCorrect = new Audio("sounds/Correct.mp3");
var shapeWrong = new Audio("sounds/Wrong.mp3");
var pressButton = new Audio("sounds/Button.mp3");
var meowKitty = new Audio("sounds/Meow.mp3");
var meowKitty2 = new Audio("sounds/Meow3.mp3");

/*****************************/
/*** HIT REGISTRATION HERE ***/
/*****************************/

// Function to determine which lane the bucket is currently in, returns the marginLeft percentage.
function bucketLane() {
	
	var bucketArray = document.querySelectorAll(".bucket");
	
	if (bucketArray[0].location == 1)
		return 30;
	if (bucketArray[1].location == 1)
		return 60;
	if (bucketArray[2].location == 1)
		return 45;
	
}

			
 function acceptMixedShapes(fallingObject){
	var myBucket = document.querySelector(".bucket");
	var targetNum = myBucket.shape;
	
	/**************/
	/*Green circle*/
	/**************/
	if(targetNum == 9) {
			// if you accept a blue circle 
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 0))))){
					shapeCorrect.play();
					myBucket.shape = 6;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget();
				}
			// if you accept a yellow circle
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 6))))){
				shapeCorrect.play();
				myBucket.shape = 0;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget();
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 6 || fallingObject.shape != 0))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
	}
	/**************/
	/*Green square*/
	/**************/
	else if(targetNum == 10){
		// if you accept a blue square 
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 1))))){
					shapeCorrect.play();
					myBucket.shape = 7;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a yellow square
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 7))))){
				shapeCorrect.play();
				myBucket.shape = 1;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 7 || fallingObject.shape != 1))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
	}
	/****************/
	/*Green triangle*/
	/****************/
	else if(targetNum == 11){
		// if you accept a blue triangle
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 2))))){
					shapeCorrect.play();
					myBucket.shape = 8;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a yellow square
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 8))))){
				shapeCorrect.play();
				myBucket.shape = 2;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 8 || fallingObject.shape != 2))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
	}
	/****************/
	/*Orange circle**/
	/****************/
	else if(targetNum == 12){
		// if you accept a red circle
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 3))))){
					shapeCorrect.play();
					myBucket.shape = 6;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a yellow circle
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) >675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 6))))){
				shapeCorrect.play();
				myBucket.shape = 3;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 6 || fallingObject.shape != 3))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
	}
	/****************/
	/*Orange square**/
	/****************/
	else if(targetNum == 13){
		// if you accept a red square
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 4))))){
					shapeCorrect.play();
					myBucket.shape = 7;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a yellow square
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 7))))){
				shapeCorrect.play();
				myBucket.shape = 4;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 7 || fallingObject.shape != 4))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
		
	}
	/******************/
	/*Orange triangle**/
	/******************/
	else if(targetNum == 14){
		// if you accept a red triangle
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 5))))){
					shapeCorrect.play();
					myBucket.shape = 8;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a yellow triangle
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 8))))){
				shapeCorrect.play();
				myBucket.shape = 5;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 8 || fallingObject.shape != 5))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
		
	}
	/******************/
	/***Purple circle**/
	/******************/
	else if(targetNum == 15){
		// if you accept a blue circle
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 0))))){
					shapeCorrect.play();
					myBucket.shape = 3;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a red circle
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) >675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 3))))){
				shapeCorrect.play();
				myBucket.shape = 0;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 3 || fallingObject.shape != 0))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
		
	}
	/******************/
	/***Purple square**/
	/******************/
	else if(targetNum == 16){
		// if you accept a blue square
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 1))))){
					shapeCorrect.play();
					myBucket.shape = 4;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a red square
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 4))))){
				shapeCorrect.play();
				myBucket.shape = 1;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 4 || fallingObject.shape != 1))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
		
	}
	/******************/
	/**Purple triangle*/
	/******************/
	else if(targetNum == 17){
		// if you accept a blue triangle
			if((parseInt(fallingObject.style.top) > 750 || 
				((parseInt(fallingObject.style.top) > 675) &&
				(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
				((fallingObject.shape == 2))))){
					shapeCorrect.play();
					myBucket.shape = 5;
					fallingObject.parentNode.removeChild(fallingObject);
					displayTarget(); // only for testing purposes
				}
			// if you accept a red triangle
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape == 5))))){
				shapeCorrect.play();
				myBucket.shape = 2;	
				fallingObject.parentNode.removeChild(fallingObject);
				displayTarget(); // only for testing purposes
			}
			else if((parseInt(fallingObject.style.top) > 750 || 
			((parseInt(fallingObject.style.top) > 675) &&
			(parseInt(fallingObject.style.marginLeft) == bucketLane()) &&
			((fallingObject.shape != 5 || fallingObject.shape != 2))))){
				decrementLives();
				fallingObject.parentNode.removeChild(fallingObject);
				shapeWrong.play();
			}
			else{
				fallingObject.parentNode.removeChild(fallingObject);
			}
			
		/***************/
		/**Black Circle*/
		/***************/
		// not yet implemented
	}
		
 }

function checkHit(){
	var objectArray = document.querySelectorAll(".fallingObject");
	var myBucket = document.querySelector(".bucket");
	
	for(var i = 0; i < objectArray.length; i++){
		//accepts the corret target shape
		if(
			((parseInt(objectArray[i].style.MarginTop) > 675) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape == myBucket.shape)))) {
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeCorrect.play();
				updateScore();
			
			//If it is a fish then increment life
		}  else if (
			((parseInt(objectArray[i].style.top) > 675) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape == 22)))) {
				incrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeCorrect.play();
			
		}
		//checks if target is a mixed color
		else if(
			((parseInt(objectArray[i].style.top) > 675) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((myBucket.shape > 8)))){
			acceptMixedShapes(objectArray[i]);
		}
		//If a shape is caught that is NOT the target shape, decrement a life
		else if (
			((parseInt(objectArray[i].style.top) > 675) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape != myBucket.shape)))) {
				decrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeWrong.play();
			       
		}         
			// If the shape reaches 850 (the bottom), do nothing
		else if (parseInt(objectArray[i].style.top) == 750) {
			objectArray[i].parentNode.removeChild(objectArray[i])
		}
	}
}

/*****************************/
/****** SCORING **************/
/*****************************/

function updateScore() {
	score++;
	document.getElementById("score").innerHTML = score;
}

/*****************************/
/****** LIVES SYSTEM  *******/
/*****************************/

// Please make this link to the game over screen or something.

function decrementLives() {
		lives--;
		
		if (lives == 0) {
			gameOver();
		} else {
			displayLives();
		}
		
}
	
function incrementLives() {
		if (lives < 5) {
			lives++;
			displayLives();
		}
}
	
function displayLives() {
		document.getElementById("life").src = "Lives/" + lives + "lifeB.png";
}

function gameOver() {
		window.location.href = "GameOver.html";
}

/*****************************/
/***** GAME BACKGROUND  ******/
/*****************************/

function background() {
    var sky = document.createElement("img");
    sky.setAttribute("src", "graphics/SkyBackground.png");
    sky.setAttribute("alt", "Game Background");
    sky.setAttribute("id", "sky");
	sky.setAttribute("class", "background");
    document.body.appendChild(sky);
}

function mittins(){
	var mittins = document.createElement("img");
	mittins.setAttribute("src", "graphics/MiddleCat.png");
	mittins.style = "position:absolute; top:10%";
	mittins.setAttribute ("width", "15%");
	mittins.setAttribute ("height", "30%");
	mittins.setAttribute ("class", "middleCloud");
	mittins.id = "mittins";
	mittins.style.marginLeft = "auto";
	mittins.style.marginRight = "auto";
	mittins.style.left = 0;
	mittins.style.right = 0;
	document.body.appendChild(mittins);
	
	var mittins = document.getElementById("mittins")
	
	/*When you click on the middle cat it will change the cat to the other cat*/
	mittins.onclick = function(){
			
			if(mittins.getAttribute("src") == "graphics/MiddleCat.png"){
				mittins.src = "graphics/originalCat.png";
				mittins.style = "margin-left: 26%; 	position:absolute; top:7%";
				meowKitty.play();
			}
			else{
				mittins.src = "graphics/MiddleCat.png";
				mittins.style = "margin-left: 26%; 	position:absolute; top:10%";
				meowKitty2.play();
			}
		};
	
	
}

function sideClouds(){
	/***************/
	/**Left cloud***/
	/***************/
	var leftCloud = document.createElement("img");
	leftCloud.setAttribute("src", "graphics/leftCloud.png");
	leftCloud.style = "position:absolute; top:10%";
	leftCloud.setAttribute ("width", "15%");
	leftCloud.setAttribute ("height", "30%");
	leftCloud.style.marginLeft = "31%";
	/***************/
	/**Right cloud**/
	/***************/
	var rightCloud = document.createElement("img");
	rightCloud.setAttribute("src", "graphics/rightCloud.png");
	rightCloud.style = "position:absolute; top:10%";
	rightCloud.setAttribute ("width", "15%");
	rightCloud.setAttribute ("height", "28%");
	rightCloud.style.marginLeft = "53%";
	/*****************************/
	/*Adds the images to the body*/
	/*****************************/
	document.body.appendChild(rightCloud);
	document.body.appendChild(leftCloud);
}

/********************************************/
/*creates pause icon in the top right corner*/
/********************************************/
function pauseIcon(){
	var pauseIcon = document.createElement("img");
	pauseIcon.setAttribute("src", "buttons/pauseIcon.png");
	pauseIcon.style = "position:absolute; top:1%";
	pauseIcon.setAttribute ("width", "5%");
	pauseIcon.setAttribute ("height", "10%");
	pauseIcon.setAttribute("class", "pauseIcon");
	pauseIcon.style.marginLeft = "63%"
	document.body.appendChild(pauseIcon);
	
}


/**************************/
/*Displays the word Target*/
/**************************/
function displayTargetText(){
	var targetText = document.createElement("img");
	targetText.src = "graphics/target.png";
	targetText.style = "position:absolute; top:24%";
	targetText.style.marginLeft = "auto";
	targetText.style.marginRight = "auto";
	targetText.style.left = 0;
	targetText.style.right = 0;
	targetText.setAttribute ("width", "5%");
	targetText.setAttribute ("height", "5%");
	document.body.appendChild(targetText);
}



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
    var timer = setInterval('move();', 2);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	randomBucketReq(); // randomizes buckets initial requirement
	displayTarget() // displays target
	var pause = document.querySelector(".pauseIcon");	
	
	
    //object instead of window will require you to click on the circle itself
    pause.onclick=function(){
		if(timer == null){
		timer = setInterval('move();', 2);
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







