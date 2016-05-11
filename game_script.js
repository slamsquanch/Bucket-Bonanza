/**
 * Created by Zac on 2016-05-09.
 */

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
    bucketLeft.style.marginLeft = "15%"
    bucketLeft.style.marginTop = "500px";
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
    bucketRight.style.marginLeft = "45%";
    bucketRight.style.marginTop = "500px";
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
    bucketMid.style.marginLeft = "30%";
    bucketMid.style.marginTop = "500px";
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
    // if you wish to change the max and min for the random generator
    // change the 8 for max and the 0 for min.
    var randomNum = Math.floor((Math.random() * 8) + 0);
    return scrNames[randomNum];
}

function randomLane(){
    var lanes = ["15%", "30%", "45%"];
    return lanes[Math.floor(Math.random() * 3)];
}

function createObject(){
    var imgSrc = randomObject();
    var element = document.createElement("img")
    /*element.setAttribute("width", "8%");
     element.setAttribute("height", "8%");*/
    element.style = "position:absolute; top:1px";
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
        if(parseInt(objectArray[i].style.top) > 500){
            objectArray[i].parentNode.removeChild(objectArray[i]);
        }
    }
}

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


function checkHit(){
	var objectArray = document.querySelectorAll(".fallingObject");
	
	
	for(var i = 0; i < objectArray.length; i++){
		if(parseInt(objectArray[i].style.top) > 500 || 
			((parseInt(objectArray[i].style.top) == 425) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			
			// This is hard-coded at the moment to only accept blue squares. The number code determines
			// what to accept.
			((objectArray[i].shape == 1))))
			{objectArray[i].parentNode.removeChild(objectArray[i]);
			
			// If a shape is caught that is NOT a blue square, decrement a life
		} else if (parseInt(objectArray[i].style.top) > 500 || 
			((parseInt(objectArray[i].style.top) == 425) &&
			(parseInt(objectArray[i].style.marginLeft) == bucketLane()) &&
			
			((objectArray[i].shape != 1)))) {
				decrementLives();
				objectArray[i].parentNode.removeChild(objectArray[i]);
			}
			
			// If the shape reaches 500 (the bottom), do nothing
		else if (parseInt(objectArray[i].style.top) == 500) {
			objectArray[i].parentNode.removeChild(objectArray[i])
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
		var lifeImg = ["1lifeB.png", "2lifeB.png", "3lifeB.png", "4lifeB.png", "5life.png"];
		
		document.getElementById("life").src = "graphics/Lives/" + lifeImg[lives - 1];
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
    sky.setAttribute("width", "36.5%");
    sky.setAttribute("height", "70%");
	sky.setAttribute("location", 0);
    sky.style.position = "absolute";
    sky.style.marginLeft = "15%"
    sky.style.marginTop = "1px";
    document.body.appendChild(sky);
}




/*******************************/
/****** ONLOAD FUNCTION  *******/
/*******************************/
onload= function(){
	lives = 3;
    background();  //for the game sky
    bucketControls();
    var objectTimer = setInterval('createObject();', 1500);
    var timer = setInterval('move();', 2);
    var limitTimer = setInterval('checkLimits();', 1);
	var bucketCheck = setInterval('checkHit();', 1);
	var lifeCheck = setInterval('checkLives();', 1);
	
	
    //object instead of window will require you to click on the circle itself
    /*window.onclick=function(){
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

     };*/
}







