/****************************/
/* Ensures the objects fall */
/* in a pre-determined lane.*/
/****************************/
function setLane(num) {
	var currentWidth=window.innerWidth;
	if(currentWidth>800){
		var lanes = ["47%", "32%", "60%"];
		return lanes[num % 3];
	}
	else{
		var lanes = ["40%", "5%", "78%"];
		return lanes[num % 3];
	}
}

/******************************/
/* Drops an object from the   */
/* sky.  objectNum determines */
/* which object will fall.    */
/******************************/
function tutorialDrop(objectNum) {
	var shapes = ["blueCircle", "yellowSquare", "blueTriangle", "yellowTriangle", "redTriangle", "fish", "boot"];
	var imgSrc = "graphics/" + shapes[objectNum] + ".png";
	
	var element = document.createElement("img");
    //element.style = "position:absolute; top:20%";
	element.style.top = "20%";
    element.style.marginLeft = setLane(objectNum);
    element.src = imgSrc;
	element.myHeight = 20//(window.innerHeight * 0.2);
	
	switch(imgSrc) {
		
		case "graphics/blueCircle.png":
			element.shape = 0;
			break;
				
		case "graphics/blueTriangle.png":
			element.shape = 2;
			break;	
				
		case "graphics/redTriangle.png":
			element.shape = 5;
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
    document.body.appendChild(element);
    return element;
}

/*******************************/
/* Drops objects in order.     */
/*******************************/
function sequenceDrop() {
	if (num < 7) {
		tutorialDrop(num);
		num++;
	}
}

/*******************************/
/* Sets what the next target   */
/* should be.                  */
/*******************************/
function setTarget(target) {
	var myBucket = document.querySelectorAll(".bucket");
	for (i = 0; i < 3; i++) {
		myBucket[i].shape = target;
	}
}

/********************************/
/* When a shape is caught, the  */
/* correct sound is played and  */
/* a new target is set up.      */
/********************************/
function tutorialCatch(newTarget) {
	shapeCorrect.play();
	setTarget(newTarget);
	displayTarget();
    speechBubble();
}

/***********************************/
/* Pauses the game and sets up an  */
/* instruction depending on the    */
/* stage of the tutorial.  Enables */
/* both keyboard keys and mouse    */
/* clicks/taps.                    */
/***********************************/
function instruction(stage) {
	clearInterval(timer);
	timer = null;
	clearInterval(objectTimer);
	objectTimer = null;
	keyControls();
	
	if (stage == 1 || stage == 5) {
		createLeftHand();
		if (stage == 1) {
			prompt("This is not the target, move to the left!");
		} else {
			prompt("Move to the left to catch the target!");
		}
		document.getElementById("leftHand").onclick = function() {
			setLeftBucket();
			destroyHand("left");
			resume();
		}
	} else if (stage == 3 || stage == 6) {
		createRightHand();
		if (stage == 3) {
			prompt("Move to the right to catch the target!");
		} else {
			prompt("Catch the fish to gain a life!");
		}
		document.getElementById("rightHand").onclick = function() {
			setRightBucket();
			destroyHand("right");
			resume();
		}
	} else if (stage == 2 || stage == 4 || stage == 7) {
		if (stage == 2) {
			prompt("This is the target, stay here!");
		} else if (stage == 4) {
			prompt("Don't catch this shape, just stay here!");
		} else {
			prompt("Avoid the boot, you'll lose a life!");
		}
		setTimeout('resume();', 3000);
	} else {
		prompt("Tutorial finished! </br>Click anywhere to start a real game.");
		window.onclick = function() {
			location.href="GameFrame(BucketBonanza).html";
		}
	}
}

/*************************/
/* Resumes the game from */
/* being paused.         */
/*************************/
function resume() {
	destroyText();
	timer = setInterval('move();', 25);
	objectTimer = setInterval('sequenceDrop();', 3500);
	setTimeout(function() { instruction(stage); }, 4000);
	stage++;
}

/*****************************/
/* Key controls for moving   */
/* the bucket.  Ensures only */
/* the proper key will work  */
/*****************************/
function keyControls(){
	window.onkeydown = function(e){
		// code source: Jason's lecture
		if(e.event){
			pressed = e.keyCode;
		}else if(e.which){
			pressed = e.which;
		}
		/******************************/
		//window.alert(pressed);
		var curBucket = activeBucket();
		
		if(stage == 1 && curBucket == 1 && (pressed == 37 || pressed == 65)){
			setLeftBucket();
			destroyHand("left");
			resume();
		} else if (stage == 3 && curBucket == 0 && (pressed == 39 || pressed == 68) && document.getElementById("rightHand") != null) {
			setMidBucket();
		} else if (stage == 3 && curBucket == 1 && (pressed == 39 || pressed == 68)) {
			setRightBucket();
			destroyHand("right");
			resume();
		} else if (stage == 5 && curBucket == 2 && (pressed == 37 || pressed == 65) && document.getElementById("leftHand") != null) {
			setMidBucket();
		} else if (stage == 5 && curBucket == 1 && (pressed == 37 || pressed == 65)) {
			setLeftBucket();
			destroyHand("left");
			resume();
		} else if (stage == 6 && curBucket == 0 && (pressed == 39 || pressed == 68) && document.getElementById("rightHand") != null) {
			setMidBucket();
		} else if (stage == 6 && curBucket == 1 && (pressed == 39 || pressed == 68)) {
			setRightBucket();
			destroyHand("right");
			resume();
		} 
	}
}

/******************************/
/* Creates the left hand icon.*/
/******************************/
function createLeftHand() {
	var handLeft = document.createElement("IMG");
	var windowHeight = window.innerHeight;
	var windowWidth=window.innerWidth;
	var handHeight = windowHeight * 0.75;
	
    handLeft.setAttribute("src", "graphics/leftHand.png");
    handLeft.setAttribute("alt", "Left hand icon");
    handLeft.setAttribute("id", "leftHand");
	handLeft.setAttribute("class", "bucket");
	handLeft.setAttribute("location", 0);
	handLeft.lane = 0;
	//handLeft.style = "top: 80%";
	handLeft.style.marginTop = handHeight + "px";
    //handLeft.style.marginTop = "36%";
    document.body.appendChild(handLeft);
}

/*******************************/
/* Creates the right hand icon.*/
/*******************************/
function createRightHand() {
	var handRight = document.createElement("IMG");
	var windowHeight = window.innerHeight;
	var windowWidth=window.innerWidth;
	var handHeight = windowHeight * 0.75;
	
    handRight.setAttribute("src", "graphics/rightHand.png");
    handRight.setAttribute("alt", "Right hand icon");
    handRight.setAttribute("id", "rightHand");
	handRight.setAttribute("class", "bucket");
	handRight.setAttribute("location", 0);
	handRight.lane = 2;
	//handRight.style = "top: 80%";
	handRight.style.marginTop = handHeight + "px";
    //handRight.style.marginTop = "36%";
    document.body.appendChild(handRight);
}

/********************************/
/* Removes the hand from the    */
/* screen. Side should be "left"*/
/* or "right".                  */
/********************************/
function destroyHand(side) {
	var hand = document.getElementById("" + side + "Hand");
	document.body.removeChild(hand);
}

/*************************************/
/* Removes the text from the screen. */
/*************************************/
function destroyText() {
	document.getElementById("prompt").innerHTML = "";
}

/*************************************/
/* Adds an instruction prompt to the */
/* screen, the prompt is defined by  */
/* message.                          */
/*************************************/
function prompt(message) {
	document.getElementById("prompt").innerHTML = message;
}

function removeKeyImages() {
	var images = document.querySelectorAll(".tutKeys");
	
	for (i = 0; i < images.length; i++) {
		document.body.removeChild(images[i]);
	}
	
	destroyText();
}