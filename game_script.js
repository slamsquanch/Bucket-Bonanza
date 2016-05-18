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
/*********************************************/
/*Set all buckets' shape value to param value*/
/*********************************************/
function setBucketShapeValue(value){
	var thoseBuckets = document.querySelectorAll(".bucket");
	for(i = 0; i < 3; i++){
		thoseBuckets[i].shape = value;
	 }
}




/********************************************/
/*			Mittens displays target			*/
/********************************************/
// Needs to be placed above the checkbox hit function because it is being called by it
function displayTarget(){
	var scrNames = new Array("graphics/blueCircle.png", "graphics/blueSquare.png",
        "graphics/blueTriangle.png", "graphics/redCircle.png", "graphics/redSquare.png", "graphics/redTriangle.png",
        "graphics/yellowCircle.png", "graphics/yellowSquare.png", "graphics/yellowTriangle.png", "graphics/greenCircle.png",
		"graphics/greenSquare.png", "graphics/greenTriangle.png", "graphics/orangeCircle.png", "graphics/orangeSquare.png",
		"graphics/orangeTriangle.png", "graphics/purpleCircle.png", "graphics/purpleSquare.png","graphics/purpleTriangle.png");
		
	var check = document.querySelector(".targetShape");
	if(check != null){
		check.parentNode.removeChild(check);
	}
	var theBucket = document.querySelector(".bucket");
	var targetShape = document.createElement("img");
	targetShape.src = scrNames[theBucket.shape];
	targetShape.style = "position:absolute; top:26%";
	targetShape.style.marginLeft = "31%";
	targetShape.setAttribute ("class", "targetShape");
	targetShape.setAttribute ("width", "5%");
	targetShape.setAttribute ("height", "10%");
	document.body.appendChild(targetShape);	
}

/********************************************/
/*			Mittens teaches mixing			*/
/********************************************/
// only at the top for testing purposes will be moved with background stuff later
function speechBubble(){
	// array will be 9 elements later
	var teach = new Array("Mixing Colours/MixGreenCircle.png", "Mixing Colours/MixGreenSquare.png",
		"Mixing Colours/MixGreenTriangle.png", "Mixing Colours/MixOrangeCircle.png", "Mixing Colours/MixOrangeSquare.png",
		"Mixing Colours/MixOrangeTriangle.png", "Mixing Colours/MixPurpleCircle.png", "Mixing Colours/MixPurpleSquare.png",
		"Mixing Colours/MixPurpleTriangle.png");

	var theBucket = document.querySelector(".bucket");
	var mixColours = document.createElement("img");

	if (theBucket.shape <= 8) {

	} else if (theBucket.shape > 8) {
		mixColours.src = teach[theBucket.shape - 9];
		mixColours.style = "position:absolute; top:05%";
		mixColours.style.marginLeft = "16%";
		//mixColours.setAttribute ("width", "5%");
		//mixColours.setAttribute ("height", "10%");
		document.body.appendChild(mixColours);
	}

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
	bucketLeft.style = "top: 80%";
    bucketLeft.style.position = "absolute";
    bucketLeft.style.marginLeft = "15%"
    
    document.body.appendChild(bucketLeft);

    /* Makes the right lane button/bucket placeholder*/
    bucketRight.setAttribute("src", "graphics/invisible_bucket.png");
    /*bucketRight.setAttribute("width", "20%");
     bucketRight.setAttribute("height", "20%");*/
    bucketRight.setAttribute("alt", "Transparent button-right");
    bucketRight.setAttribute("id", "RightPlace");
	bucketRight.setAttribute("class", "bucket");
	bucketRight.setAttribute("location", 0);
	bucketRight.style = "top: 80%";
    bucketRight.style.position = "absolute";
    bucketRight.style.marginLeft = "45%";
    document.body.appendChild(bucketRight);

    /* Makes the Middle lane button/bucket placeholder*/
    bucketMid.setAttribute("src", "graphics/Bucket.png");
    /*bucketMid.setAttribute("width", "20%");
     bucketMid.setAttribute("height", "20%");*/
    bucketMid.setAttribute("alt", "Transparent button-mid");
    bucketMid.setAttribute("id", "MidPlace");
	bucketMid.setAttribute("class", "bucket");
	bucketMid.setAttribute("location", 0);
	bucketMid.style = "top: 80%";
    bucketMid.style.position = "absolute";
    bucketMid.style.marginLeft = "30%";  
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
    var randomNum = Math.floor((Math.random() * 8) + 0);
	
	// Weight system for falling objects
	var chance = Math.floor((Math.random() * 100) + 1);
    if (chance < 70) {
		return scrNames[randomNum];
	} else if (chance < 90) {
		return boot;
	} else if (chance < 99) {
		return fish;
	} else {
		return star;
	}
}

function randomLane(){
    var lanes = ["15%", "30%", "45%"];
    return lanes[Math.floor(Math.random() * 3)];
}

function createObject(){
    var imgSrc = randomObject();
    var element = document.createElement("img");
    element.style = "position:absolute; top:20%";
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
		//window.alert(objectArray[i].style.top);
        objectArray[i].style.top = parseInt(objectArray[i].style.top) + 1 + "%";
    }
}
function checkLimits(){
    var objectArray = document.querySelectorAll(".fallingObject");
	for(var i = 0; i < objectArray.length; i++){
        if(parseInt(objectArray[i].style.top) > 80){
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
		return 15;
	if (bucketArray[1].location == 1)
		return 45;
	if (bucketArray[2].location == 1)
		return 30;
	
}
//Checks if object caught is acceptable or not
//if correct changes what the bucket accepts
//if incorrect decrements life
function checkMixedShapes(value1, value2, fallingObject){
	
	if(fallingObject.shape == value1){
		shapeCorrect.play();
		setBucketShapeValue(value2);
		fallingObject.parentNode.removeChild(fallingObject);				
	}
	else if(fallingObject.shape == value2){
		shapeCorrect.play();
		setBucketShapeValue(value1);
		fallingObject.parentNode.removeChild(fallingObject);		
	}
	else if(fallingObject.shape != value1 || fallingObject.shape != value2){
		decrementLives();
		fallingObject.parentNode.removeChild(fallingObject);
		shapeWrong.play();
	}
}
			
 function acceptMixedShapes(fallingObject, myBucket){
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
	else if(targetNum == 10){
		checkMixedShapes(1,7, fallingObject);
	}
	/****************/
	/*Green triangle*/
	/****************/
	else if(targetNum == 11){
		checkMixedShapes(2,8, fallingObject);
	}
	/****************/
	/*Orange circle**/
	/****************/
	else if(targetNum == 12){
		checkMixedShapes(3,6, fallingObject);
	}
	/****************/
	/*Orange square**/
	/****************/
	else if(targetNum == 13){
		checkMixedShapes(4,7, fallingObject);
	}
	/******************/
	/*Orange triangle**/
	/******************/
	else if(targetNum == 14){
		checkMixedShapes(5,8, fallingObject);;
	}
	/******************/
	/***Purple circle**/
	/******************/
	else if(targetNum == 15){
		checkMixedShapes(0,3, fallingObject);
	}
	/******************/
	/***Purple square**/
	/******************/
	else if(targetNum == 16){
		checkMixedShapes(1,4, fallingObject);
	}
	/******************/
	/**Purple triangle*/
	/******************/
	else if(targetNum == 17){
		checkMixedShapes(2,5, fallingObject);
	}	
		/***************/
		/**Black Circle*/
		/***************/
		// not yet implemented
	}
		


function checkHit(){
	var objectArray = document.querySelectorAll(".fallingObject");
	var thoseBuckets = document.querySelectorAll(".bucket");
	for(i = 0; i < 3; i++){
		if(thoseBuckets[i].location == 1){
			var myBucket = thoseBuckets[i];
		}
	}
	
	for(var i = 0; i < objectArray.length; i++){
		//accepts the corret target shape
		//window.alert(objectArray[i].style.top);	
		if((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			(objectArray[i].shape == myBucket.shape))
			{
			objectArray[i].parentNode.removeChild(objectArray[i]);
			shapeCorrect.play();
			randomBucketReq();
			displayTarget();
            speechBubble();
			//If it is a fish then increment life
		}  else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape == 22)))) {
				incrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeCorrect.play();
			
		}
		//if it is a boot decrement a life
		else if(((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((objectArray[i].shape == 21)))){
				decrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeWrong.play();
			} 
		
		//checks if target is a mixed color
		else if(((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			((myBucket.shape > 8 && myBucket.shape < 18)))){
				acceptMixedShapes(objectArray[i], myBucket);
		}
		//If a shape is caught that is NOT the target shape, decrement a life
		else if (((parseInt(objectArray[i].style.top) > 65) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&		
			((objectArray[i].shape != myBucket.shape)))) {
				decrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
				shapeWrong.play();
			       
		}         
	}
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
    var sky = document.createElement("IMG");
    sky.setAttribute("src", "graphics/SkyBackground.png");
    sky.setAttribute("alt", "Game Background");
    sky.setAttribute("id", "sky");
	sky.setAttribute("class", "background");
    sky.setAttribute("width", "37%");
    sky.setAttribute("height", "95%");
	sky.setAttribute("location", 0);
	sky.style = "top:1%";
    sky.style.position = "absolute";
    sky.style.marginLeft = "15%";
    
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
	mittins.style.marginLeft = "26%";	
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
	leftCloud.style.marginLeft = "15%";
	/***************/
	/**Right cloud**/
	/***************/
	var rightCloud = document.createElement("img");
	rightCloud.setAttribute("src", "graphics/rightCloud.png");
	rightCloud.style = "position:absolute; top:10%";
	rightCloud.setAttribute ("width", "15%");
	rightCloud.setAttribute ("height", "28%");
	rightCloud.style.marginLeft = "37%";
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
	pauseIcon.style.marginLeft = "47%"
	document.body.appendChild(pauseIcon);
	
}


/**************************/
/*Displays the word Target*/
/**************************/
function displayTargetText(){
	var targetText = document.createElement("img");
	targetText.src = "graphics/target.png";
	targetText.style = "position:absolute; top:24%";
	targetText.style.marginLeft = "31%";
	targetText.setAttribute ("width", "5%");
	targetText.setAttribute ("height", "5%");
	document.body.appendChild(targetText);
}



/*******************************/
/****** ONLOAD FUNCTION  *******/
/*******************************/
onload= function(){
	lives = 3;
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







